import React, {useState} from 'react';
import './styles.css';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import { DialogActions, DialogContent, DialogContentText } from '@material-ui/core';
import { StylesContext } from '@material-ui/core/node_modules/@material-ui/styles';
import { SyncOutlined } from '@material-ui/icons';



function Header() {
  return (
    <header>
      <h1>Welcome To Clubverse!</h1>
    </header>
  );
}

function LogIn() {
  
  // return(

  // );
}

// function Subscribe() {
//   return(

//   );
// }

function Nav() {
  const [logOpen, setLogOpen] = useState(false);
  return (
    <nav /*style={{ border: '1px solid grey'}}*/>
      <h3>
        Menu
      </h3>
      <Button variant='outlined' onClick={()=>{setLogOpen(true)}}>로그인</Button>
      <Dialog open={logOpen}>
        <DialogTitle>
          Please Enter Your Email and Password
        </DialogTitle>
        <DialogContent>
          <Button variant='contained'>Log in</Button>
          <Button variant onClick={()=>{setLogOpen(false)}}>Cancel</Button>
        </DialogContent>
      </Dialog>
      <LogIn></LogIn>
      <Button variant='outlined'>회원가입</Button><br />
      <Button variant='text' style={{color: 'black'}}>소모임 찾기</Button><br />
      <Button variant='text' style={{color: 'black'}}>동아리 찾기</Button><br />
      <Button variant='text' style={{color: 'black'}}>소모임 만들기</Button><br />
      <Button variant='text' style={{color: 'black'}}>동아리 만들기</Button>
    </nav>
  )
}

function Article() {
  const [open, setOpen] = useState(false);
  return (
    <article >
      <h2>Click below to enter metaverse</h2>
      <p>This Website is founded by developerjm for the first prototype of Clubverse webpage.</p>
      <br />
      <Button variant='contained' onClick={()=>{setOpen(true)} }>Enter</Button>
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

export default function App() {
  return(
    <Container>
      <Header></Header>
      <Grid container>
        <Grid xs={2}>
          <Nav></Nav>
        </Grid>
        <Grid xs={10}>
          <Article></Article>
        </Grid>
      </Grid>
    </Container>
  );
}