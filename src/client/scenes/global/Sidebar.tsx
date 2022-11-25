import React, { useState } from 'react';
import { ProSidebar, Menu, MenuItem } from 'react-pro-sidebar';
import {Box, IconButton, Typography, useTheme } from '@mui/material';
import { Link } from 'react-router-dom'
//import 'react-pro-sidebar/dist/css/styles.css';
/* 
Module parse failed: Unexpected character '@' (1:0)
You may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders
> @keyframes swing {
|   0%,
|   30%,
*/
import { tokens } from '../../theme';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined'
import PeopleOutlinedIcon from '@mui/icons-material/PeopleOutlined'
import ContactsOutlinedIcon from '@mui/icons-material/ContactsOutlined'
import ReceiptOutlinedIcon from '@mui/icons-material/ReceiptOutlined'
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined'
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined'
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined'
import BarChartOutlinedIcon from '@mui/icons-material/BarChartOutlined'
import PieChartOutlineOutlinedIcon from '@mui/icons-material/PieChartOutlineOutlined'
import TimelineOutlinedIcon from '@mui/icons-material/TimelineOutlined'
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined'
import MapOutlinedIcon from '@mui/icons-material/MapOutlined'

interface ItemProps {
    title: string;
    to: string;
    icon: any;
    selected: string;
    setSelected: any;
}

// new Item Component
const Item = ({ title, to, icon, selected, setSelected }: ItemProps): JSX.Element => {

    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    return (

      <MenuItem
        active={selected === title}
        style={{
          color: colors.grey[100]
        }}
        onClick={() => setSelected(title)}
        icon={icon}
      >
        <Typography>{title}</Typography>

        <Link to={to} /> 

      </MenuItem>

    );
  };


// type Props = {}

function Sidebar(/* {}: Props */) {

    const theme = useTheme();

    const colors = tokens(theme.palette.mode);
    const [isCollapsed, setIsCollapsed] = useState< boolean >(false);
    
    const [selected, setSelected] = useState< string >('Dashboard');


  return (
    <Box
    sx={{
      "& .pro-sidebar-inner": {
        background: `${colors.primary[400]} !important`,
      },
      "& .pro-icon-wrapper": {
        backgroundColor: "transparent !important",
      },
      "& .pro-inner-item": {
        padding: "5px 35px 5px 20px !important",
      },
      "& .pro-inner-item:hover": {
        color: "#868dfb !important",
      },
      "& .pro-menu-item.active": {
        color: "#6870fa !important",
      },
    }}
  >
    {/* <ProSidebarProvider> */}

    {/* ProSidebar is a child component of the BOX component */}
       <ProSidebar collapsed={isCollapsed}>
         <Menu iconShape="square">

           {/* LOGO AND MENU ICON */}

           <MenuItem
             onClick={() => setIsCollapsed(!isCollapsed)}
             icon={isCollapsed ? <MenuOutlinedIcon /> : undefined}
             style={{
               margin: "10px 0 20px 0",
               color: colors.grey[100],
             }}
           >
             {!isCollapsed && (
               <Box
                 display="flex"
                 justifyContent="space-between"
                 alignItems="center"
                 ml="15px"
               >
                 <Typography variant="h3" color={colors.grey[100]}>
                   ADMINIS
                 </Typography>
                 <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
                   <MenuOutlinedIcon />
                 </IconButton>
               </Box>
             )}
           </MenuItem>

           {/*  USER */}
 
           {!isCollapsed && (
             <Box mb="25px">

               <Box display="flex" justifyContent="center" alignItems="center">

                 <img
                   alt="profile-user"
                   width="100px"
                   height="100px"
                   src={`../../assets/jarednom.png`}
                   style={{ cursor: "pointer", borderRadius: "50%" }}
                 />

               </Box>

               <Box textAlign="center">

                 <Typography
                   variant="h2"
                   color={colors.grey[100]}
                   fontWeight="bold"
                   sx={{ m: "10px 0 0 0" }}
                 >
                   Jared Nom
                 </Typography>

                 <Typography variant="h5" color={colors.greenAccent[500]}>
                   VP Fancy Admin
                 </Typography>

               </Box>

             </Box>
           )}

           {/* MENU ITEMS */}
 
           <Box paddingLeft={isCollapsed ? undefined : "10%"}>

             <Item
               title="Dashboard"
               to="/"
               icon={<HomeOutlinedIcon />}
               selected={selected}
               setSelected={setSelected}
             />
 
             <Typography
               variant="h6"
               color={colors.grey[300]}
               sx={{ m: "15px 0 5px 20px" }}
             >
               Data
             </Typography>

             <Item
               title="Manage Team"
               to="/team"
               icon={<PeopleOutlinedIcon />}
               selected={selected}
               setSelected={setSelected}
             />
             <Item
               title="Contacts Information"
               to="/contacts"
               icon={<ContactsOutlinedIcon />}
               selected={selected}
               setSelected={setSelected}
             />
             <Item
               title="Invoices Balances"
               to="/invoices"
               icon={<ReceiptOutlinedIcon />}
               selected={selected}
               setSelected={setSelected}
             />
 
             <Typography
               variant="h6"
               color={colors.grey[300]}
               sx={{ m: "15px 0 5px 20px" }}
             >
               Pages
             </Typography>

             <Item
               title="Profile Form"
               to="/form"
               icon={<PersonOutlinedIcon />}
               selected={selected}
               setSelected={setSelected}
             />
             <Item
               title="Calendar"
               to="/calendar"
               icon={<CalendarTodayOutlinedIcon />}
               selected={selected}
               setSelected={setSelected}
             />
             <Item
               title="FAQ Page"
               to="/faq"
               icon={<HelpOutlineOutlinedIcon />}
               selected={selected}
               setSelected={setSelected}
             />
 
             <Typography
               variant="h6"
               color={colors.grey[300]}
               sx={{ m: "15px 0 5px 20px" }}
             >
               Charts
             </Typography>

             <Item
               title="Bar Chart"
               to="/bar"
               icon={<BarChartOutlinedIcon />}
               selected={selected}
               setSelected={setSelected}
             />
             <Item
               title="Pie Chart"
               to="/pie"
               icon={<PieChartOutlineOutlinedIcon />}
               selected={selected}
               setSelected={setSelected}
             />
             <Item
               title="Line Chart"
               to="/line"
               icon={<TimelineOutlinedIcon />}
               selected={selected}
               setSelected={setSelected}
             />
             <Item
               title="Geography Chart"
               to="/geography"
               icon={<MapOutlinedIcon />}
               selected={selected}
               setSelected={setSelected}
             />
             
           </Box>

         </Menu>
       </ProSidebar>


    {/* </ProSidebarProvider> */}

    </Box>
  )
}

export default Sidebar;