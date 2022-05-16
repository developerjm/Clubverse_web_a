import React, {useState} from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';


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
  
  export default SignIn