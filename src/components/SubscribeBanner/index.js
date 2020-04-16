import React from "react";
import { Grid } from "@material-ui/core";
import "./index.sass";
import TryNow from "../../assets/images/try-now.svg";

function SubscribeBanner() {
  return (
    <div className="banner-container">
      <Grid
        item
        container
        xs={12}
        justify="space-around"
        align-items="center"
        spacing={3}
      >
        <Grid item container xs={5} justify="flex-end">
          <img
            className="try-now"
            src={TryNow}
            alt="try morning brew for free now"
          />
        </Grid>
        <Grid item container xs={5} justify="flex-start" alignItems="center">
          <div>
            <div class="ui action input">
              <input
                type="text"
                placeholder="Enter Email"
                style={{ width: 280 }}
              />
              <button class="ui button black">Subscribe</button>
            </div>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

export default SubscribeBanner;
