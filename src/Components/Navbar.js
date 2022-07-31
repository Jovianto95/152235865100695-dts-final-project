import React from 'react';
import {Box, AppBar, Toolbar, Typography,
     alpha, InputBase, styled, ListItemSecondaryAction} from '@mui/material';
import {MovieFilter, SearchIcon} from "@mui/icons-material";
import {Link, Navlink} from 'react-router-dom';
import Logout from './Logout';

const Search = styled('div')(({theme}) => ({
    position:'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.55),
    '&hover':{
        backgroundColor: alpha(theme.palette.common.white, 0.35),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    widht:'100%',
    [theme.breakpoints.up('sm')]:{
        marginleft: theme.spacing(3),
        widht:'auto'
    },
}));

const SearchIconWrapper = styled('div')(({theme}) => ({
    padding: theme.spacing(0,2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({theme})=> ({
    color: 'inherit',
    '& .MuiInputBase.input': {
        padding: theme.spacing(1, 1, 1, 0),
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        widht: '100%',
        [theme.breakpoints.up('md')]: {
            width:'20ch',
        }
    }
}));

const navItems = [
    {text: 'Home', link: '/'},
    {text: 'About', link: '/about'},
    {text: 'Contact Us', link: '/contact'}
];

const Navbar = ()=>{
    return (
        <Box sx={{display:'flex'}}>
            <AppBar>
                <Toolbar>
                    <MovieFilter sx={{display:"flex", mr:1}} />
                    <Typography variant='h6'
                        sx={{flexGrow:1,
                            display:'block',
                            fontFamily: 'moonospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                        }}>
                            <Link style={{color: 'inherit', textDecoration:'inherit'}} to="/">
                                Devil's Games
                            </Link>
                    </Typography>
                    <Typography variant='h6' noWrap component='div'
                        sx={{display:{xs:'none', sm:'block'}}}>
                    </Typography>
                    <Search>
                        <SearchIconWrapper>
                            <SearchIcon />
                        </SearchIconWrapper>
                        <StyledInputBase placeholder='Search...' inputProps={{'aria-label':'search'}} />
                    </Search>
                    <Box sx={{flexGrow:1}} />
                    <Box sx={{display: 'block'}}>
                        {navItems.map((item)=>(
                            <Navlink to={item.link}
                                key={item.text}
                                className={({isActive})=> isActive?'nav-active':'nav-inactive'}
                                >
                                {item.text}
                            </Navlink>
                        ))};
                        <Logout />
                    </Box>
                </Toolbar>
            </AppBar>
        </Box>
    )
};

export default Navbar;