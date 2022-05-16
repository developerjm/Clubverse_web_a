import SignIn from "./SignIn";
import React, {useState} from 'react';
import Button from '@mui/material/Button';

function SignInButton() {
    const [logOpen, setLogOpen] = useState(false);
    return (
    <div>
    <Button variant='outlined' onClick={()=>{setLogOpen(true)}}>로그인</Button>  
    <Dialog open={logOpen}>
    <DialogContent>
        <SignIn></SignIn>
        <Button variant onClick={()=>{setLogOpen(false)}}>Cancel</Button>
    </DialogContent>
    </Dialog>
    </div>
    );
}

export default SignInButton
