import React from "react";
import { styled } from "@mui/material/styles";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { Avatar, Box, Stack } from "@mui/material";
import {
  BlenderOutlined,
  Delete,
  NotificationsNone,
} from "@mui/icons-material";
import AvtarImage from "../../../assets/images/AvtarImage.jpg";
const AppBar = ({ open, setOpen }) => {
  const drawerWidth = 240;

  const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== "open",
  })(({ theme, open }) => ({
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
      marginLeft: drawerWidth,
      width: `calc(100% - ${drawerWidth}px)`,
      transition: theme.transitions.create(["width", "margin"], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    }),
    ...(!open && {
      left: "65px",
    }),
  }));
  return (
    <>
      <AppBar
        position="fixed"
        open={open}
        sx={{ border: "none", background: "none", boxShadow: "none" }}
      >
        <Toolbar>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              width: "100%",
            }}
          >
            <Box>
              <IconButton
                onClick={() => setOpen(!open)}
                aria-label="open drawer"
                edge="start"
                sx={{
                  marginRight: 5,
                  marginLeft: "-22px",
                  background: " #ffb3b3", borderRadius: "10px", color: "#ff6666",
                  '&:hover': {
                    background: "#ff6666",
                    color: "#ffb3b3"
                  }
                  // ...(open && { display: 'none' }),
                }}
              >
                <MenuIcon />
              </IconButton>
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                gap: "10px",
              }}
            >
              <Box sx={{ background: " #ffb3b3", borderRadius: "10px" }}>
                <IconButton aria-label="delete">
                  <NotificationsNone fontSize="small" sx={{ color: "#ff6666" }} />
                </IconButton>
              </Box>
              <Stack
                alignItems="center"
                direction="row"
                gap="20px"
                sx={{
                  background: " #ffb3b3",
                  color: "black",
                  marginRight: open ? "20px" : "80px",
                  padding: "5px 8px",
                  borderColor: "1px solid black",
                  borderRadius: "40px",
                }}
              >
                <Box>
                  <Avatar
                    alt="Remy Sharp"
                    src={AvtarImage}
                    sx={{ height: "35px", width: "35px" }}
                  />
                </Box>
                <Stack direction="column" marginRight="2px">
                  <Typography variant="caption">Super Admin</Typography>
                  <Typography variant="caption"> Admin</Typography>
                </Stack>
              </Stack>
            </Box>
          </Box>
          {/* <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              width: "100%",
              alignItems: "center",
            }}
          >
            <Box>
              <IconButton
                onClick={() => setOpen(!open)}
                color="inherit"
                aria-label="open drawer"
                edge="start"
                sx={{
                  marginRight: 5,
                  // ...(open && { display: 'none' }),
                }}
              >
                <MenuIcon />
              </IconButton>
            </Box>

            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                width: "200px",
                marginRight: "40px",
              }}
            >
              <Box >
                <IconButton aria-label="delete" size="small">
                  <Delete fontSize="small" />
                </IconButton>
              </Box>
              <Box sx={{ background: "white" }}>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    width: "150px"
                  }}
                >
                  <Avatar alt="Remy Sharp" src={AvtarImage} />
                  <Box sx={{ marginLeft: "20px", color: "red" }}>
                    <Typography variant="body2">Super Admin</Typography>
                    <Typography variant="body2"> Admin</Typography>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box> */}
        </Toolbar>
      </AppBar >
    </>
  );
};

export default AppBar;
