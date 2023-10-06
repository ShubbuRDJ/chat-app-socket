import React, { useContext, useEffect } from 'react'
import Topbar from '../../components/topbar/Topbar'
import Sidebar from '../../components/sidebar/Sidebar'
import { Grid } from '@mui/material'
import './main-layout.scss'
import SideBarContext from '../../context/sidebarOpen/SidebarContext'
import useWindowDimensions from '../../../utility/viewportWidth/viewportWidth'

export default function MainLayout({children}) {
  const {sidebarIsOpen,setSidebarIsOpen} = useContext(SideBarContext);
  const {width} = useWindowDimensions();
  
  useEffect(()=>{
    if(width <=768){
      setSidebarIsOpen(false)
  }else{
    setSidebarIsOpen(true)
  }
  },[setSidebarIsOpen, width])
  console.log(width)

  return (
    <div className='mainLayout-container' >
      <Topbar logoText={"Boilerplate"}/>
      <Grid className='main-container'>
      <Sidebar />
      <Grid className='mainLayout-main-content' style={{width: sidebarIsOpen?'calc(100% - 400px)':'calc(100% - 67px)',marginLeft: sidebarIsOpen?'400px':'67px',transition: 'all 0.3s ease-in-out'}}>
      {children}
      </Grid>
      </Grid>
    </div>
  )
}
