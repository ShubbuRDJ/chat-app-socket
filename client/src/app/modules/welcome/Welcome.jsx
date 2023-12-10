import React from 'react'
import './welcome.scss';
import Robot from '../../../assets/robot.gif';

export default function Welcome({currentUser}) {
  return (
    <div className='welcome-container'>
      <img src={Robot} alt="robot" />
      <h1>
        Welcome,<span>{currentUser?.userName}!</span>
      </h1>
      <h3>Please select chat to start messaging.</h3>
    </div>
  )
}
