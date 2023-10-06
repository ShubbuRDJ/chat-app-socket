import { Grid, Stack } from '@mui/material'
import React, { useContext } from 'react'
import './sidebar.scss'
import { ArrowBackIos, Dashboard, Menu, Settings, ShoppingBag } from '@mui/icons-material'
import { Link, NavLink } from 'react-router-dom'
import SideBarContext from '../../context/sidebarOpen/SidebarContext'

export default function Sidebar() {
    const {sidebarIsOpen, setSidebarIsOpen} = useContext(SideBarContext);
    console.log(sidebarIsOpen,"sidebarIsOpen")
  
    return (
        <>
            <Grid className={`sidebar-container ${sidebarIsOpen?"open":"close"}`} >

                <Grid className='logo-container' >
                    {sidebarIsOpen?<Grid className='logo-wrapper'>
                        <Grid className='logo'>
                            <Link to="/"><img src="https://seeklogo.com/images/N/north-dakota-fighting-hawks-logo-239B721C0F-seeklogo.com.png" alt="logo" /></Link>
                        </Grid>
                        <Grid className='logo-txt'>
                            <Link to="/"><span>BoilerPlate</span></Link>
                            <ArrowBackIos style={{cursor:'pointer   '}} onClick={() => {setSidebarIsOpen(!sidebarIsOpen);
                          
                            }} />
                        </Grid>
                    </Grid>:<Menu style={{color:'red',marginLeft:'1.7rem',cursor:'pointer'}} onClick={() => {setSidebarIsOpen(!sidebarIsOpen);
                    
                    }} />}
                </Grid>

                <Grid className='sidebar-main-content'>
                    <Grid className='sidebar-navs'>
                        <Stack spacing={1}>
                            <NavLink to="/dashboard" style={{ textDecoration: 'none' }}>
                                <Grid className='navs-item'>
                                    <Dashboard />
                                    <span>Dashboard</span>
                                </Grid>
                            </NavLink>
                            <NavLink to="/products" style={{ textDecoration: 'none' }}>
                                <Grid className='navs-item'>
                                    <ShoppingBag />
                                    <span>Products</span>
                                </Grid>
                            </NavLink>
                            <NavLink to="/settings" style={{ textDecoration: 'none' }}>
                                <Grid className='navs-item' >
                                    <Settings />
                                    <span>Settings</span>
                                </Grid>
                            </NavLink>
                        </Stack>
                    </Grid>
                </Grid>
                
            </Grid>
        </>
    )
}
