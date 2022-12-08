import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { Context } from './Context'

import { Box, IconButton, Typography} from '@mui/material';

import BarChartTwoToneIcon from '@mui/icons-material/BarChartTwoTone';
import HubIcon from '@mui/icons-material/Hub';
import LogoutTwoToneIcon from '@mui/icons-material/LogoutTwoTone';
import LiveHelpTwoToneIcon from '@mui/icons-material/LiveHelpTwoTone';
import MenuTwoToneIcon from '@mui/icons-material/MenuTwoTone';
import CloseFullscreenTwoToneIcon from '@mui/icons-material/CloseFullscreenTwoTone';

import { AppProps } from './interfaces';
import { ReactElement } from 'react';

function Sidebar(): ReactElement {

    const  [ active, setActive ] = useState<boolean>(false);// state used to toggle sidebar collapse feature

    const { darkModeOn, setUser, user } = useContext< AppProps >(Context);

    function activateSidebar(): void {
        setActive(old => !old)
    }

    return (

        <div className={ active ? "sidebar-reg" : "sidebar-mobile" } id={darkModeOn ? 'sidebar-dark' : 'sidebar-light'}>

            <div className='menu-icon' onClick={activateSidebar} >
                {!active 
                ? <IconButton><MenuTwoToneIcon className='menu'>
                    </MenuTwoToneIcon>
                  </IconButton> 
                : <IconButton>
                    <CloseFullscreenTwoToneIcon className="close-icon"></CloseFullscreenTwoToneIcon>
                  </IconButton> 
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
                    <IconButton
                    className="icon" 
                    size='large'
                    sx={{ "&:hover": { backgroundColor: '#22A39F' } }}
                    >
                        <BarChartTwoToneIcon></BarChartTwoToneIcon>
                    </IconButton>
                        <Link to="/dashboard"><Typography>Dashboard</Typography></Link>
                    </li>

                    <li>
                    <IconButton
                    className="icon" 
                    size='large'
                    sx={{ "&:hover": { backgroundColor: '#22A39F' } }}
                    >
                        <HubIcon></HubIcon>
                    </IconButton>
                        <Link to="/visualizer"><Typography>Visualizer</Typography></Link>
                    </li>

                    <li>
                    <IconButton
                    className="icon" 
                    size='large'
                    sx={{ "&:hover": { backgroundColor: '#22A39F' } }}
                    >
                        <BarChartTwoToneIcon></BarChartTwoToneIcon>
                    </IconButton>
                    <Link to="/dashboard2"><Typography>Dashboard 2</Typography></Link>
                    </li>

                    <li>
                    <IconButton
                    className="icon" 
                    size='large'
                    sx={{ "&:hover": { backgroundColor: '#22A39F' } }}
                    >
                        <HubIcon></HubIcon>
                    </IconButton>
                        <Link to="/pods"><Typography>Kluster</Typography></Link>
                    </li>

                    <li>
                    <IconButton
                    className="icon" 
                    size='large'
                    sx={{ "&:hover": { backgroundColor: '#22A39F' } }}
                    >
                        <BarChartTwoToneIcon></BarChartTwoToneIcon>
                    </IconButton>
                        <Link to="/chart"><Typography>Chart</Typography></Link>
                    </li>

                    <li>
                    <IconButton
                    className="icon" 
                    size='large'
                    sx={{ "&:hover": { backgroundColor: '#22A39F' } }}
                    >
                        <HubIcon></HubIcon>
                    </IconButton>
                        <Link to="/chart2"><Typography>Chart 2</Typography></Link>
                    </li>

                    <li>
                    <IconButton
                    className="icon" 
                    size='large'
                    sx={{ "&:hover": { backgroundColor: '#22A39F' } }}
                    >
                        <LiveHelpTwoToneIcon></LiveHelpTwoToneIcon>
                    </IconButton>
                        <Link to="/faq"><Typography>FAQ</Typography></Link>
                    </li>

                </ul>

                <div id={active && "logout-icon"}> {/* just for conditional hover effect of logout icon */}
                <ul className={ active ? "ul-item" : "ul-item-icon"}>
                
                        {/* Logout button, sets user state to null */}
                        <li>
                            
                            <IconButton
                                /* onClick={() => setUser(null)} */
                                className="icon" 
                                size='large'
                                sx={{ "&:hover": { backgroundColor: '#fc8181' } }}
                            
                            >
                            <LogoutTwoToneIcon id="logout" onClick={() => setUser(null)}>
                            </LogoutTwoToneIcon>
                            </IconButton>
                            
                            <Link to="/"> {/* must set this to login page directly, req'd type for link component, set to /login */}
                                <Typography onClick={() => setUser(null)} >Logout</Typography>
                                {/* React doesn't like the onClick being here but has to be here for full bar onClick */}
                            </Link>
                            
                            
                        </li>
                
                </ul>
                </div>

            </nav>
        </div>
    );
};

export default  Sidebar;