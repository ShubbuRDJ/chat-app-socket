import React from 'react';
import './chat-container.scss';
import Logout from '../logout/Logout';
import ChatInput from '../chat-input/ChatInput';
import MessageContainer from '../message-container/MessageContainer';
import { postRequest } from '../../../services/axios-api-request/axios_api_Request';
import toaster from '../../../utility/toaster/toaster';

export default function ChatContainer({currentChatUser,currentUser}) {
  const handleSendMsg= async (msg)=>{
    const payload = {
      from:currentUser?.userId,
      to:currentChatUser?._id,
      message:msg
    }
    try {
      const res = await postRequest('api/message/addMessage',payload)
      if(!(res?.data?.results?.success)){
        toaster('error','Error in sending message');
      }
    } catch (error) {
      toaster('error','Something went wrong!');
    }
  }
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
      <MessageContainer currentChatUser={currentChatUser} currentUser={currentUser}/>
      <ChatInput handleSendMsg={handleSendMsg}/>
    </div>
  )
}
