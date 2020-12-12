import React from "react"
import {Grid} from "@material-ui/core";
import Header from "../../Components/Header";
import NavBar from "../../Components/Navbar";
import Banner from "../../Components/Banner";
import Content from "../../Components/Content";

const Home = function () {

  return (
    <Grid container>
      <Header/>
      <NavBar/>
      <Banner/>
      <Content/>
    </Grid>
  )
}

export default Home