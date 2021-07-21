import React, { useState, useEffect } from 'react'
import { Button } from "reactstrap";
import completed from '../img/completed.png'
import nocompleted from '../img/noCompleted.png'


const TodoItem = ({id, task, student, isCompleted, handleDelete, handleUpdate}) => {
  const [icon, setIcon] = useState(nocompleted);
  const [backgroundColor, setBackgroundColor] = useState();
  const [textDecoration, setTextDecoration] = useState();
  const style = {backgroundColor, textDecoration }

  function check() {
    document.getElementById("checkBox").checked = true
  }
  function uncheck() {
    document.getElementById("checkBox").checked = false
  }


  useEffect(() => {
    if (isCompleted === true) {
      setIcon(completed)
      setBackgroundColor("#b5e48c");
      setTextDecoration("line-through")
      check();
    }else{
      setIcon(nocompleted)
      setBackgroundColor("#e9c46a");
      setTextDecoration("none")
      uncheck();
    }
  }, [isCompleted])

  


  return (
    <tr style={style}>
      <td className="tableCont">{task}</td>
      <td className="tableCont">{student}</td>
      <td><img src={icon} width="30px" alt={icon} /><span>{isCompleted}</span></td>
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
