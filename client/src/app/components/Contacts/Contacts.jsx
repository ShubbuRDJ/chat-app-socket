import { Grid } from '@mui/material';
import React, { useState } from 'react'
import Logo from '../../../assets/logo.svg';
import './contacts.scss';

export default function Contacts({ contacts, changeChat, currentUser }) {
    const [currrentSelected, setCurrrentSelected] = useState(undefined);

    const changeCurrentChat = (index, contact) => {
        setCurrrentSelected(index);
        changeChat(contact);
    }
    return (
        <>
            {
                currentUser?.userName && currentUser?.profileImage &&
                (<Grid className='contact-container'>
                    <Grid className='brand'>
                        <img src={Logo} alt="logo" />
                        <h3>snappy</h3>
                    </Grid>

                    <Grid className='contacts'>
                        {
                            contacts?.map((contact, index) => (
                                <div className={`contact ${(index === currrentSelected) ? 'selected' : ''}`} key={index} onClick={() => changeCurrentChat(index, contact)}>
                                    <div className="contact-avatar">
                                        <img src={`data:image/svg+xml;base64,${contact?.avatarImage}`} alt="avatar" />
                                    </div>
                                    <div className="contact-userName">
                                        <h3>{contact?.userName}</h3>
                                    </div>
                                </div>
                            ))
                        }
                    </Grid>

                    <Grid className='current-user'>
                        <div className="current-user-avatar">
                            <img src={`data:image/svg+xml;base64,${currentUser.profileImage}`} alt="avatar" />
                        </div>
                        <div className="current-user-userName">
                            <h2>{currentUser.userName}</h2>
                        </div>
                    </Grid>
                </Grid>)
            }
        </>
    )
}
