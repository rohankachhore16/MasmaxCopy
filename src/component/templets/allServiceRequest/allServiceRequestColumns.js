import { Visibility } from "@mui/icons-material";
import { Chip } from "@mui/material";
import { IconButton } from "@mui/material";
import React from "react";

const AllServiceRequestColumns = () => {
  return [
    {
      name: "ser",
      label: "SER.NAME",
    },
    {
      name: "sp",
      label: "SP.NAME",
    },
    {
      name: "cust",
      label: "CUST.NAME",
    },
    {
      name: "veh",
      label: "VEH. INFO",
    },
    {
      name: "tot",
      label: "TOT. AMT",
    },
    {
      name: "status",
      label: "STATUS",
      options: {
        filter: true,
        sort: false,
        customBodyRender: (value) => {
          console.log(value, "______________");
          return (
            <div>
              <Chip label="success" color="success" />
            </div>
          );
        },
      },
    },
    {
      name: "action",
      label: "Actions",
      options: {
        filter: true,
        sort: false,
        customBodyRender: (value) => {
          return (
            <div>
              <IconButton aria-label="delete">
                <Visibility />
              </IconButton>
            </div>
          );
        },
      },
    },
  ];
};

export default AllServiceRequestColumns;
