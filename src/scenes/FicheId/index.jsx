import Header from "../../components/Header";
import { Box } from "@mui/material";
import Fiche from "../../components/Fiche";

const FicheId = () => {
    return (
        <Box m="20px">
           {/* HEADER */}
            <Header title="Fiche identité" subtitle="Ma fiche d'identité chercheur" />
            <Fiche/>
        </Box>
    );
}
export default FicheId;