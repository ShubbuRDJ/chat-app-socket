import { Grid } from '@mui/material'
import './auth-layout.scss'
import React from 'react'

export default function AuthLayout({children}) {
  return (
    <>
      <Grid className='auth-main-container'>
        {children}
      </Grid>
    </>
  )
}
