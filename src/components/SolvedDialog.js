import * as React from 'react'
import { Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Slide, Button } from '@mui/material'

function SolvedDialog(props) {

    const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
    });
    
    return (
        <Dialog
            open={props.open}
            TransitionComponent={Transition}
            keepMounted
            onClose={props.handleClose}
            aria-describedby="alert-dialog-slide-description"
            
          >
          <DialogTitle>{"..."}</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-slide-description">
              8-44-33 22-33-4-444-66-66-444-66-4 444-7777 8-44-33 55-33-999 ,
              8-44-33 33-999-33 444-7777 8-44-33 9-444-66-3-666-9
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={props.handleClose}>I'll be sure to call.</Button>
          </DialogActions>
        </Dialog>
    )
}

export default SolvedDialog;