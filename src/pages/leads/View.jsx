import {
  Box,
  Button,
  Divider,
  Grid,
  Menu,
  Stack,
  Typography,
  alpha,
} from "@mui/material";
import React from "react";
import Header from "../../components/Header";
import { MenuItem } from "react-pro-sidebar";
import styled from "@emotion/styled";
import EditIcon from "@mui/icons-material/Edit";
import ArchiveIcon from "@mui/icons-material/Archive";
import FileCopyIcon from "@mui/icons-material/FileCopy";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { useNavigate } from "react-router-dom";

const StyledMenu = styled((props) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "right",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "right",
    }}
    {...props}
  />
))(({ theme }) => ({
  "& .MuiPaper-root": {
    borderRadius: 6,
    marginTop: theme.spacing(1),
    minWidth: 180,
    color:
      theme.palette.mode === "light"
        ? "rgb(55, 65, 81)"
        : theme.palette.grey[300],
    boxShadow:
      "rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
    "& .MuiMenu-list": {
      padding: "4px 0",
    },
    "& .MuiMenuItem-root": {
      "& .MuiSvgIcon-root": {
        fontSize: 18,
        color: theme.palette.text.secondary,
        marginRight: theme.spacing(1.5),
      },
      "&:active": {
        backgroundColor: alpha(
          theme.palette.primary.main,
          theme.palette.action.selectedOpacity
        ),
      },
    },
  },
}));

