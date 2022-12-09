import React, {useContext} from 'react'
import { Typography, Box, IconButton } from '@mui/material';

import { Link, useNavigate } from 'react-router-dom'; // for refresh button

import {Context} from "../Context";

import { AppProps, HeaderProps } from '../interfaces';
import { ReactNode, ReactElement } from 'react';

import SyncIcon from '@mui/icons-material/Sync'; // refresh icon
import Tooltip from '@mui/material/Tooltip';

// this component is reuseable for all containers, and can pass in desired props
// for title and subtitle
function Header({title, subtitle}: HeaderProps): ReactElement {

    const { darkModeOn } = useContext <AppProps>(Context);
    const fontColor: string = darkModeOn ? "#fab700 !important" : "#293462 !important" 
    // sets the font color of the header -> changes here get reflected throughout
    // alt light color 344966 fab700

    const navigate = useNavigate()
    function refreshPage(): void { /* TS not allowing use for refresh */
      window.location.reload();
      // navigate('/') /* this won't work either */
    };

    return (

      <Box mb="30px" role="header">

        <Box sx={{display: 'flex', justifyContent: "space-between", margin: 2}}>
        <Typography
          variant="h4"
          fontWeight="bold"
          sx={{ m: "0 0 5px 0", textAlign: "left", color: fontColor}}
        >
          {title}
        </Typography>

        {/* <Link to={pathName && `./${pathName}`}> */}
        <Tooltip title="Refresh" arrow >
          <IconButton
            /* onclick={() => navigate('/')} */ // TS won't allow use
            className="icon" 
            size='large'
            sx={{ "&:hover": { backgroundColor: 'green' } }} 
           /*  onclick={refreshPage} */ // TS won't allow use
          >
            <SyncIcon
            ></SyncIcon>
            
          </IconButton>
        </Tooltip>
        {/* </Link> */}

        </Box>

        <Typography 
            variant="h6" 
            sx={{ textAlign: "left", color: fontColor, margin: 2 }}
        >
          {subtitle}
        </Typography>

      </Box>

    );
  };

  export default Header;