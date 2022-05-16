import React, {useState} from 'react';
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import { Info, Main } from "./pages";
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Article from './components/Article';
import Header from './components/Header';
import Nav from './components/Nav';
import SignInButton from './components/SignInButton';

function App() {
  return(
  <Container>
    <BrowserRouter>
      <Header></Header>
      {/* <SignInButton /> */}
      <Grid container>
        <Grid xs={2}>
          <Nav></Nav>
        </Grid>
        <Grid xs={10}>
          <Article />
        </Grid>
      </Grid>
    </BrowserRouter>
  </Container>
  );
}

export default App