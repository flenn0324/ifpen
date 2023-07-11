import Header from "../../components/Header";
import { Box, useTheme } from "@mui/material";
import Description from "../../components/Description";
import { tokens } from "../../theme";

const Dashboard = () => {

  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box m="20px">
      {/* HEADER */}
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="DASHBOARD" subtitle="Liste des catégories et descriptions des marqueurs" />
      </Box>
      <Box mx={4} px={5} py={3}
        sx={{
          borderRadius: 1,
          backgroundColor:
            theme.palette.mode === "dark" ? colors.primary[800] : colors.primary[900],
          boxShadow:
            theme.palette.mode === "dark"
              ? "none"
              : "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
        }}>
        <h2>Le tableau ci-dessous présente une liste de marqueurs divisée en cinq catégories, avec une description pour chaque marqueur.</h2>
        <Description cat_title="Categorie 01" />
        <Description cat_title="Categorie 02" />
        <Description cat_title="Categorie 03" />
        <Description cat_title="Categorie 04" />
        <Description cat_title="Categorie 0" />
      </Box>
    </Box>
  );
}
export default Dashboard;