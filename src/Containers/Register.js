import React, {useEffect, useState} from "react";
import {Box, Typography, Button, Container, Grid, TextField, Avatar} from '@mui/material';
import {auth} from '../Authentications/firebase';
import {Link, useNavigate} from 'react-router-dom';
import { createUserWithEmailAndPassword } from "firebase/auth";
import {LockOutlinedIcon} from '@mui/icons-material';

const Register = () => {
    const navigate = useNavigate();
    const [errMessage, setErrMessage] = useState('');

    const handleSubmit = async (event) => {
        event.preventdefault();
        const data = new FormData(event.currentTarget);
        const email= data.get('emai');
        const password = data.get('password');

        try{
            const {user} = await createUserWithEmailAndPassword(auth, email, password);
            console.log(user);
            navigate('/');
        } catch (error){
            setErrMessage(error.message);
        };
    };

    return (
        <Container component='main' maxWidth='xs' sx={{bgcolor:'white'}}>
            <Box sx={{mt:10,
                display:'flex',
                flexDirection:'column',
                alignItems:'center'}}>
                    <Avatar sx={{m:1,
                        bgcolor: 'secondary.main'}}>
                        <LockOutlinedIcon /></Avatar>
                    <Typography component='h1' variant='h5'>
                        Sign Up
                    </Typography>
                    <Box component='form' noValidate onSubmit={handleSubmit} sx={{mt: 3}}>
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <TextField required
                                        fullWidth
                                        id='email'
                                        label='Email Address'
                                        name='email'
                                        autoComplete="email" />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField required
                                        fullWidth
                                        name='password'
                                        label='Password'
                                        type='password'
                                        id='password'
                                        autoCapitalize="new-password" />
                            </Grid>
                        </Grid>
                        <Typography color='red'>{errMessage}</Typography>
                        <Button type='submit'
                                fullWidth
                                variant='contained'
                                sx={{mt:2, mb:2}}>
                            Sign Up
                        </Button>
                        <Grid container justifyContent='flex-end'>
                            <Grid item>
                                <Link to='/login'>
                                    Already have an account? Sign In
                                </Link>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
        </Container>
    );
};

export default Register;