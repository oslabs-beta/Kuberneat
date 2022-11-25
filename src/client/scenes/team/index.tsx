import React from 'react'
import { Box, Typography, useTheme } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { mockDataTeam } from "../../MockData/mockData";
import AdminPanelSettingsOutlinedIcon from "@mui/icons-material/AdminPanelSettingsOutlined";
import LockOpenOutlinedIcon from "@mui/icons-material/LockOpenOutlined";
import SecurityOutlinedIcon from "@mui/icons-material/SecurityOutlined";
import Header from "../../components/Header";

type Props = {}

export interface GridColumn {
    id?: number;
    name?: string;
    email?: string;
    age?: number;
    phone?: string;
    access?: string;
}

function Team({}: Props) {

    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    // NICE LITTLE VICTORY HERE!
    const columns: any[] = [

      { field: "id", headerName: "ID" },

      {
        field: "name",
        headerName: "Name",
        flex: 1,
        cellClassName: "name-column--cell",
      },

      {
        field: "age",
        headerName: "Age",
        type: "number",
        headerAlign: "left",
        align: "left",
      },

      {
        field: "phone",
        headerName: "Phone Number",
        flex: 1,
      },

      {
        field: "email",
        headerName: "Email",
        flex: 1,
      },

      {
        field: "accessLevel",
        headerName: "Access Level",
        flex: 1,
       
        renderCell: ({ row: { access }}:any) => { // access access from mockData
          
            return (

            <Box
              width="60%"
              m="0 auto" // top and bottom
              p="5px"
              display="flex"
              justifyContent="center"
              bgcolor={
                access === "admin" ? colors.greenAccent[600] : access === "manager" ? colors.greenAccent[700] : colors.greenAccent[700]
              }
              borderRadius="4px"
            >

              {access === "admin" && <AdminPanelSettingsOutlinedIcon />}
              {access === "manager" && <SecurityOutlinedIcon />}
              {access === "user" && <LockOpenOutlinedIcon />}

            {/* the text */}
              <Typography color={colors.grey[100]} sx={{ ml: "5px" }}> 
                {access}
              </Typography>

            </Box>

          );
        },

      },

    ];
  
    return (
      <Box m="20px">
        <Header title="TEAM" subtitle="Managing the Team Members" />
        <Box
          m="40px 0 0 0"
          height="75vh"
          sx={{
            "& .MuiDataGrid-root": {
              border: "none",
            },
            "& .MuiDataGrid-cell": {
              borderBottom: "none",
            },
            "& .name-column--cell": {
              color: colors.greenAccent[300],
            },
            "& .MuiDataGrid-columnHeaders": {
              backgroundColor: colors.blueAccent[700],
              borderBottom: "none",
            },
            "& .MuiDataGrid-virtualScroller": {
              backgroundColor: colors.primary[400],
            },
            "& .MuiDataGrid-footerContainer": {
              borderTop: "none",
              backgroundColor: colors.blueAccent[700],
            },
            "& .MuiCheckbox-root": {
              color: `${colors.greenAccent[200]} !important`,
            },
          }}
        >
          <DataGrid checkboxSelection rows={mockDataTeam} columns={columns} />
        </Box>
      </Box>
    );
  };
  
  export default Team;