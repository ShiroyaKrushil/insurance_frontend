import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider, Toolbar } from "@mui/material";
import { Routes, Route } from "react-router-dom";
import { MyProSidebarProvider } from "./components/global/sidebar/sidebarContext";

import Topbar from "./pages/global/Topbar";

import Dashboard from "./pages/dashboard";
import Lead from './pages/leads/Leads'
import View from "./pages/leads/View";
import Contact from "./pages/contacts/Contact";


const App = () => {
  const [theme, colorMode] = useMode();
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <MyProSidebarProvider>
          <div style={{  width: "100%" }}>
            <main>
              <Topbar />
              <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/lead/list" element={<Lead />} />
                <Route path="/lead/view" element={<View />} />
                <Route path="/contact/list" element={<Contact />} />
              </Routes>
            </main>
          </div>
        </MyProSidebarProvider>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
};

export default App;
