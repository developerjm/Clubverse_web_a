import React, {useState} from 'react';
import './styles.css';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import { DialogActions, DialogContent, DialogContentText } from '@material-ui/core';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';


function Header() {
  return (
    <header>
      <Typography component="h1" variant="h3">
        ClubVerse
      </Typography> 
    </header>
  );
}

function SignIn() {
  
  return(
    <div>
      <Box sx={{
            marginTop: 5,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            marginBottom: 5
          }}>
        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h4" sx={{mb: 3}}>
          Welcome to ClubVerse
        </Typography>    
        <TextField 
          label="Email Address" 
          fullWidth 
          required 
          name="email"
          autoComplete="email"
          sx={{mt:1}}
        />
        <TextField 
          label="password" 
          fullWidth 
          required 
          name="password"
          autoComplete="password"
          sx={{mt:1}}
        />  
        <Button type="submit" fullWidth variant="contained" sx={{mt:3, mb:2}}>Sign In</Button>
        <Grid container>
          <Grid item xs>
            <Link>Forgot Password?</Link>
          </Grid>
          <Grid item>
            <Link>Sign up</Link>
          </Grid>
        </Grid>
      </Box>
    </div>

  );
}

// function Subscribe() {
//   return(

//   );
// }

function Nav() {
  const [logOpen, setLogOpen] = useState(false);
  return (
    <nav>
      <h3>
        Menu
      </h3>
      <Button variant='outlined' onClick={()=>{setLogOpen(true)}}>로그인</Button>
      <Dialog open={logOpen}>
        <DialogContent>
          <SignIn></SignIn>
          <Button variant onClick={()=>{setLogOpen(false)}}>Cancel</Button>
        </DialogContent>
      </Dialog>
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