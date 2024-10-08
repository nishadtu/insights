import React from "react";
import { styled } from '@mui/material/styles';
import { List, Divider } from '@mui/material';
import MuiDrawer from '@mui/material/Drawer';
import ListItemBox from '../ListItem';
import PlaylistAddCircleOutlinedIcon from '@mui/icons-material/PlaylistAddCircleOutlined';
import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';
import PhotoLibraryOutlinedIcon from '@mui/icons-material/PhotoLibraryOutlined';
import ApartmentOutlinedIcon from '@mui/icons-material/ApartmentOutlined';
import GavelOutlinedIcon from '@mui/icons-material/GavelOutlined';
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import PortraitOutlinedIcon from '@mui/icons-material/PortraitOutlined';
import TuneOutlinedIcon from '@mui/icons-material/TuneOutlined';
import GolfCourseIcon from '@mui/icons-material/GolfCourse';
// import { Link } from 'react-router-dom';
import { buttonStyle } from './styles';
import { NavLink } from 'react-router-dom';
import routes from '../../routes/routeNames';

const drawerWidth = 240;
const openedMixin = (theme) => ({
  width: drawerWidth,
  top: '64px',
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
  [theme.breakpoints.down("md")]: {
    top: '56px',
  },
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  top: '64px',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
  [theme.breakpoints.down("sm")]: {
    top: '56px',
  },
});

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    top: '64px',
    [theme.breakpoints.down("sm")]: {
      top: '56px',
    },
    variants: [
      {
        props: ({ open }) => open,
        style: {
          ...openedMixin(theme),
          '& .MuiDrawer-paper': openedMixin(theme),
        },
      },
      {
        props: ({ open }) => !open,
        style: {
          ...closedMixin(theme),
          '& .MuiDrawer-paper': closedMixin(theme),
        },
      },
    ],
  }),
);

const SideNav = ({ open, handleDrawerClose }) => {

  return (
    <Drawer variant="permanent" open={open}>
      <List>
        <NavLink to={routes.overview} style={buttonStyle} onClick={handleDrawerClose}><ListItemBox text="Overview" icon={<PlaylistAddCircleOutlinedIcon />} /></NavLink>
        <NavLink to={routes.nearest} style={buttonStyle} onClick={handleDrawerClose}><ListItemBox text="Nearest Pin" icon={<GolfCourseIcon />} /></NavLink>
        <NavLink to={routes.longest} style={buttonStyle} onClick={handleDrawerClose}><ListItemBox text="Longest Drive" icon={<GolfCourseIcon />} /></NavLink>
        <NavLink to={routes.dashboard} style={buttonStyle} onClick={handleDrawerClose}><ListItemBox text="Dashboard" icon={<DashboardOutlinedIcon />} /></NavLink>
        <NavLink to={routes.workflow} style={buttonStyle} onClick={handleDrawerClose}><ListItemBox text="Workflow" icon={<PhotoLibraryOutlinedIcon />} /></NavLink>
        <NavLink to={routes.users} style={buttonStyle} onClick={handleDrawerClose}><ListItemBox text="Users" icon={<PeopleAltOutlinedIcon />} /></NavLink>
        <NavLink to={routes.company} style={buttonStyle} onClick={handleDrawerClose}><ListItemBox text="Company Details" icon={<ApartmentOutlinedIcon />} /></NavLink>
        <NavLink to={routes.terms} style={buttonStyle} onClick={handleDrawerClose}><ListItemBox text="Terms and Condition" icon={<GavelOutlinedIcon />} /></NavLink>

        {/* <Link href='/2024/adminpanel/company' sx={buttonStyle}><ListItemBox text="Company Details" icon={<ApartmentOutlinedIcon />} /></Link>
        <Link href='/2024/adminpanel/terms' sx={buttonStyle}><ListItemBox text="Terms and Condition" icon={<GavelOutlinedIcon />} /></Link> */}
      </List>
      <Divider />
      <List>
      <NavLink to={routes.account} style={buttonStyle}><ListItemBox text="Account" icon={<PortraitOutlinedIcon />} /></NavLink>
      <NavLink to={routes.settings} style={buttonStyle}><ListItemBox text="Settings" icon={<TuneOutlinedIcon />} /></NavLink>


      </List>
      {/* <List>
        {['All mail', 'Trash', 'Spam'].map((text, index) => (
          <ListItem key={text} disablePadding sx={{ display: 'block' }}>
            <ListItemButton
              sx={[
                {
                  minHeight: 48,
                  px: 2.5,
                },
                open
                  ? {
                    justifyContent: 'initial',
                  }
                  : {
                    justifyContent: 'center',
                  },
              ]}
            >
              <ListItemIcon
                sx={[
                  {
                    minWidth: 0,
                    justifyContent: 'center',
                  },
                  open
                    ? {
                      mr: 3,
                    }
                    : {
                      mr: 'auto',
                    },
                ]}
              >
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText
                primary={text}
                sx={[
                  open
                    ? {
                      opacity: 1,
                    }
                    : {
                      opacity: 0,
                    },
                ]}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List> */}
    </Drawer>
  )
}

export default SideNav