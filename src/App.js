import {ColorModeContext, useMode} from "./theme";
import {ThemeProvider} from "@mui/material";
import {CssBaseline} from '@mui/material';
import { Routes,Route } from "react-router-dom";
import Topbar from "./scenes/global/Topbar";
import Sidebar from "./scenes/global/Sidebar";
import Dashboard from "./scenes/dashboard";
import Filtration from "./scenes/Filtration";
import AddForm from "./scenes/Form";
import FicheId from "./scenes/FicheId";
import MesActions from "./scenes/MesActions";


function App() {
  const [theme,colorMode]=useMode();
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <Sidebar/>
           <main className="content">
            <Topbar/>
            <Routes>
              <Route path="/" element={<Dashboard/>}/>
              <Route path="/search" element={<Filtration/>}/>
              <Route path="/add" element={<AddForm/>}/>
              <Route path="/fiche" element={<FicheId/>}/>
              <Route path="/mes_actions" element={<MesActions/>}/>
            </Routes>
           </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
