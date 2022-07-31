import React from 'react';
import {Box, Typography, Container, Link, CssBaseline} from '@mui/material';

function Copyright() {
    return(
        <Typography variant='body2' color='text.secondary'>
            {'Copyright ©'}
            <Link color='inherit' href='https://mui.com'>
                Jovianto REA2A DTS
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
};

export default function Footer(){
    return (
        <Box sx={{
            display:'flex',
            flexDirection:'column',
            minHeight:'10vh'
        }}>
            <CssBaseline />
            <Box component='footer'
                sx={{
                    py:3,
                    px:2,
                    mt:'auto',
                    backgroundColor: (theme)=>
                        theme.palette.mode === 'light'
                        ? theme.palette.grey[200]
                        : theme.palette.grey[800],
                }}>
                <Container maxWidth='sm'>
                    <Typography variant='body1'>
                        Final Project DTS React Developer
                    </Typography>
                    <Copyright />
                </Container>
            </Box>
        </Box>
    );
}