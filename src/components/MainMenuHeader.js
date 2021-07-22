import React from 'react'
import '../styles/Main-Header.css'
import WM2 from '../img/WM2.png'
import WMonf from '../img/WMonf.png'


const MainMenuHeader = () => {
  return (
    <div className="Main-Header">
      <div className="logos">
        <img height="60px" alt="logo"  src={WM2} />
        <div ><img height="60px" alt="logo"  src={WMonf} /></div>
      </div>
      <h1 className="tittle">Task List</h1>
    </div>
  )
}

export default MainMenuHeader
