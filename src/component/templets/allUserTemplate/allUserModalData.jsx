import { Grid, Stack, Typography } from "@mui/material";
import React from "react";

const AllUserModalData = () => {
  return (
    <>
      <Grid container spacing={5} width="100%">
        <Grid item lg={4} sm={4} xs={12} md={4}>
          <Stack direction="column" >
            <Typography variant="body1" component="subtitle2">Role</Typography>
            <Typography variant="body1">Customer </Typography>
          </Stack>
        </Grid>
        <Grid item lg={4} sm={4} xs={12} md={4}>
          <Stack direction="column">
            <Typography variant="body1">First Name</Typography>
            <Typography variant="body1">Addi </Typography>
          </Stack>{" "}
        </Grid>
        <Grid item lg={4} sm={4} xs={12} md={4}>
          <Stack direction="column">
            <Typography variant="body1">Last Name</Typography>
            <Typography variant="body1">Patel </Typography>
          </Stack>
        </Grid>
        {/* Second Grid  */}
        <Grid item lg={4} sm={4} xs={12} md={4}>
          <Stack direction="column" flexWrap="wrap">
            <Typography variant="body1">Email Id</Typography>
            <Typography variant="body1">Tests.Rajtest@Gmail.Com </Typography>
          </Stack>
        </Grid>
        <Grid item lg={4} sm={4} xs={12} md={4}>
          <Stack direction="column">
            <Typography variant="body1">Created At</Typography>
            <Typography variant="body1">08/16/2023</Typography>
          </Stack>
        </Grid>
        <Grid item lg={4} sm={4} xs={12} md={4}>
          <Stack direction="column">
            <Typography variant="body1">Address</Typography>
            <Typography variant="body1">__ </Typography>
          </Stack>
        </Grid>
      </Grid>
    </>
  );
};

export default AllUserModalData;
