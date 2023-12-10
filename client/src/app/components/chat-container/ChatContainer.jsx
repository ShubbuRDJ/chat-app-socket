import React from 'react';
import './chat-container.scss';
import Logout from '../logout/Logout';

export default function ChatContainer({currentChatUser}) {
  return (
    <div className='chat-container-container'>
      <div className="chat-header">
        <div className="user-details">
            <div className="avatar">
            <img src={`data:image/svg+xml;base64,${currentChatUser?.avatarImage}`} alt="avatar" />
            </div>
            <div className="userName">
                <h3>{currentChatUser?.userName}</h3>
            </div>
        </div>
        <Logout/>
      </div>
      <div className="chat-messages"></div>
      <div className="chat-input"></div>
    </div>
  )
}
