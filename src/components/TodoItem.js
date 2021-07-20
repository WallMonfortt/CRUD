import React, { useState, useEffect } from 'react'
import { Button } from "reactstrap";
import completed from '../img/completed.png'
import nocompleted from '../img/noCompleted.png'


const TodoItem = ({id, task, student, isCompleted, handleDelete, handleUpdate}) => {
  const [icon, setIcon] = useState(nocompleted);

  function check() {
    document.getElementById("checkBox").checked = true
  }
  function uncheck() {
    document.getElementById("checkBox").checked = false
  }


  useEffect(() => {
    if (isCompleted === true) {
      setIcon(completed)
      check();
    }else{
      setIcon(nocompleted)
      uncheck();
    }
  }, [isCompleted])

  


  return (
    <tr>
      <td>{task}</td>
      <td>{student}</td>
      <td><img src={icon} width="20px" alt={icon} /><span>{isCompleted}</span></td>
      <td><input type="checkbox" id="checkBox" onChange={ () => {
        handleUpdate(id,task,student, isCompleted)
      }}/></td>
      <td>
        <Button color="danger" onClick={() => {
          handleDelete(id);
        }}>Delete</Button>
      </td>
    </tr>

    
  )
}

export default TodoItem
