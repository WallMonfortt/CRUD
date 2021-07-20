import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Table, Container } from "reactstrap";
import { useForm } from "react-hook-form";
import { create, read, deleteTask, updateTask } from "../services/crud";
import CreateTodo from "./CreateTodo";
import TodoItem from "./TodoItem";

const TodoContainer = () => {
  const [tasks, setTasks] = useState([]);
  const { register, handleSubmit, reset } = useForm();
    

    const onSubmitTask = (values) => {
      const createFunc = async () => {
        const response = await create(values);
        setTasks((prevState) => [response.data, ...prevState]);
        reset();
      };
      createFunc();
    };

  const onDeleteTask = (id) => {
    const deleteFunc = async () => {
      const response = await deleteTask(id);
      setTasks((prevState) => prevState.filter((value) => value.id !== id))
    };

    deleteFunc();
  };

  const onUpdateTask = (id,task,student, isCompleted) => {
    let newTask = {}
    if (isCompleted) {
      newTask = {
        id: id,
        task: task,
        student: student,
        isCompleted: false
      }
    } else {
      newTask = {
        id: id,
        task: task,
        student: student,
        isCompleted: true
      }
    }

    const upTask = async () => {
      const response = await updateTask(newTask);
      setTasks((prevState) => [response, ...prevState.filter((value) => value.id !== id)]);
      const readFunc = async () => {
        const data = await read();
        setTasks(data.todos);
      };
      readFunc();
    }
      
    upTask();
   
  }

  useEffect(() => {
    const readFunc = async () => {
      const data = await read();
      setTasks(data.todos);
    };
    readFunc();
  }, []);

  const list = tasks.map((value) => (
    <TodoItem
      id={value.id}
      key={value.id}
      task={value.task}
      student={value.student}
      isCompleted={value.isCompleted}
      handleDelete = {onDeleteTask}
      handleUpdate = {onUpdateTask}
    />
  ));


  return (
    <div>
      <CreateTodo handleSubmit={handleSubmit}
      register={register}
      handleCreateTask={onSubmitTask} />
    
      <Container>
        <Table>
          <thead>
            <tr>
              <th>Task</th>
              <th>Owner</th>
              <th>Status</th>
              <th>Ready?</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {list}
          </tbody>
          
        </Table>
      </Container>

    </div>
  );
};

export default TodoContainer;
