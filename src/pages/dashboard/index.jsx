import {
  Box,
  Button,
  IconButton,
  Typography,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { tokens } from "../../theme";

import Header from "../../components/Header";


const Dashboard = () => {
  const theme = useTheme();
  return (
    <Box m="20px">
      {/* HEADER */}

      <Box
       
      >
        <Header title="DASHBOARD" subtitle="Welcome to your dashboard" />

        
      </Box>

      {/* GRID & CHARTS */}
      
    </Box>
  );
};

export default Dashboard;
