import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import MenuIcon from '@mui/icons-material/Menu';
import NotificationsIcon from '@mui/icons-material/Notifications';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';
import { AppBar, Box, IconButton, Toolbar, Typography, Badge, Drawer, Button, List, Divider, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import styles from './styles';
import logo from 'images/logo-white.png'

import MenuOpenIcon from '@mui/icons-material/MenuOpen';




const AppHeader = ({ handleDrawerOpen, handleDrawerClose, sideBarOpen }) => {

    const theme = useTheme();
    return (
        <>
            <AppBar sx={styles.appBar} >
                <Toolbar>
                    {!sideBarOpen &&
                        <IconButton onClick={handleDrawerOpen} color='secondary'>
                            <MenuIcon />
                        </IconButton>
                    }
                     {sideBarOpen &&
                        <IconButton onClick={handleDrawerClose} color='secondary'>
                            <MenuOpenIcon />
                        </IconButton>
                    }

                    <Box component='img' sx={styles.appLogo} src={logo} />
                    <Box sx={{ flexGrow: 1 }} />
                    <IconButton title="Notifications" color='secondary'>
                        <Badge badgeContent={4} color="error">
                            <NotificationsIcon />
                        </Badge>
                    </IconButton>
                    <IconButton title="Settings" color='secondary'>
                        <SettingsIcon />
                    </IconButton>
                    <IconButton title="Sign Out" color='secondary'>
                        <LogoutIcon />
                    </IconButton>
                </Toolbar>
            </AppBar>
            
        </>

    )
}


export default AppHeader;