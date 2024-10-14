import { Box, Button, Stack, TextField, Typography } from '@mui/material';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
// import LoginIcon from '@mui/icons-material/Login';
// import './styles/loginform.css'

const Login = () => {
    const[user,Setuser]=useState({username:'',password:''})
    const navigate=useNavigate();
    let updateUser=(event)=>{
        Setuser({...user,[event.target.name]:event.target.value})
    }
    let sendData=(event)=>{
        if((user.username=="admin")&&(user.password=="1234")){
            localStorage.setItem("username","admin")
            navigate('/home')
        }
        else{
            alert("Invalid Credentials")
        }
    }   

  return (
    <div class="body">
        <Box display="flex" justifyContent="center" alignItems="center" minHeight="80vh" >
            
        <Stack spacing={4} direction="column" sx={{ width: '300px' }} >
        <Typography variant='h4' >Login</Typography>
        <TextField id="outlined-basic" label="Username" name="username" value={user.username} variant="outlined" onChange={updateUser} />
        <TextField id="outlined-basic" label="Password" name="password" value={user.password} variant="outlined" onChange={updateUser} />
        <Button size="large" onClick={sendData} variant="contained" >Login</Button>
        </Stack>
        </Box>
    </div>
  )
}

export default Login