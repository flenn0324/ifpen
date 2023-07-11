import { Box, useTheme } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { mockDataTeam } from "../../data/mockData";
import Header from "../../components/Header";
import { GridToolbar } from "@mui/x-data-grid";
import SearchComponent from "../../components/Search";
import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { Grid } from "@mui/material";


const MesActions = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const columns = [
    { field: "id", headerName: "ID" },
    {
      field: "Marqueur",
      headerName: "Marqueur",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "Date",
      headerName: "Date",
      headerAlign: "left",
      align: "left",
    },
    {
      field: "Entité",
      headerName: "Entité",
      flex: 1,
    },
    {
      field: "Direction",
      headerName: "Direction",
      flex: 1,
    },
    {
      field: "Département",
      headerName: "Département",
      flex: 1,
    },
    {
      field: "action",
      headerName: "Action",
      flex: 1,
      renderCell: () => (
        <Button variant="contained" color="primary" sx={{ bgcolor: colors.blueAccent[600] }} onClick={handleClickOpen}>
          Consulter
        </Button>
      ),
    },
  ];
  const handleSearch = (searchCriteria) => {
    // Logique de recherche à implémenter ici
    console.log("Critères de recherche :", searchCriteria);
  };

  const infoAction = [
    {
      name: 'Marqueur :',
      desc: '..............',
    },
    {
      name: 'Entité qui sollicite',
      desc: '..............',
    },
    {
      name: 'Date :',
      desc: '..............',
    },
    {
      name: 'Domaine scientifique:',
      desc: '..............',
    },
    {
      name: 'Direction :',
      desc: '..............',
    },
    {
      name: 'Departement :',
      desc: '..............',
    },
    {
      name: 'Chercheur :',
      desc: '..............',
    },
  ];
  return (
    <Box m="20px">
      <Header title="Mes Actions Extérieurs" subtitle="Liste de mes marqueurs de rayonnement scientifique" />
      <SearchComponent onSearch={handleSearch} hideInput={true} />
      <Box
        mx={4} my={5}
        height="75vh"
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-toolbarContainer": {
            backgroundColor: colors.blueAccent[700],
          },
          "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
            color: `${colors.grey[100]} !important`,
            mb: 0.5
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
          },
          "& .name-column--cell": {
            color: colors.greenAccent[300],
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: colors.blueAccent[800],
            borderBottom: "none",
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: theme.palette.mode === "dark" ? colors.primary[800] : colors.blueAccent[900],
          },
          "& .MuiDataGrid-footerContainer": {
            borderTop: "none",
            backgroundColor: colors.blueAccent[800],
          },
          "& .MuiCheckbox-root": {
            color: `${colors.greenAccent[200]} !important`,
          },
        }}
      >
        <DataGrid checkboxSelection rows={mockDataTeam} columns={columns} {...mockDataTeam} slots={{ toolbar: GridToolbar }} />
      </Box>

      <Box>
        <Dialog open={open} onClose={handleClose}>
          <DialogTitle sx={{ backgroundColor: colors.blueAccent[600], color: 'white', fontSize: '20px', fontWeight: 'bold' }}>
            Action
            <Box style={{ position: 'absolute', right: 0, top: 0 }}>
              <Button variant="contained" color="secondary" >Modifier</Button>
              <Button variant="contained" color="error" style={{ margin: '15px' }}>Supprimer</Button>
            </Box>
          </DialogTitle>
          <DialogContent sx={{ width: '800px' }}>
            <Box mt={2} >
              <Grid container spacing={3}>
                <Grid item>
                  <List disablePadding>
                    {infoAction.map((info) => (
                      <ListItem key={info.name} sx={{ py: 1, px: 0 }}>
                        <ListItemText
                          primaryTypographyProps={{ variant: 'h6', fontWeight: 'bold' }}
                          primary={info.name}
                          secondary={info.desc}
                        />
                      </ListItem>
                    ))}
                  </List>
                </Grid>
              </Grid>
            </Box>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Cancel</Button>
          </DialogActions>
        </Dialog>
      </Box>
    </Box>

  );
};

export default MesActions;