import { Alert, Snackbar } from '@mui/material'
import React from 'react'

function AlertMessage(props:any) {
const {successMessage, setSuccessMessage} = props;

return (
    <Snackbar
        open={successMessage}
        autoHideDuration={3000}
        onClose={() => setSuccessMessage(false)}
      >
        <Alert
          onClose={() => setSuccessMessage(false)}
          severity="success"
          sx={{ width: "100%" }}
        >
          Checkout successful! Redirecting to home page...
        </Alert>
      </Snackbar>
  )
}

export default AlertMessage;