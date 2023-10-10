import { Grid, ListItemButton, ListItemIcon, ListItemText, Stack } from '@mui/material'
import React, { useState } from 'react'
import './topbar.scss'
import { AccountCircle, ArrowDropDown, ArrowDropUp, ExitToApp, ManageAccounts, Person } from '@mui/icons-material'
import {useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Topbar({ logoText }) {
  const [userDropDown, setUserDropDown] = useState(false);

  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem('token');
    toast.success("Logout successful")
    setTimeout(() => {
      navigate("/login");
    }, 1000);
  }
  return (
    <>
      <ToastContainer style={{zIndex:"12"}}/>
      <Grid className='topbar-container'>
        <Grid className='topbar-content'>
          <Grid className='user-profile' >
            <Grid className='user-profile-wrapper'>
              <Grid className='user-name'>
                <span>Shubham</span>
              </Grid>
              <Grid className='user-icon'>
                <span><AccountCircle /></span>
                {!userDropDown && <span onClick={() => setUserDropDown(!userDropDown)}><ArrowDropDown /></span>}
                {userDropDown && <span onClick={() => setUserDropDown(!userDropDown)} ><ArrowDropUp /></span>}
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>

{/* ************************** dropdown for logout, chsnge password and profile ****************************** */}
      {userDropDown &&
        <Grid style={{ width: "16rem", height: "11rem", backgroundColor: "#fff", position: "absolute", right: "15px", zIndex: "11", top: "4.5rem", borderRadius: "5px", boxShadow: "1px 1px 1px 1px #888888", }}>
          <Stack>
            <span >
              <ListItemButton id="profile">
                <ListItemIcon>
                  <Person />
                </ListItemIcon>
                <ListItemText>
                  Profile
                </ListItemText>
              </ListItemButton>
            </span>

            <span >
              <ListItemButton id="changePassword">
                <ListItemIcon>
                  <ManageAccounts />
                </ListItemIcon>
                <ListItemText>
                  Change Password
                </ListItemText>
              </ListItemButton>
            </span>

            <span id="logout">
              <ListItemButton onClick={handleLogout}>
                <ListItemIcon>
                  <ExitToApp />
                </ListItemIcon>
                <ListItemText>
                  Logout
                </ListItemText>
              </ListItemButton>
            </span>
          </Stack>

        </Grid>
      }
    </>
  )
}
