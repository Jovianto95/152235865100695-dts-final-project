import React, {useState} from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../Authentications/firebase";
import { Box, Button, Container, Grid, TextField, Typography } from "@mui/material";
import { Link, useNavigate} from 'react-router-dom';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import NavBar from '../Components/Navbar';

const Login = () => {
    const navigate= useNavigate();
    const [errMessage, setErrMessage] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        const email = data.get('email');
        const password = data.get('password');

        try {
            await signInWithEmailAndPassword(auth, email, password);
            navigate('/');
        } catch (error){
            setErrMessage(error.message);
        }
    };

    return (
        <>
        <NavBar />
        <Container component='main' maxWidth='xs' sx={{bgcolor:'white'}}>
            <Box sx={{
                mt: 10,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center'
            }}>
                <Avatar sx={{m:1, bgcolor: 'secondary.main'}}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component='h1' variant='h5'>
                    Devil's Games
                </Typography>
                <Box component='form' onSubmit={handleSubmit} noValidate sx={{mt:1}}>
                    <TextField 
                        margin="normal"
                        required
                        fullWidth
                        id='email'
                        label='Email Address'
                        name='email'
                        autoComplete="email"
                        autoFocus />
                    <TextField 
                        margin="normal"
                        required
                        fullWidth
                        name='password'
                        label='Password'
                        type='password'
                        id='password'
                        autoComplete='current-password' />
                    <Typography color='red'>{errMessage}</Typography>
                    <Button 
                        type='submit'
                        fullWidth
                        variant='contained'
                        sx={{mt:3, mb:2}}>
                        Sign In
                    </Button>
                    <Grid container>
                        <Grid item>
                            <Link to='/register'>
                                {"Dont have an account yet? Sign Up"}
                            </Link>
                        </Grid>
                    </Grid>
                </Box>
            </Box>
        </Container>
        </>
    );
};

export default Login;