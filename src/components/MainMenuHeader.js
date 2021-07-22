import React from 'react'
import '../styles/Main-Header.css'
import WM2 from '../img/WM2.png'
import WMonf from '../img/WMonf.png'


const MainMenuHeader = () => {
  return (
    <div className="Main-Header">
      <div className="logos">
        <a ><img height="60px" src={WM2} /></a>
        <div ><img height="60px" src={WMonf} /></div>
      </div>
      <h1 className="tittle">Task List</h1>
    </div>
  )
}

export default MainMenuHeader
