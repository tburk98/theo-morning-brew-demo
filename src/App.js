import React from "react";
import { Grid } from "@material-ui/core";
import MenuBar from "./components/MenuBar";
import Hero from "./components/Hero";
import BrewIntro from "./components/BrewIntro";
import Publications from "./components/Publications";
import SubscribeBanner from "./components/SubscribeBanner";
import Partner from "./components/Partner";
import CareersBanner from "./components/CareersBanner";
import Footer from "./components/Footer";
import "./App.sass";

function App() {
  return (
    <Grid container jusitfy="center" className="root">
      <Grid container item className="App" justify="center">
        <MenuBar />
        <Hero />
        <BrewIntro />
        <Publications />
        <SubscribeBanner />
        <Partner />
        <CareersBanner />
        <Footer />
      </Grid>
    </Grid>
  );
}

export default App;
