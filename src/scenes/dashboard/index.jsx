import Header from "../../components/Header";
import { Box } from "@mui/material";
import Description from "../../components/Description";

const dashboard = () => {
    return (
        <Box m="20px">
           {/* HEADER */}
          <Box display="flex" justifyContent="space-between" alignItems="center">
            <Header title="DASHBOARD" subtitle="Liste des catégories et descriptions des marqueurs" />
          </Box>
          <h2>Le tableau ci-dessous présente une liste de marqueurs divisée en cinq catégories, avec une description pour chaque marqueur.</h2>
          <Description cat_title="Categorie 01"/>
          <Description cat_title="Categorie 02"/>
          <Description cat_title="Categorie 03"/>
          <Description cat_title="Categorie 04"/>
          <Description cat_title="Categorie 0"/>
        </Box>
    );
}
export default dashboard;