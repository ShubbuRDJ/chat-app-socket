import { Grid } from '@mui/material';
import React, { useEffect, useRef, useState } from 'react';
import './chat.scss';
import { getRequest } from '../../../services/axios-api-request/axios_api_Request';
import toaster from '../../../utility/toaster/toaster';
import { useNavigate } from 'react-router-dom'
import Contacts from '../../components/Contacts/Contacts';
import Welcome from '../welcome/Welcome';
import ChatContainer from '../../components/chat-container/ChatContainer';
import {io} from 'socket.io-client';


export default function Chat() {
  const navigate = useNavigate()
  const socket = useRef();
  const [contacts, setContacts] = useState([]);
  const [currentChat, setCurrentChat] = useState(undefined);
  const currentUserDetails =  JSON.parse(localStorage.getItem('userDetails'))


  useEffect(() => {
    if (currentUserDetails) {
      socket.current = io('http://localhost:8080');
      socket.current.emit('add-user',currentUserDetails?.userId)
    }
    // eslint-disable-next-line
  }, [currentUserDetails])

  useEffect(() => {
    if (currentUserDetails.isProfileImage) {
      getAllContacts();
    }
    else {
      navigate('/setAvatar');
    }
    // eslint-disable-next-line
  }, [currentUserDetails.isProfileImage])

  const getAllContacts = async () => {
    try {
      const { data } = await getRequest(`api/user/getAllUsers/${currentUserDetails?.userId}`);
      if (data?.results?.statusCode === 200) {
        setContacts(data?.results?.data)
      }
      else {
        toaster('error', data?.results?.message)
      }
    } catch (error) {
      toaster('error', 'Something went wrong!')
    }
  }

  const handleChatChange = (chat) => {
    console.log(chat,'cdcbdbcdchd')
    setCurrentChat(chat);
  }
  return (
    <>
      <Grid className="chat-container">
        <Grid className='chat-wrapper'>
          <Contacts contacts={contacts} changeChat={handleChatChange} currentUser={currentUserDetails} />
          {(currentChat === undefined)?
          <Welcome currentUser={currentUserDetails} />:
          <ChatContainer currentChatUser={currentChat} currentUser={currentUserDetails} socket={socket}/>
          }
        </Grid>
      </Grid>
    </>
  )
}
