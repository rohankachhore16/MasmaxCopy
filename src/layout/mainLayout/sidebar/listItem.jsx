import {
  AccountCircle,
  Assessment,
  CarCrash,
  Category,
  Dashboard,
  Drafts,
  Inbox,
  Mail,
  MinorCrash,
  People,
  SupportAgent,
  TrendingFlat,
} from "@mui/icons-material";
import React from "react";
import { ROUTE_DEFINATION } from "../../../utils/routesCostant";
import {
  Box,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

const ListItemComponent = ({ open, setOpen }) => {
  const navigate = useNavigate()
  const AdminList = [
    {
      id: "1",
      icon: <Dashboard />,
      value: "Dashboard",
      path: ROUTE_DEFINATION.BASE,
    },
    {
      id: "2",
      icon: <People />,
      value: "Customers",
      path: ROUTE_DEFINATION.CUSTOMER,
    },
    {
      id: "3",
      icon: <CarCrash />,
      value: "Service Request",
      path: ROUTE_DEFINATION.SERVICE_REQUEST,
    },
    {
      id: "4",
      icon: <SupportAgent />,
      value: "Service Provider",
      path: ROUTE_DEFINATION.SERVICE_PROVIDER,
    },
    {
      id: "5",
      icon: <Category />,
      value: "Service Categories",
      path: ROUTE_DEFINATION.SERVICE_CATEGORIES,
    },
    {
      id: "6",
      icon: <MinorCrash />,
      value: "Service ",
      path: ROUTE_DEFINATION.SERVICE,
    },
    {
      id: "7",
      icon: <Assessment />,
      value: "Reports ",
      path: ROUTE_DEFINATION.REPORTS,
    },

  ];
  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          flexDirection: "column",
          height: "100%",
        }}
      >
        <Box>
          {AdminList.map((item) => {
            return (
              <>
                <ListItem
                  key={item.id}
                  disablePadding
                  sx={{ display: "block" }}
                >
                  <ListItemButton onClick={() => navigate(item.path)}
                  >
                    <ListItemIcon
                      sx={{
                        minWidth: "50px",
                        color: "Blue ",
                        display: "inline-flex",
                      }}
                    >
                      {item.icon}
                    </ListItemIcon>
                    <ListItemText primary={item.value} />
                  </ListItemButton>
                </ListItem>
              </>
            );
          })}
        </Box>
        <Box>
          <Divider />
          <List>
            <ListItem disablePadding sx={{ display: "block" }}>
              <ListItemButton>
                <ListItemIcon>
                  <AccountCircle />
                </ListItemIcon>
                <ListItemText primary="Profile" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding sx={{ display: "block" }}>
              <ListItemButton>
                <ListItemIcon>
                  <TrendingFlat />
                </ListItemIcon>
                <ListItemText primary="LogOut" />
              </ListItemButton>
            </ListItem>
          </List>
        </Box>
      </Box>
    </>
  );
};

export default ListItemComponent;
