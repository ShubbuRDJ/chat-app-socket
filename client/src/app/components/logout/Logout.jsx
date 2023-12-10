import React from 'react';
import './logout.scss';
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';
import {useNavigate} from 'react-router-dom';

export default function Logout() {
  const navigate = useNavigate()
  const handleLogout = ()=>{
    localStorage.clear();
    navigate('/login');
  }
  return (
    <button type='button' className='logout-button' onClick={handleLogout}>
      <PowerSettingsNewIcon/>
    </button>
  )
}
