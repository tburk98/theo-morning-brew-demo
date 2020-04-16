import React from "react";
import { Grid } from "@material-ui/core";
import "./index.sass";
import logo from "../../assets/images/MB Logo Alpha.png";

function MenuBar() {
  return (
    <Grid container className="menu" justify="center">
      <Grid
        container
        item
        xs={11}
        alignContent="center"
        justify="space-between"
      >
        <Grid item>
          <img className="logo" src={logo} alt="Logo" />
        </Grid>
        <Grid
          item
          container
          spacing={2}
          xs={6}
          alignItems="center"
          justify="flex-end"
        >
          <Grid className="menu-item" item>
            Newsletters
          </Grid>
          <Grid className="menu-item" item>
            Podcast
          </Grid>
          <Grid className="menu-item" item>
            Team
          </Grid>
          <Grid className="menu-item" item>
            Shop
          </Grid>
          <Grid className="menu-item" item>
            About
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default MenuBar;
