import React from "react";
import { Grid } from "@material-ui/core";
import "./index.sass";
import IntroBG from "../../assets/images/brew-intro-bg.svg";
import DeliverIcon from "../../assets/images/mail-deliver.svg";
import BrainIcon from "../../assets/images/brain.svg";
import ThumbIcon from "../../assets/images/thumbs-up.svg";

function BrewIntro() {
  return (
    <div className="intro-container">
      <img src={IntroBG} alt="background" className="intro-bg" />
      <Grid container justify="center" className="intro-content">
        <Grid container item xs={10} spacing={3}>
          <Grid container item xs={12}>
            <Grid item xs={7}>
              <h2 className="H2">
                Cut through the clutter
                <br />
                of traditional business news.
              </h2>
            </Grid>
          </Grid>
          <Grid item xs={6}>
            <div className="intro-body">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </div>
          </Grid>
        </Grid>

        <Grid item container xs={12} justify="center">
          <Grid item container xs={10} spacing={3}>
            <Grid
              item
              container
              xs={4}
              direction="column"
              justify="space-evenly"
            >
              <img
                src={DeliverIcon}
                alt="mail delivered"
                className="value-image"
              />
              <div className="value-title">Business News Delivered Fresh</div>
              <div className="value-body">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </div>
            </Grid>
            <Grid
              item
              container
              xs={4}
              direction="column"
              justify="space-evenly"
            >
              <img
                src={BrainIcon}
                alt="mail delivered"
                className="value-image"
              />
              <div className="value-title">Become Smarter in 5 Minutes</div>
              <div className="value-body">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </div>
            </Grid>
            <Grid
              item
              container
              xs={4}
              direction="column"
              justify="space-evenly"
            >
              <img
                src={ThumbIcon}
                alt="mail delivered"
                className="value-image"
              />
              <div className="value-title">Actually Enjoyable</div>
              <div className="value-body">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </div>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

export default BrewIntro;
