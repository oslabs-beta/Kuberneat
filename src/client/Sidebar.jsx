import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { Context } from './Context'

import BarChartTwoToneIcon from '@mui/icons-material/BarChartTwoTone';
import HubIcon from '@mui/icons-material/Hub';
import LogoutTwoToneIcon from '@mui/icons-material/LogoutTwoTone';
import LiveHelpTwoToneIcon from '@mui/icons-material/LiveHelpTwoTone';
import MenuTwoToneIcon from '@mui/icons-material/MenuTwoTone';
import CloseFullscreenTwoToneIcon from '@mui/icons-material/CloseFullscreenTwoTone';

export default function Sidebar() {

    const  [ active, setActive ] = useState(false);
    const { darkModeOn } = useContext(Context);

    const activateSidebar = () => {
        setActive(old => !old)
    }

    return (

        <div className={ active ? "sidebar-reg" : "sidebar-mobile" }>

            <div className='menu-icon' onClick={activateSidebar} >
                {!active 
                ? <MenuTwoToneIcon className='menu'></MenuTwoToneIcon> 
                : <CloseFullscreenTwoToneIcon className="close-icon">
                  </CloseFullscreenTwoToneIcon> 
                }
            </div>

            {/* Can use if we want user profile data on the sidebar instead */}    

			{/* <div className={active ? 'user' : 'user-active'}>
				<div className={active ? "user-pic-active" : "user-pic"}>Y</div> 
				<p>Yaku</p>
				<p>Admin</p>
			    </div> */}

            <nav>
                <ul className={ active ? "ul-item" : "ul-item-icon"}>
                    <li>
                    <BarChartTwoToneIcon className="icon"></BarChartTwoToneIcon>
                    <Link to="/dashboard">Dashboard</Link>
                    </li>
                    <li>
                    <HubIcon className="icon"></HubIcon>
                    <Link to="/visualizer">Visualizer</Link>
                    </li>
                    <li>
                    <BarChartTwoToneIcon className="icon"></BarChartTwoToneIcon>
                    <Link to="/dashboard">Dashboard</Link>
                    </li>
                    <li>
                    <HubIcon className="icon"></HubIcon>
                    <Link to="/visualizer">Visualizer</Link>
                    </li>
                    <li>
                    <BarChartTwoToneIcon className="icon"></BarChartTwoToneIcon>
                    <Link to="/charts">Charts</Link>
                    </li>
                    <li>
                    <HubIcon className="icon"></HubIcon>
                    <Link to="/visualizer">Visualizer</Link>
                    </li>
                    <li>
                    <LiveHelpTwoToneIcon className="icon"></LiveHelpTwoToneIcon>
                    <Link to="/faq">FAQ</Link>
                    </li>
                    <li>
                    <LogoutTwoToneIcon className="icon" id="logout"></LogoutTwoToneIcon>
                    <Link to="/">Logout</Link>
                    </li>
                </ul>

            </nav>
        </div>
    );
}


/* import { 
    ProSidebar, 
    Menu, 
    SubMenu, 
    MenuItem, 
    SidebarContent, 
    SidebarFooter, 
    SidebarHeader 
} from 'react-pro-sidebar'; 
import {
    Box,
    Divider,
    Drawer,
    IconButton,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Typography
} from '@mui/material';

import BarChartTwoToneIcon from '@mui/icons-material/BarChartTwoTone';
import HubIcon from '@mui/icons-material/Hub';
import LogoutTwoToneIcon from '@mui/icons-material/LogoutTwoTone';
import LiveHelpTwoToneIcon from '@mui/icons-material/LiveHelpTwoTone';
import React from 'react';

// import 'react-pro-sidebar/dist/css/styles.css';

export default function Sidebar() {


    return (
        <div className='sidebar-dark'>
            <ProSidebar>

                <SidebarHeader>
                <Typography>Sidebar Menu</Typography>
                </SidebarHeader>

                <SidebarContent>

                    <Menu>
                        <MenuItem icon={<BarChartTwoToneIcon />}>
                        <Typography>Dashboard</Typography>
                        </MenuItem>

                        <MenuItem icon={<HubIcon />}>
                        <Typography>Visualizer</Typography>
                        </MenuItem>

                        <MenuItem icon={<LiveHelpTwoToneIcon />}>
                        <Typography>FAQ</Typography>
                        </MenuItem>

                        <MenuItem icon={<BarChartTwoToneIcon />}>
                        <Typography>Charts</Typography>
                        </MenuItem> */

                        {/* <SubMenu title="SubMenu">
                            <MenuItem>
                            <Typography>Component 1</Typography>
                            </MenuItem>
                            <MenuItem>
                            <Typography>Component 2</Typography>
                            </MenuItem>
                        </SubMenu> */}
                   {/*  </Menu>

                </SidebarContent>

                <SidebarFooter>
                <Typography>Logout</Typography>
                </SidebarFooter>

            </ProSidebar>
        </div>

    )
} */}