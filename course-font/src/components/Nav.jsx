import React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import { Link } from 'react-router-dom';
const Nav = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed" sx={{backgroundColor: '#86D293'}}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
          
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1, fontWeight: 900}}>
            COURSE APP
          </Typography>
          
          <Link to={'/'} style={{color: 'white'}}><Button color="inherit" sx={{border: 1, margin: 2, '&:hover': { border: 'none', 
          backgroundColor: 'white', color: '#86D293'},'&:focus': {outline: 'none'}}}>Home</Button></Link>

        <Link to={'/add'} style={{color: 'white'}}><Button color="inherit" sx={{border: 1, '&:hover': { border: 'none', 
        backgroundColor: 'white', color: '#86D293'},'&:focus': {outline: 'none'}}}>Add</Button></Link>

        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default Nav