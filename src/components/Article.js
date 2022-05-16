import React, {useState} from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import { DialogActions, DialogContent, DialogContentText } from '@material-ui/core';

function Article() {
    const [open, setOpen] = useState(false);
    return (
      <article >
        <h2>This is Clubverse main page</h2>
        <p>This Website is founded by developerjm for the first prototype of Clubverse webpage.</p>
        <br />
        <Button variant='contained' onClick={()=>{setOpen(true)} }>내 성향 분석하기</Button>
        <Dialog open={open}>
          <DialogTitle>Confirmation</DialogTitle>
          <DialogContent>
            <DialogContentText>Are you sure to enter this world?</DialogContentText><br />
            <DialogActions>
              <Button variant='contained' onClick={()=>setOpen(false)}>Yes I am</Button>
              <Button onClick={()=>setOpen(false)}>I refuse to enter</Button>
            </DialogActions>
          </DialogContent>
        </Dialog>
      </article>
    );
  }

export default Article