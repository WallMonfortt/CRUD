import React, { useState } from "react";
import { Button, Modal, ModalBody, ModalHeader, ModalFooter } from "reactstrap";


const CreateTodo = ({ handleSubmit, register, handleCreateTask}) => {
  const [modal, setModal] = useState(false)

  
  const showModal = () => {
    setModal(true);
  }

  const closeModal = () => {
    setModal(false);
  }
  return (
    <>
    <Button color="info" id="newT" onClick={() => {
          showModal();
        }}>Insert New Task</Button>
        <br />
        <br />

        
      <Modal isOpen={modal}>
        <ModalHeader>
          <div>
            <h3>Insert New Task</h3>
          </div>
        </ModalHeader>

        <ModalBody>
          <form id="createTask" onSubmit={handleSubmit(handleCreateTask)}>
            <label>Task:</label>
            <input className="form-control" name="task" type="text" {...register("task", {required: true})} />

            <label>Student:</label>
            <input className="form-control" name="student" type="text" {...register("student", {required: true})} />
          </form>

        </ModalBody>

        <ModalFooter>
          <Button color="primary" type="submit" form="createTask" onClick={() =>{closeModal();}}>Submit</Button>
          <Button color="danger" onClick={() =>{closeModal();}}>Cancel</Button>
        </ModalFooter>
      </Modal>
    </>
  )
}

export default CreateTodo
