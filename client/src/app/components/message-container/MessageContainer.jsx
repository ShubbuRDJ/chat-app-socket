import React, { useEffect, useRef } from 'react';
import './message-container.scss';
import { postRequest } from '../../../services/axios-api-request/axios_api_Request';
import toaster from '../../../utility/toaster/toaster';
import { v4 as uuidv4 } from 'uuid';

export default function MessageContainer({ currentChatUser, currentUser, messages, setMessages }) {
  const scrollRef = useRef();

  const getAllMessages = async () => {
    try {
      const res = await postRequest('api/message/getAllMessages', {
        from: currentUser?.userId,
        to: currentChatUser?._id,
      });
      if (res?.data?.results?.success) {
        setMessages(res?.data?.results?.data);
      }
      else {
        toaster('error', 'Data not found');
      }
    } catch (error) {
      toaster('error', 'Something went wrong!');
    }
  }

  useEffect(() => {
    if (currentChatUser) {
      getAllMessages();
    }
    // eslint-disable-next-line
  }, [currentChatUser])

  useEffect(() => {
    scrollRef?.current?.scrollIntoView({ behaviour: 'smooth' })
  }, [messages])
  return (
    <div className='chat-messages-main-container'>
      {
        messages.map((msg) => (
          <div key={uuidv4()} ref={scrollRef}>
            <div className={`message ${(msg.fromSelf) ? 'sended' : 'recieved'}`}>
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
