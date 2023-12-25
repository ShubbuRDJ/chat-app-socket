import React, { useEffect, useState } from 'react';
import './chat-container.scss';
import Logout from '../logout/Logout';
import ChatInput from '../chat-input/ChatInput';
import MessageContainer from '../message-container/MessageContainer';
import { postRequest } from '../../../services/axios-api-request/axios_api_Request';
import toaster from '../../../utility/toaster/toaster';

export default function ChatContainer({ currentChatUser, currentUser, socket }) {
  const [messages, setMessages] = useState([]);
  const [arrivalessage, setArrivalMessages] = useState(null);

  console.log(currentChatUser, currentUser, 'hdscvsduydasv')


  const handleSendMsg = async (msg) => {
    const payload = {
      from: currentUser?.userId,
      to: currentChatUser?._id,
      message: msg
    }
    try {
      const res = await postRequest('api/message/addMessage', payload)
      if (!(res?.data?.results?.success)) {
        toaster('error', 'Error in sending message');
      }
      else {
        socket.current.emit('send-msg', {
          from: currentUser?.userId,
          to: currentChatUser?._id,
          message: msg
        });
        const msgs = [...messages];
        msgs.push({ fromSelf: true, message: msg });
        setMessages(msgs);
      }
    } catch (error) {
      toaster('error', 'Something went wrong!');
    }
  }

  useEffect(() => {
      socket?.current?.on('msg-recieve', (msg) => {
        console.log(msg,'cshcsjcs')
        setArrivalMessages({ fromSelf: false, message: msg })
      })
    // eslint-disable-next-line
  }, [])

  useEffect(() => {
    arrivalessage && setMessages((prev) => [...prev, arrivalessage])
  }, [arrivalessage])



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
        <Logout />
      </div>
      <MessageContainer currentChatUser={currentChatUser} currentUser={currentUser} messages={messages} setMessages={setMessages} />
      <ChatInput handleSendMsg={handleSendMsg} />
    </div>
  )
}
