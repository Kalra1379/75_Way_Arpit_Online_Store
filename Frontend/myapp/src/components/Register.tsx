import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { useRegisterUserMutation } from '../services/api';
import { TextField, Button, Typography, Container, Grid, Link } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(8),
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

function Register() {
  const classes = useStyles();
  const navigate=useNavigate();
  const [email,setEmail]=useState('');
  const [username,setUsername]=useState('');
  const [password,setPassword]=useState('');
  const [error, setError] = useState('');
  const [registerUser, { isLoading, isError }] = useRegisterUserMutation();


  const handleSubmit=async(e: React.FormEvent<HTMLFormElement>)=>{
    e.preventDefault();
    registerUser({ email, password });
  }

  return (
    <Container component="main" maxWidth="xs" className={classes.root}>
    <div>
      <Typography component="h1" variant="h5">
        Sign in
      </Typography>
      <form className={classes.form} onSubmit={handleSubmit}>
      <TextField variant="outlined" margin="normal" required fullWidth id="username" label="Username" name="username" autoComplete="username" autoFocus value={username} onChange={(e) => setUsername(e.target.value)}
        />
        <TextField variant="outlined"  margin="normal" required fullWidth id="email" label="Email Address" name="email" autoComplete="email" autoFocus value={email} onChange={(e) => setEmail(e.target.value)}
        />
        <TextField variant="outlined" margin="normal" required fullWidth name="password" label="Password" type="password" id="password" autoComplete="current-password" value={password} onChange={(e) => setPassword(e.target.value)}
        />
        {error && <Typography color="error">{error}</Typography>}
        <Button type="submit" fullWidth variant="contained" color="primary" className={classes.submit}>
          Sign In
        </Button>
        <Grid container>
          <Grid item xs>
            <Link href="#" variant="body2">
              Forgot password?
            </Link>
          </Grid>
          <Grid item>
            <Link href="/login" variant="body2">
              {"Already have an account? Log In"}
            </Link>
          </Grid>
        </Grid>
      </form>
    </div>
  </Container>
  )
}

export default Register
