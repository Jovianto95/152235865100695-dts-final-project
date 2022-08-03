import React, {useState} from 'react';
import {AccountCircle, Logout} from '@mui/icons-material';
import {Avatar, Divider, IconButton, Menu, MenuItem, ListItemIcon} from '@mui/material';
import {signOut} from 'firebase/auth';
import {useAuthState} from 'react-firebase-hooks/auth';
import {NavLink, useNavigate} from 'react-router-dom';
import {auth} from '../Authentications/firebase';

const MenuLogout = () => {;
    const navigate = useNavigate();
    const [user] = useAuthState(auth);
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const onLogout = async () => {
        try {
            await signOut(auth);
            navigate('/');
        } catch (err) {
            console.log(err);
        }
    };

    return (user ?
        <>
        <IconButton
            size='large'
            aria-label='account of currrent user'
            aria-controls='menu-appbar'
            aria-haspopup='true'
            onClick={handleMenu}
            color='inherit'>
            <AccountCircle />
        </IconButton>
        <Menu
            anchorEl={anchorEl}
            id='account-menu'
            open={open}
            onClose={handleClose}
            onClick={handleClose}
            PaperProps={{
                elevation:0,
                sx: {
                    overflow:'visible',
                    filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32)',
                    mt:1.5,
                    '& .MuiAvatar-root' : {
                        width:32,
                        height:32,
                        ml:-0.5,
                        mr:1,
                    },
                    '&:before':{
                        content:'""',
                        display:'block',
                        position: 'absolute',
                        top:0,
                        right:14,
                        width: 10,
                        height: 10,
                        bgcolor: 'background.paper',
                        transform: 'translateY(-50%) rotate(45deg)',
                        zIndex: 0,
                    }
                }
            }}
            transformOrigin={{horizontal:'right', vertical:'top'}}
            anchorOrigin={{horizontal: 'right', vertical: 'bottom'}}
            >
                <MenuItem><Avatar />{user.email}</MenuItem>
                <Divider />
                <MenuItem onClick={onLogout}>
                    <ListItemIcon>
                        <Logout fontSize='small' />
                    </ListItemIcon>
                    Logout
                </MenuItem>
        </Menu>
        </> :
    <NavLink to={'/login'} key={'login'}
      className={({ isActive }) => isActive ? 'nav-active' : 'nav-inactive'}
    >
      LOGIN
    </NavLink>)
    }
export default MenuLogout;