const View = () => {
  const navigate = useNavigate();

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const back =()=>{
    navigate('/lead/list')
  }
  return (
    <div>
      <Box m="20px">
        <Grid container display="flex" alignItems="center">
          <Grid item xs={8}>
            <Header title="Mr. Pinkal Gheewala" subtitle="Lead" />
          </Grid>
          <Grid item xs={4} >
            <Stack direction="row" spacing={2} justifyContent="flex-end">
              <Button
                id="action"
                aria-controls={open ? "action" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
                variant="contained"
                color="secondary"
                disableElevation
                onClick={handleClick}
                endIcon={<KeyboardArrowDownIcon />}
              >
                Action
              </Button>
              <StyledMenu
                id="demo-customized-menu"
                MenuListProps={{
                  "aria-labelledby": "demo-customized-button",
                }}
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose} disableRipple> 
                  <EditIcon />
                  Edit
                </MenuItem>
                <MenuItem onClick={handleClose} disableRipple>
                  <FileCopyIcon />
                  Duplicate
                </MenuItem>
                <Divider sx={{ my: 0.5 }} />
                <MenuItem onClick={handleClose} disableRipple>
                  <ArchiveIcon />
                  Archive
                </MenuItem>
                <MenuItem onClick={handleClose} disableRipple>
                  <MoreHorizIcon />
                  More
                </MenuItem>
              </StyledMenu>

              <Button variant="contained" color="secondary" onClick={back}>
                Back
              </Button>
            </Stack>
          </Grid>
        </Grid>
        <Box mt="50px" style={{ background: "#1f2a40", borderRadius: "5px" }}>
          <Typography variant="h2" p={2}>
            Basic information
          </Typography>
          <Grid container display="flex" p={2}>
            <Grid item xs={12} sm={6} pr={2}>
              <Grid style={{ borderBottom: "3.6px dotted black" }} pb={2}>
                <Typography variant="h5">NAME</Typography>
                <Typography variant="h6">Mr. Pinkal Gheewala</Typography>
              </Grid>
              <Grid style={{ borderBottom: "3.6px dotted black" }} py={2}>
                <Typography variant="h5">DATE OF BIRTH</Typography>
                <Typography variant="h6">14/02/2003</Typography>
              </Grid>
              <Grid style={{ borderBottom: "3.6px dotted black" }} py={2}>
                <Typography variant="h5">GENDER</Typography>
                <Typography variant="h6">MALE</Typography>
              </Grid>
            </Grid>
            <Grid item xs={12} sm={6} borderLeft="1px solid secondary" pl={2}>
              <Grid style={{ borderBottom: "3.6px dotted black" }} pb={2}>
                <Typography variant="h5">PHONE NUMBER</Typography>
                <Typography variant="h6">8320066228</Typography>
              </Grid>
              <Grid style={{ borderBottom: "3.6px dotted black" }} py={2}>
                <Typography variant="h5">EMAIL ADDRESS</Typography>
                <Typography variant="h6">
                  shiroyakrushil683@gmail.com
                </Typography>
              </Grid>
              <Grid style={{ borderBottom: "3.6px dotted black" }} py={2}>
                <Typography variant="h5">ADDRESS</Typography>
                <Typography variant="h6">virpur</Typography>
              </Grid>
            </Grid>
          </Grid>
        </Box>
        <Box mt="50px" style={{ background: "#1f2a40", borderRadius: "5px" }}>
          <Typography variant="h2" p={2}>
            Source Information
          </Typography>
          <Grid container display="flex" p={2}>
            <Grid item xs={12} sm={6} pr={2}>
              <Grid pb={2}>
                <Typography variant="h5">LEAD SOURCE</Typography>
                <Typography variant="h6">Website</Typography>
              </Grid>
            </Grid>
          </Grid>
        </Box>
        <Box mt="50px" style={{ background: "#1f2a40", borderRadius: "5px" }}>
          <Typography variant="h2" p={2}>
            Lead Details
          </Typography>
          <Grid container display="flex" p={2}>
            <Grid item xs={12} sm={6} pr={2}>
              <Grid style={{ borderBottom: "3.6px dotted black" }} pb={2}>
                <Typography variant="h5">LEAD STATUS</Typography>
                <Typography variant="h6">active</Typography>
              </Grid>
              <Grid style={{ borderBottom: "3.6px dotted black" }} py={2}>
                <Typography variant="h5"> ASSIGNED AGENT</Typography>
                <Typography variant="h6">user</Typography>
              </Grid>
            </Grid>
            <Grid item xs={12} sm={6} borderLeft="1px solid black" pl={2}>
              <Grid style={{ borderBottom: "3.6px dotted black" }} pb={2}>
                <Typography variant="h5">LEAD SCORE</Typography>
                <Typography variant="h6">star</Typography>
              </Grid>
              <Grid style={{ borderBottom: "3.6px dotted black" }} py={2}>
                <Typography variant="h5">CREATE AT</Typography>
                <Typography variant="h6">date&time</Typography>
              </Grid>
            </Grid>
          </Grid>
        </Box>
        <Box mt="50px" style={{ background: "#1f2a40", borderRadius: "5px" }}>
          <Typography variant="h2" p={2}>
            Additional Contact Details
          </Typography>
          <Grid container display="flex" p={2}>
            <Grid item xs={12} sm={6} pr={2}>
              <Grid style={{ borderBottom: "3.6px dotted black" }} pb={2}>
                <Typography variant="h5">ALTERNATE PHONE NUMBER</Typography>
                <Typography variant="h6">8320066228</Typography>
              </Grid>
              <Grid style={{ borderBottom: "3.6px dotted black" }} py={2}>
                <Typography variant="h5"> TWITTER</Typography>
                <Typography variant="h6">krushil</Typography>
              </Grid>
            </Grid>
            <Grid item xs={12} sm={6} borderLeft="1px solid black" pl={2}>
              <Grid style={{ borderBottom: "3.6px dotted black" }} pb={2}>
                <Typography variant="h5">ADDITIONAL EMAIL ADDRESS</Typography>
                <Typography variant="h6">shiroya@gmail.com</Typography>
              </Grid>
              <Grid style={{ borderBottom: "3.6px dotted black" }} py={2}>
                <Typography variant="h5">INSTAGRAM</Typography>
                <Typography variant="h6">kush_14_2</Typography>
              </Grid>
            </Grid>
          </Grid>
        </Box>
        <Box mt="50px" style={{ background: "#1f2a40", borderRadius: "5px" }}>
          <Typography variant="h2" p={2}>
            Policy Requirements
          </Typography>
          <Grid container display="flex" p={2}>
            <Grid item xs={12} sm={6} pr={2}>
              <Grid style={{ borderBottom: "3.6px dotted black" }} pb={2}>
                <Typography variant="h5">TYPES OF INSURANCE</Typography>
                <Typography variant="h6">home</Typography>
              </Grid>
              <Grid style={{ borderBottom: "3.6px dotted black" }} py={2}>
                <Typography variant="h5">
                  {" "}
                  SPECIFICE POLICY FEATURES OR ADD-ONS REQUESTED
                </Typography>
                <Typography variant="h6">krushil</Typography>
              </Grid>
            </Grid>
            <Grid item xs={12} sm={6} borderLeft="1px solid black" pl={2}>
              <Grid style={{ borderBottom: "3.6px dotted black" }} pb={2}>
                <Typography variant="h5">DESIRED COVERAGE AMOUNT</Typography>
                <Typography variant="h6">5000 </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </div>
  );
};

export default View;
