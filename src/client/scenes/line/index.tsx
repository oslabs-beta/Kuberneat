import React from 'react';
import { Box } from "@mui/material";
import Header from "../../components/Header";
import LineChart from "../../components/LineChart";

type Props = {}

function Line({}: Props) {
    return (
        <Box m="20px">

          <Header title="Line Chart" subtitle="Simple Line Chart" />

          <Box height="75vh">

            <LineChart />

          </Box>
          
        </Box>
      );
    };
    
    export default Line;