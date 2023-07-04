import Header from "../../components/Header";
import { Box } from "@mui/material";

const dashboard = () => {
    return (
        <Box m="20px">
           {/* HEADER */}
          <Box display="flex" justifyContent="space-between" alignItems="center">
            <Header title="DASHBOARD" subtitle="Welcome to your dashboard" />
          </Box>
        </Box>
    );
}
export default dashboard;