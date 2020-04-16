import React from "react";
import { Grid } from "@material-ui/core";
import "./index.sass";

import Megaphone from "../../assets/images/megaphone.svg";
import Mail from "../../assets/images/mail-flat.svg";
import Up from "../../assets/images/up-flat.svg";
import PartnerBG from "../../assets/images/partner-arrow-bg.svg";
import ArrowLink from "../ArrowLink";

function Partner() {
  return (
    <div className="partner-container">
      <img className="partner-bg-img" src={PartnerBG} alt="background" />
      <Grid item container justify="center">
        <Grid item container xs={10} justify="space-between">
          <Grid item container xs={5}>
            <h2 className="H2">Partner With Us</h2>
            <Grid item container>
              <Grid item xs={12}>
                <h3 className="H3">We connect with our audience.</h3>
              </Grid>
              <Grid item xs={12}>
                <div className="partner-body">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Curabitur et elit in enim lobortis aliquet. Nulla id eros
                  orci. Sed ut pretium sapien, a pellentesque neque. Vivamus a
                  erat eu lacus maximus dapibus vel a massa. Proin sit amet arcu
                  nec orci tempor mattis ut eu lectus. Vestibulum vehicula
                  rhoncus fringilla. Cras quis enim a nulla sollicitudin egestas
                  dignissim eu lectus. Phasellus eget mauris ante. Suspendisse
                  scelerisque turpis sit amet quam vehicula suscipit.
                </div>
              </Grid>
            </Grid>
            <Grid item container>
              <Grid item xs={12}>
                <h3 className="H3">We work with great brands.</h3>
              </Grid>
              <Grid item xs={12}>
                <div className="partner-body">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Curabitur et elit in enim lobortis aliquet. Nulla id eros
                  orci. Sed ut pretium sapien, a pellentesque neque. Vivamus a
                  erat eu lacus maximus dapibus vel a massa. Proin sit amet arcu
                  nec orci tempor mattis ut eu lectus. Vestibulum vehicula
                  rhoncus fringilla. Cras quis enim a nulla sollicitudin egestas
                  dignissim eu lectus. Phasellus eget mauris ante. Suspendisse
                  scelerisque turpis sit amet quam vehicula suscipit.
                </div>
              </Grid>
            </Grid>
            <Grid item container>
              <Grid item xs={12} className="partner-cta">
                <h4 className="H4">Have a great idea?</h4>
              </Grid>
              <Grid container item xs={6}>
                <button class="ui basic button partner-button">
                  <ArrowLink Title="Get in touch" />
                </button>
              </Grid>
            </Grid>
          </Grid>
          <Grid item container xs={5} alignContent="center">
            <Grid item container justify="flex-end" alignItems="center">
              <Grid item xs={3}>
                <img className="partner-icon" src={Megaphone} alt="megaphone" />
              </Grid>
              <Grid item xs={7}>
                <div className="partner-value">
                  2M+ subscribers
                  <br />
                  across our platforms
                </div>
              </Grid>
            </Grid>
            <Grid item container justify="flex-end" alignItems="center">
              <Grid item xs={3}>
                <img className="partner-icon" src={Mail} alt="mail" />
              </Grid>
              <Grid item xs={7}>
                <div className="partner-value">
                  A second key metric
                  <br />
                  would go here
                </div>
              </Grid>
            </Grid>
            <Grid item container justify="flex-end" alignItems="center">
              <Grid item xs={3}>
                <img className="partner-icon" src={Up} alt="up arrow" />
              </Grid>
              <Grid item xs={7}>
                <div className="partner-value">
                  Another key metric
                  <br />
                  goes here
                </div>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

export default Partner;
