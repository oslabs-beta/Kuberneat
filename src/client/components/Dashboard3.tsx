import * as React from 'react';
import { useState, useEffect, useContext } from 'react';
import { Context } from '../Context';
import Header from './Header'

import { Box, Button, IconButton, Typography, useTheme } from '@mui/material';

import { AppProps } from '../interfaces';
import { ReactNode, ReactElement } from 'react';

import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";

import EmailIcon from "@mui/icons-material/Email";
import PointOfSaleIcon from "@mui/icons-material/PointOfSale";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import TrafficIcon from "@mui/icons-material/Traffic";



function Dashboard3(): ReactElement {

	const { darkModeOn } = useContext <AppProps> (Context);

    const bgColor: string = 'blue !important'
    const grnColor: string = 'green !important'
    const gryColor: string = 'grey !important'

	return (
		<Box m="20px" height="100vh">
            <Header title="Custom Dashboard" subtitle="Welcome to your custom dashboard" />
            {/* <Box display="flex" justifyContent="space-between" alignItems="center">

                <div className={darkModeOn ? 'dash-dark' : 'dash-light'}>
                    <Header title="Custom Dashboard" subtitle="Welcome to your custom dashboard" />
                </div>

                <Button // button for download at top right
                    sx={{
                    backgroundColor: 'black',
                    color: 'white',
                    fontSize: "14px",
                    fontWeight: "bold",
                    padding: "10px 20px",
                    }}
                >
                    <DownloadOutlinedIcon sx={{ mr: "10px" }} />
                    Download Reports
                </Button>

            </Box>
 */}
            {/* Grids and Charts Container */}

            <Box
            display="grid"
            gridTemplateColumns="repeat(12, 1fr)" // CSS GRID 12 part grid system, use of span 
            gridAutoRows="100px"
            gap="20px"
            > 

            {/* ROW 1 */}
            <Box
              gridColumn="span 3" // span of 3 out of 12, so BOX x 4 = 12
              bgcolor={bgColor}
              display="flex"
              alignItems="center"
              justifyContent="center"
            >

             {/*  <StatBox // putting the statbox inside the Box - Div
                title="12,361" // random numbers we assign
                subtitle="Emails Sent" // rando
                progress="0.75" // rando
                increase="+14%" // rando
                icon={
                  <EmailIcon
                    sx={{ color: grnColor, fontSize: "26px" }}
                  />
                }
              /> */}

            </Box>

            <Box
              gridColumn="span 3"
              bgcolor={bgColor}
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
           {/*    <StatBox
                title="431,225"
                subtitle="Resources Remaining"
                progress="0.50"
                increase="+21%"
                icon={
                  <PointOfSaleIcon
                    sx={{ color: grnColor, fontSize: "26px" }}
                  />
                }
              /> */}
            </Box>

            <Box
              gridColumn="span 3"
              bgcolor={bgColor}
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
          {/*     <StatBox
                title="32,441"
                subtitle="New Clients"
                progress="0.30"
                increase="+5%"
                icon={
                  <PersonAddIcon
                    sx={{ color: grnColor, fontSize: "26px" }}
                  />
                }
              /> */}
            </Box>

            <Box
              gridColumn="span 3"
              bgcolor={bgColor}
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
           {/*    <StatBox
                title="1,325,134"
                subtitle="Traffic Received"
                progress="0.80"
                increase="+43%"
                icon={
                  <TrafficIcon
                    sx={{ color: grnColor, fontSize: "26px" }}
                  />
                }
              /> */}
            </Box> 
    
            {/* ROW 2 */}
             <Box
              gridColumn="span 6"
              gridRow="span 1"
              bgcolor={bgColor}
            >
                
              <Box
                mt="25px"
                p="0 30px"
                display="flex "
                justifyContent="space-between"
                alignItems="center"
              >
                <Box>
                  <Typography // -----> Typographycomponents are just used for labels, like an H1 tag?
                    variant="h5"
                    fontWeight="600"
                    color={gryColor}
                  >
                    Kookaburras
                  </Typography>
                  <Typography
                    variant="h3"
                    fontWeight="bold"
                    color={grnColor}
                  >
                    Project Zeus
                  </Typography>
                </Box>
                <Box>
                  <IconButton>
                    <DownloadOutlinedIcon
                      sx={{ fontSize: "26px", color: grnColor }}
                    />
                  </IconButton>
                </Box>
              </Box>


              <Box height="250px" m="-20px 0 0 0">
                {/* place chart here component*/}
              </Box>


            </Box> 


            <Box
              gridColumn="span 4"
              gridRow="span 2"
              bgcolor={bgColor}
              overflow="auto"
            >
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                borderBottom={`4px solid ${grnColor}`}
                color={gryColor}
                p="15px"
              >

                <Typography color={gryColor} variant="h5" fontWeight="600">
                  Recent Node Failures
                </Typography>

              </Box>
             {/*  {mockTransactions.map((transaction, i) => (
                <Box
                  key={`${transaction.txId}-${i}`}
                  display="flex"
                  justifyContent="space-between"
                  alignItems="center"
                  borderBottom={`4px solid ${bgColor}`}
                  p="15px"
                > */}
                  <Box>
                   {/*  <Typography
                      color={grnColor}
                      variant="h5"
                      fontWeight="600"
                    >
                      {transaction.txId}
                    </Typography>
                    <Typography color={gryColor}>
                      {transaction.user}
                    </Typography> */}
                  </Box>
                  {/* <Box color={gryColor}>{transaction.date}</Box>
                  <Box
                    bgcolor={grnColor}
                    p="5px 10px"
                    borderRadius="4px"
                  >
                    ${transaction.cost}
                  </Box> */}
                </Box>
              {/* ))} */}
            </Box>

    
            {/* ROW 3 */}
            <Box
              gridColumn="span 4"
              gridRow="span 2"
              bgcolor={bgColor}
              p="30px"
            >
              <Typography variant="h5" fontWeight="600">
                Kluster Capacity
              </Typography>
              <Box
                display="flex"
                flexDirection="column"
                alignItems="center"
                mt="25px"
              >


                {/* place chart here component*/}


                <Typography
                  variant="h5"
                  color={grnColor}
                  sx={{ mt: "15px" }}
                >
                  75% capacity threshold
                </Typography>
                <Typography>Includes all related kubernetes resource allotments</Typography>
              </Box>
            </Box> 
            <Box
              gridColumn="span 4"
              gridRow="span 2"
              bgcolor={bgColor}
            >
              <Typography
                variant="h5"
                fontWeight="600"
                sx={{ padding: "30px 30px 0 30px" }}
              >
                CPU Usage
              </Typography>


              <Box height="250px" mt="-20px">
                {/* place chart here component*/}
              </Box>


            </Box>
            <Box
              gridColumn="span 4"
              gridRow="span 2"
              bgcolor={bgColor}
              padding="30px"
            >
              <Typography
                variant="h5"
                fontWeight="600"
                sx={{ marginBottom: "15px" }}
              >
                Geography Based Traffic
              </Typography>


              <Box height="200px">
                {/* place chart here component*/}
              </Box>

            </Box>

		</Box>
	);
};

export default Dashboard3;