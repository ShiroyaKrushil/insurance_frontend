import { Box, Button, Grid } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import Header from "../../components/Header";
import { useTheme } from "@mui/material";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import Addmodel from "../leads/Add";
import { useState } from "react";
import { mockDataContacts } from "../../data/mockData";
import { useNavigate } from "react-router-dom";

const Contact = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const navigate = useNavigate();

  const columns = [
    { field: "id", headerName: "Id", width: 100 },
    { field: "registrarId", headerName: "Registrar Id", width: 100 },
    {
      field: "name",
      headerName: "Name",
      cellClassName: "name-column--cell",
      width: 200,
      renderCell: (params) => {
        const handleFirstNameClick = () => {
          console.log(params.row._id);
          navigate('/lead/view')
        };

        return <div onClick={handleFirstNameClick}>{params.value}</div>;
      },
    },
    {
      field: "age",
      headerName: "Age",
      type: "number",
      headerAlign: "left",
      align: "left",
      width: 100,
    },
    { field: "phone", headerName: "Phone Number", width: 100 },
    { field: "email", headerName: "Email", width: 200 },
    { field: "address", headerName: "Address", width: 250 },
    { field: "city", headerName: "City", width: 100 },
    { field: "zipCode", headerName: "Zip Code", width: 100 },
  ];

    //open add model
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
  

  return (
    <Box m="20px">
      <Addmodel open={open} handleClose={handleClose}/>
      <Grid container display="flex" alignItems="center">
        <Grid item xs={8}>
          <Header title="Contacts" subtitle="List of Contacts" />
        </Grid>
        <Grid item xs={4} style={{ textAlign: "right" }}>
          <Button
            variant="contained"
            color="secondary"
            style={{ textTransform: "capitalize", fontSize: "15px" }}
            startIcon={<AddCircleOutlineIcon />}
            onClick={handleOpen}
          >
            Add Lead
          </Button>
        </Grid>
      </Grid>
      <Box
        m="8px 0 0 0"
        width="100%"
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
            cursor: "pointer",
          },
          "& .name-column--cell:hover": {
            textDecoration: "underline",
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: colors.blueAccent[700],
            borderBottom: "none",
            outline: "none !important",
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: colors.primary[400],
            scrollbarWidth:"1px"
          },
          "& .MuiDataGrid-footerContainer": {
            borderTop: "none",
            backgroundColor: colors.blueAccent[700],
          },
          "& .MuiCheckbox-root": {
            color: `${colors.greenAccent[200]} !important`,
          },
          "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
            color: `${colors.grey[100]} !important`,
            textTransform:"capitalize",
            fontSize:"15px"
          },
          ".MuiDataGrid-cell:focus,.MuiDataGrid-columnHeader:focus,MuiDataGrid-columnHeaderCheckbox:focus":
            {
              outline: "none !important",
            },
        }}
      >
        <DataGrid
          rows={mockDataContacts}
          columns={columns}
          components={{ Toolbar: GridToolbar }}
          checkboxSelection
        />
      </Box>
    </Box>
  );
};

export default Contact;
