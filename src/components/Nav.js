import React, {useState} from 'react';
import Button from '@mui/material/Button';;
import Dialog from '@mui/material/Dialog';
import { DialogActions, DialogContent, DialogContentText } from '@material-ui/core';
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import SignIn from './SignIn';
import FindClub from '../pages/FindClub';
import FindMeeting from '../pages/FindMeeting';


function Nav() {
    const [logOpen, setLogOpen] = useState(false);
    return (
      <nav>
        <h2>
        Menu
        </h2>
        <Button variant='outlined' onClick={()=>{setLogOpen(true)}}>로그인</Button>
        <Dialog open={logOpen}>
        <DialogContent>
            <SignIn></SignIn>
            <Button variant onClick={()=>{setLogOpen(false)}}>Cancel</Button>
        </DialogContent>
        </Dialog>
        <Button variant='outlined'>회원가입</Button><br />

        {/* <Link to="/">Home</Link>
        <Link to="/findclub">Find Club</Link>
        <Link to="/findmeeting">Find Meeting</Link>

        <Routes>
            <Route path="/" element={<App />} />
            <Route path="/findclub" element={<FindClub />} />
            <Route path="/findmeeting" element={<FindMeeting />} />
        </Routes> */}


        <Button variant='text' style={{color: 'black'}}>소모임 찾기</Button><br />
        <Button variant='text' style={{color: 'black'}}>동아리 찾기</Button><br />
        <Button variant='text' style={{color: 'black'}}>소모임 만들기</Button><br />
        <Button variant='text' style={{color: 'black'}}>동아리 만들기</Button>
      </nav>
    )
  }

  export default Nav