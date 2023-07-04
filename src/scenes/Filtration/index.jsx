import { Box, useTheme } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { mockDataTeam } from "../../data/mockData";
import Header from "../../components/Header";
import { GridToolbar } from "@mui/x-data-grid";
import SearchComponent from "../../components/Search";
import { Button } from "@mui/material";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import { Grid } from "@mui/material";
import { useState } from "react";

const Filtration = () => {
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
      field: "Chercheur",
      headerName: "Chercheur",
      flex: 1,
    },
    {
      field: "action",
      headerName: "Action",
      flex: 1,
      renderCell: () => (
        <Button variant="contained" color="success" onClick={handleClickOpen}>
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
      name: "Marqueur :",
      desc: "..............",
    },
    {
      name: "Entité qui sollicite",
      desc: "..............",
    },
    {
      name: "Date :",
      desc: "..............",
    },
    {
      name: "Domaine scientifique:",
      desc: "..............",
    },
    {
      name: "Direction :",
      desc: "..............",
    },
    {
      name: "Departement :",
      desc: "..............",
    },
    {
      name: "Chercheur :",
      desc: "..............",
      lien: "www.facebook.com",
    },
  ];

  return (
    <Box m="20px">
      <Header
        title="Recherche"
        subtitle="Liste des marqueurs de rayonnement scientifique"
      />
      <SearchComponent onSearch={handleSearch} hideInput={false} />
      <Box
        m="40px 0 0 0"
        height="75vh"
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-toolbarContainer": {
            backgroundColor: colors.bleuAccent[600],
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
          },
          "& .name-column--cell": {
            color: colors.greenAccent[100],
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: colors.bleuAccent[900],
            borderBottom: "none",
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: colors.primary[900],
          },
          "& .MuiDataGrid-footerContainer": {
            borderTop: "none",
            backgroundColor: colors.bleuAccent[900],
          },
          "& .MuiCheckbox-root": {
            color: `${colors.greenAccent[200]} !important`,
          },
        }}
      >
        <DataGrid
          checkboxSelection
          rows={mockDataTeam}
          columns={columns}
          {...mockDataTeam}
          slots={{ toolbar: GridToolbar }}
        />

          <Dialog open={open} onClose={handleClose}>
            <DialogTitle
              sx={{
                backgroundColor: "blue",
                color: "white",
                fontSize: "20px",
                fontWeight: "bold",
              }}
            >
              Action
            </DialogTitle>

            <DialogContent sx={{ width: "800px" }}>
              <Box>
                <Grid container spacing={3}>
                  <Grid item>
                    <List disablePadding>
                      {infoAction.map((info) => (
                        <ListItem key={info.name} sx={{ py: 1, px: 0 }}>
                          <ListItemText
                            primaryTypographyProps={{
                              variant: "h6",
                              fontWeight: "bold",
                            }}
                            primary={info.name}
                            secondary={
                              <>
                                {info.desc}
                                {info.name === "Chercheur :" && (
                                  <div style={{ marginTop: "10px" }}>
                                    <a
                                      href={info.lien}
                                      style={{ color: "lightblue" }}
                                    >
                                      Voir la fiche d'identité
                                    </a>
                                  </div>
                                )}
                              </>
                            }
                          />
                        </ListItem>
                      ))}
                    </List>
                  </Grid>
                </Grid>
              </Box>
            </DialogContent>

            <DialogActions>
              <Button onClick={handleClose}>Fermer</Button>
            </DialogActions>
          </Dialog> 
      </Box>
    </Box>
  );
};

export default Filtration;
