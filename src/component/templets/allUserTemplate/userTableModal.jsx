import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { Box, Divider, IconButton, Typography } from '@mui/material';
import { Close } from '@mui/icons-material';
import AllUserModalData from './allUserModalData';

export default function AlertDialog({ customerModal, setCustomerModal }) {

  return (
    <div>

      <Dialog
        open={customerModal}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        fullWidth
      >
        <DialogTitle id="alert-dialog-title">
          <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <Typography >
              Customer Details            </Typography>
            <IconButton onClick={() => setCustomerModal(false)}>
              <Close />
            </IconButton>
          </Box>

        </DialogTitle>
        <Divider />

        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            <AllUserModalData />
          </DialogContentText>
        </DialogContent>

      </Dialog>
    </div>
  );
}