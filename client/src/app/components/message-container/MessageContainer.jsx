import React, { useEffect, useState } from 'react';
import './message-container.scss';
import { postRequest } from '../../../services/axios-api-request/axios_api_Request';
import toaster from '../../../utility/toaster/toaster';

export default function MessageContainer({ currentChatUser, currentUser }) {
  const [messages, setMessages] = useState([]);

  const getAllMessages = async () => {
    try {
      const res = await postRequest('api/message/getAllMessages', {
        from: currentUser?.userId,
        to: currentChatUser?._id,
      });
      if (res?.data?.results?.success) {
        setMessages(res?.data?.results?.data);
      }
      else{
        toaster('error', 'Data not found');
      }
    } catch (error) {
      toaster('error', 'Something went wrong!');
    }
  }

  useEffect(() => {
    getAllMessages();
  // eslint-disable-next-line
  }, [currentChatUser])
  return (
    <div className='chat-messages-main-container'>
      {
        messages.map((msg,index)=>(
          <div key={index} className="">
            <div className={`message ${(msg.fromSelf)?'sended':'recieved'}`}>
              <div className="content">
                <p>{msg.message}</p>
              </div>
            </div>
          </div>
        ))
      }
    </div>
  )
}
