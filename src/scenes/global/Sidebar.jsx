import * as React from "react";
import { useState } from "react";
import { tokens } from "../../theme";
import { styled } from "@mui/material/styles";
import MuiDrawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import HomeIcon from "@mui/icons-material/Home";
import GroupIcon from "@mui/icons-material/Group";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import SearchIcon from "@mui/icons-material/Search";
import PostAddIcon from '@mui/icons-material/PostAdd';
import PersonIcon from '@mui/icons-material/Person';
import { useNavigate } from "react-router-dom";
import { Avatar, Box, Grid, Typography } from "@mui/material";
import { useTheme } from "@emotion/react";

const drawerWidth = 250;

const openedMixin = (theme) => ({
  width: drawerWidth,
  border: "none",
  backgroundColor: tokens(theme.palette.mode).primary[800],
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  border: "none",
  backgroundColor: tokens(theme.palette.mode).primary[800],
  overflowX: "hidden",
  width: `calc(${theme.spacing(1)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8.5)} + 1px)`,
  },
});

const DrawerHeader = styled("div", {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: open ? "end" : "center",
  padding: theme.spacing(0, 1),
  paddingTop: "15px",
  paddingBottom: "15px",
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

export default function Sidebar() {
  const [open, setOpen] = useState(true);
  const navigate = useNavigate();
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const handleDrawer = () => {
    setOpen(!open);
  };

  return (
    <Drawer variant="permanent" open={open}>
      <DrawerHeader open={open}>
        <IconButton onClick={handleDrawer}>
          <MenuIcon />
        </IconButton>
      </DrawerHeader>
      <Divider />
      {open && (
        <Grid pl={1.5} py={2} container>
          <Grid item xs={3}>
            <Avatar alt="profile-user" src={require("../../assets/me.png")} sx={{ width: 45, height: 45, mr: 2 }} />
          </Grid>
          <Grid item xs={4}>
            <Typography
              variant="h5"
              color={colors.grey[200]}
              fontWeight="bold"
              sx={{ mt: 0.5 }}
            >
              Zakaria BRAHIMI
            </Typography>
            <Typography variant="subtitle2" color={colors.greenAccent[400]}>
              Adjoint Scientifique
            </Typography>
          </Grid>
        </Grid>
      )}
      {!open && (
          <Box py={2} pl={1.5}>
            <Avatar alt="profile-user" src={require("../../assets/me.png")} sx={{ width: 45, height: 45, mr:1 }} />
          </Box>
      )}
      <Divider />
      <List>
        <ListItem disablePadding sx={{ display: "block" }} onClick={() => navigate("/")}>
          <ListItemButton
            sx={{
              minHeight: 48,
              justifyContent: open ? "initial" : "center",
              px: 3,
            }}
          >
            <ListItemIcon
              sx={{
                minWidth: 0,
                mr: open ? 3 : "auto",
                justifyContent: "center",
              }}
            >
              <HomeIcon />
            </ListItemIcon>
            <ListItemText disableTypography primary={<Typography variant="h6" style={{ fontWeight: "bold", color: theme.palette.mode === 'dark' ? colors.grey[100] : colors.grey[300] }}>Dashboard</Typography>} sx={{ opacity: open ? 1 : 0 }} />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding sx={{ display: "block" }}>
          <ListItemButton
            disabled
            sx={{
              minHeight: 48,
              justifyContent: open ? "initial" : "center",
              px: 2,
            }}
          >
            <ListItemText disableTypography primary={<Typography variant="h6" style={{ fontWeight: "bold", color: colors.grey[100] }}>Informations personnelles</Typography>} sx={{ opacity: open ? 1 : 0 }} />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding sx={{ display: "block" }} onClick={() => navigate("/fiche")}>
          <ListItemButton
            sx={{
              minHeight: 48,
              justifyContent: open ? "initial" : "center",
              px: 3,
            }}
          >
            <ListItemIcon
              sx={{
                minWidth: 0,
                mr: open ? 3 : "auto",
                justifyContent: "center",
              }}
            >
              <PersonIcon />
            </ListItemIcon>
            <ListItemText disableTypography primary={<Typography variant="h6" style={{ fontWeight: "bold", color: theme.palette.mode === 'dark' ? colors.grey[100] : colors.grey[300] }}>Ma Fiche d'identité</Typography>} sx={{ opacity: open ? 1 : 0 }} />
            {/* <ListItemText primary="Ma Fiche d'identité" sx={{ opacity: open ? 1 : 0 }} /> */}
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding sx={{ display: "block" }}>
          <ListItemButton
            disabled
            sx={{
              minHeight: 48,
              justifyContent: open ? "initial" : "center",
              px: 2,
            }}
          >
            <ListItemText disableTypography primary={<Typography variant="h6" style={{ fontWeight: "bold", color: colors.grey[100] }}>Actions exterieurs</Typography>} sx={{ opacity: open ? 1 : 0 }} />

            {/* <ListItemText primary="Actions exterieurs" sx={{ opacity: open ? 1 : 0, transition: "opacity 0.3s" }} /> */}
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding sx={{ display: "block" }} onClick={() => navigate("/search")}>
          <ListItemButton
            sx={{
              minHeight: 48,
              justifyContent: open ? "initial" : "center",
              px: 3,
            }}
          >
            <ListItemIcon
              sx={{
                minWidth: 0,
                mr: open ? 3 : "auto",
                justifyContent: "center",
              }}
            >
              <SearchIcon />
            </ListItemIcon>
            <ListItemText disableTypography primary={<Typography variant="h6" style={{ fontWeight: "bold", color: theme.palette.mode === 'dark' ? colors.grey[100] : colors.grey[300] }}>Rechercher</Typography>} sx={{ opacity: open ? 1 : 0 }} />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding sx={{ display: "block" }} onClick={() => navigate("/add")}>
          <ListItemButton
            sx={{
              minHeight: 48,
              justifyContent: open ? "initial" : "center",
              px: 3,
            }}
          >
            <ListItemIcon
              sx={{
                minWidth: 0,
                mr: open ? 3 : "auto",
                justifyContent: "center",
              }}
            >
              <PostAddIcon />
            </ListItemIcon>
            <ListItemText disableTypography primary={<Typography variant="h6" style={{ fontWeight: "bold", color: theme.palette.mode === 'dark' ? colors.grey[100] : colors.grey[300] }}>Ajouter une action</Typography>} sx={{ opacity: open ? 1 : 0 }} />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding sx={{ display: "block" }} onClick={() => navigate("/mes_actions")}>
          <ListItemButton
            sx={{
              minHeight: 48,
              justifyContent: open ? "initial" : "center",
              px: 3,
            }}
          >
            <ListItemIcon
              sx={{
                minWidth: 0,
                mr: open ? 3 : "auto",
                justifyContent: "center",
              }}
            >
              <CalendarTodayOutlinedIcon />
            </ListItemIcon>
            <ListItemText disableTypography primary={<Typography variant="h6" style={{ fontWeight: "bold", color: theme.palette.mode === 'dark' ? colors.grey[100] : colors.grey[300] }}>Consulter mes actions</Typography>} sx={{ opacity: open ? 1 : 0 }} />
          </ListItemButton>
        </ListItem>
      </List>
    </Drawer>
  );
}