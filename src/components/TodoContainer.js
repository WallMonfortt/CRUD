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
  const [modal, setModal] = useState()
  const [backgroundColor, setBackgroundColor] = useState(null);
  const style = {backgroundColor}
    

    const onSubmitTask = (values) => {
      const createFunc = async () => {
        const response = await create(values);
        setTasks((prevState) => [response.data, ...prevState]);
        reset();
      };
      createFunc();
    };

  const onDeleteTask = (id) => {
    const deleteFunc = async () => { await deleteTask(id);
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
      setTasks((prevState) => [ response, ...prevState.filter((value) => value.id !== id)]);
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

  const pending = tasks.filter(value => value.isCompleted === false);
  const done = tasks.filter(value => value.isCompleted === true);
  

  useEffect(() => {
    if (pending.length === 0) {
      setModal("Congratulations!!! you've finished your tasks!!")
      setBackgroundColor("#90be6d")
    }else{
      setModal("")
      setBackgroundColor("")
      
    }
  }, [pending])


  return (
    <div>

      <CreateTodo handleSubmit={handleSubmit}
      register={register}
      handleCreateTask={onSubmitTask} />

      <div className="text-cong" style={style}>{modal}</div>

      <div className="tasks-counter">
        <h2>Pending tasks: <span className="count p">{pending.length}</span> </h2>
        <h2>Done tasks: <span className="count d">{done.length}</span></h2>
      </div>
    
      <Container>
        <Table>
          <thead>
            <tr className="tableHeader">
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
