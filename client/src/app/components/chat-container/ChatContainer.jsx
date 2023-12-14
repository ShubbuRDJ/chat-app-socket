import React from 'react';
import './chat-container.scss';
import Logout from '../logout/Logout';
import ChatInput from '../chat-input/ChatInput';
import MessageContainer from '../message-container/MessageContainer';

export default function ChatContainer({currentChatUser}) {
  const handleSendMsg= async (msg)=>{}
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
      <MessageContainer/>
      <ChatInput handleSendMsg={handleSendMsg}/>
    </div>
  )
}
