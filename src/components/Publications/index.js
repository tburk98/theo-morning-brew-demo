import React from "react";
import { Grid } from "@material-ui/core";
import BrewTicker from "../BrewTicker";
import ArrowLink from "../ArrowLink";
import "./index.sass";

import BusinessCasual from "../../assets/images/business-casual.jpeg";
import Turnout from "../../assets/images/turnout-logo.svg";

function Publications() {
  return (
    <div className="pub-container">
      <Grid item container justify="center">
        <Grid
          item
          container
          xs={12}
          justify="center"
          className="pub-title"
          spacing={1}
        >
          <Grid item xs={12}>
            <h2 className="H2">Our Publications</h2>
          </Grid>
          <Grid item xs={12}>
            <h3 className="H3">
              We make business news actually{" "}
              <span className="underlined">enjoyable.</span>
            </h3>
          </Grid>
          <Grid item xs={10}>
            <BrewTicker />
          </Grid>
          <Grid item container xs={10} justify="center">
            <Grid item container xs={4} className="newsletter-container">
              <Grid item>
                <div className="pre-header">Our Flagship Newsletter</div>

                <h3 className="H3">Morning Brew</h3>

                <div className="pub-body">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                  magna tellus, rutrum a euismod in, tincidunt dictum justo.
                  Vestibulum justo neque, condimentum at ante quis, ullamcorper
                  euismod ante.
                </div>
                <ArrowLink Title="View Latest Issue" />
              </Grid>
              <Grid item xs={12}>
                <hr className="dotted-line" />
              </Grid>
              <Grid item>
                <div className="pre-header">
                  The Technologies Changing the Future of Business
                </div>

                <h3 className="H3">Emerging Tech Brew</h3>

                <div className="pub-body">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                  magna tellus, rutrum a euismod in, tincidunt dictum justo.
                  Vestibulum justo neque, condimentum at ante quis, ullamcorper
                  euismod ante.
                </div>
                <ArrowLink Title="View Latest Issue" />
              </Grid>
              <Grid item xs={12}>
                <hr className="dotted-line" />
              </Grid>
              <Grid item>
                <div className="pre-header">
                  A Must-Read For The Reatail Professional
                </div>

                <h3 className="H3">Retail Brew</h3>

                <div className="pub-body">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                  magna tellus, rutrum a euismod in, tincidunt dictum justo.
                  Vestibulum justo neque, condimentum at ante quis, ullamcorper
                  euismod ante.
                </div>
                <ArrowLink Title="View Latest Issue" />
              </Grid>
            </Grid>
            <Grid item container xs={5} className="podcast-container">
              <Grid item container justify="center">
                <Grid item xs={10}>
                  <img
                    className="podcast-img"
                    src={BusinessCasual}
                    alt="business casual podcast"
                  />
                </Grid>
                <Grid item xs={10}>
                  <div className="pre-header">
                    Answering the Biggest Questions in Business
                  </div>

                  <h3 className="H3">
                    Now Streaming:
                    <br />
                    Business Casual Podcast
                  </h3>

                  <div className="pub-body">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nunc magna tellus, rutrum a euismod in, tincidunt dictum
                    justo. Vestibulum justo neque, condimentum at ante quis,
                    ullamcorper euismod ante. Ut enim ad minim veniam, quis
                    nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                    commodo consequat.
                  </div>
                  <ArrowLink Title="Listen to the latest episode" />
                </Grid>
              </Grid>
              <Grid item container></Grid>
            </Grid>
            <Grid item container xs={3} className="turnout-container">
              <Grid item container justify="center">
                <Grid container item xs={12} direction="column">
                  <Grid item>
                    <img
                      className="turnout-img"
                      src={Turnout}
                      alt="the turnout newsletter"
                    />
                  </Grid>
                  <Grid item>
                    <div className="pub-body">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Nunc magna tellus, rutrum a euismod in, tincidunt dictum
                      justo. Vestibulum justo neque, condimentum at ante quis,
                      ullamcorper euismod ante. Ut enim ad minim veniam, quis
                      nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                      commodo consequat.
                    </div>
                  </Grid>
                  <Grid item>
                    <ArrowLink Title="View Latest Issue" />
                  </Grid>
                  <Grid item>
                    <hr className="dotted-line" />
                  </Grid>
                  <div className="pre-header">More Coming Soon</div>

                  <h3 className="H3">Stay Tuned</h3>

                  <div className="pub-body">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nunc magna tellus, rutrum a euismod in, tincidunt dictum
                    justo. Vestibulum justo neque, condimentum at ante quis,
                    ullamcorper euismod ante.
                  </div>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

export default Publications;
