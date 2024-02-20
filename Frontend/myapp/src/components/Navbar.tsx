import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { ExitToApp } from '@material-ui/icons';
import { AppBar, Toolbar, Typography, Button, IconButton }from '@material-ui/core';
import {useNavigate,Link} from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  title: {
    flexGrow: 1,
  },
  loginButton: {
    marginRight: theme.spacing(2), 
    color: '#ffffff', 
    backgroundColor: '#1976d2', 
    '&:hover': {
      backgroundColor: '#1565c0', 
    },
  },
  registerButton: {
    color: '#ffffff', 
    backgroundColor: '#4caf50', 
    '&:hover': {
      backgroundColor: '#388e3c', 
    },
  },
}));


function Navbar() {
  const classes = useStyles();
  const navigate=useNavigate();

  const isLoggedIn = !!localStorage.getItem('token');
  console.log(isLoggedIn);

  const handleLogout=()=>{
    localStorage.removeItem('token');
    navigate("/");
  }

  return (
    <AppBar position='static'>
      <Toolbar>
      <Typography variant="h6" className={classes.title}>Your Website</Typography>
      {isLoggedIn ?(
      <IconButton edge="end" color="inherit" aria-label="logout" onClick={handleLogout}><Button className={classes.registerButton}>Log Out<ExitToApp /></Button></IconButton>
      ):(<>
        <Button className={classes.loginButton} component={Link} to="/login" variant="contained">Login</Button>
        <Button className={classes.registerButton} component={Link} to="/register" variant="contained">Register</Button>
      </>)
      }
      </Toolbar>    
    </AppBar>
  )
}

export default Navbar
