import React from "react";
import { Grid } from "@material-ui/core";
import "./index.sass";

import Mug from "../../assets/images/mb-mug.png";

function Footer() {
  return (
    <div className="footer-container">
      <Grid item container justify="center">
        <Grid item container xs={9} xl={7} justify="space-evenly" spacing={3}>
          <Grid item container xs style={{ position: "relative" }}>
            <img className="mug-img" src={Mug} alt="morning brew mug" />
          </Grid>
          <Grid item container xs direction="column">
            <div className="footer-column-title">Newsletters</div>
            <div className="footer-column-row">Morning Brew</div>
            <div className="footer-column-row">Emerging Tech Brew</div>
            <div className="footer-column-row">Retail Brew</div>
            <div className="footer-column-row">The Turnout</div>
          </Grid>
          <Grid item container xs direction="column">
            <div className="footer-column-title">Latest Issues</div>
            <div className="footer-column-row">Morning Brew</div>
            <div className="footer-column-row">Emerging Tech Brew</div>
            <div className="footer-column-row">Retail Brew</div>
            <div className="footer-column-row">The Turnout</div>
          </Grid>
          <Grid item container xs direction="column">
            <div className="footer-column-title">Archive</div>
            <div className="footer-column-row">Stories</div>
            <div className="footer-column-row">Issues</div>
          </Grid>
          <Grid item container xs direction="column">
            <div className="footer-column-title">Brew</div>
            <div className="footer-column-row">Contact Us</div>
            <div className="footer-column-row">Podcast</div>
            <div className="footer-column-row">Shop</div>
            <div className="footer-column-row">Team</div>
            <div className="footer-column-row">Careers</div>
            <div className="footer-column-row">Privacy</div>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

export default Footer;
