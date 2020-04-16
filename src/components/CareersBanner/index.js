import React from "react";
import { Grid } from "@material-ui/core";
import ArrowLink from "../ArrowLink";
import "./index.sass";

import CareersBG from "../../assets/images/careers-bg.svg";

function CareersBanner() {
  return (
    <div className="careers-container">
      <Grid container justify="center">
        <Grid item container xs={9} xl={7} justify="space-between">
          <Grid item container xs={5} alignContent="space-between">
            <h2 className="H2">Meet the Crew</h2>
            <div className="careers-body">
              We're no coffee company. Learn more about the people that make it
              happen.
            </div>
            <button class="ui white button partner-button">
              <ArrowLink Title="Brew Crew" />
            </button>
          </Grid>
          <Grid item container xs={5} alignContent="space-between">
            <h2 className="H2">Working for Brew</h2>
            <div className="careers-body">
              Like what we do? We're always looking for talented people.
            </div>
            <button class="ui white button partner-button">
              <ArrowLink Title="Careers" />
            </button>
          </Grid>
        </Grid>
      </Grid>
      <img className="careers-bg-img" src={CareersBG} alt="background" />
    </div>
  );
}

export default CareersBanner;
