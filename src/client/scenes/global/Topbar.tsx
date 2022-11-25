import React, { useContext } from 'react'
import { Box, IconButton, useTheme } from '@mui/material'

// no f'in way... have to use bgcolor NOT backgroundColor for BOX component in MUI??? color NOT colors // 

import { ColorModeContext, tokens, useMode, themeSettings } from '../../theme' // relative path ---> from inside client, go into scenes > global > themes
import { InputBase } from '@mui/material';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined'
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined'
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined'
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined'
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined'
import SearchIcon from '@mui/icons-material/Search'


type Props = {
}


function Topbar({}: Props) {

    const theme = useTheme(); // from MUI

    const colors = tokens(theme.palette.mode); // let's us switch back and forth between diff color palettes

    const colorMode = useContext(ColorModeContext) // use to allow us to toggle diff states for color mode



    // the Box component (from MUI) is like a div component but can put css prop directly into it
  return (
    <Box display='flex' justifyContent='space-between' p={2}>
        {/*  SEARCH BAR */}
        <Box 
            display='flex' 
            borderRadius='3px'
            bgcolor={colors.primary[400]}
        >
            <InputBase sx={{ ml: 2, flex: 1 }} placeholder="Search" />
            <IconButton type='button' sx={{ p:1 }}>
                <SearchIcon />
            </IconButton>
                
        </Box>

        {/* ICONS */}

        <Box display='flex'>
            <IconButton onClick={colorMode.toggleColorMode}>
                {theme.palette.mode === 'dark' ? (<DarkModeOutlinedIcon />) : (<LightModeOutlinedIcon />)}
            </IconButton>
            <IconButton><NotificationsOutlinedIcon></NotificationsOutlinedIcon></IconButton>
            <IconButton><SettingsOutlinedIcon></SettingsOutlinedIcon></IconButton>
            <IconButton><PersonOutlinedIcon></PersonOutlinedIcon></IconButton>
        </Box>
    </Box>


  )
}

export default Topbar;