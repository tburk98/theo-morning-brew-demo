import React, { useState } from "react";
import { Grid } from "@material-ui/core";
import "./index.sass";
import HeroBG from "../../assets/images/blue-graph-bg-inverse.svg";
import iPhone from "../../assets/images/news-mockup.png";
import DotGrid from "../../assets/images/dot-grid-white.svg";

// Just for testing
const sleep = (milliseconds) => {
  return new Promise((resolve) => setTimeout(resolve, milliseconds));
};

function Hero() {
  const [subscribeClass, setSubscribeClass] = useState("ui black button");
  const [subscribed, setSubscribe] = useState(false);

  const handleSubscribe = () => {
    if (subscribed === false) {
      setSubscribeClass("ui black loading button");
      sleep(1000).then(() => {
        setSubscribe(true);
        setSubscribeClass("ui positive button");
      });
    }
  };

  return (
    <Grid container item xs={10} justify="center">
      <img src={HeroBG} alt="background" className="hero-bg" />
      <img src={iPhone} alt="iphone" className="hero-iphone1" />
      <img src={DotGrid} alt="background texture" className="hero-dot-bg" />
      <div className="container">
        <Grid item container direction="column" justify="center">
          <Grid item>
            <h1 className="hero-title">
              A better kind of
              <br />
              business news
            </h1>
          </Grid>
          <Grid container item xs={12} justify="center">
            <div className="hero-body">
              From Wall Street to Silicon Valley, get the daily email that makes
              reading the news actually enjoyable. Stay informed and
              entertained, for free.
            </div>
          </Grid>
          <Grid item container direction="column" justify="center">
            <Grid item container justify="center">
              <div className="sub-input-box">
                <div class="ui action input">
                  <input
                    type="text"
                    placeholder="Enter Email"
                    disabled={subscribed}
                    style={{ width: 280 }}
                  />
                  <button class={subscribeClass} onClick={handleSubscribe}>
                    {subscribed ? "Subscribed!" : "Try it now"}
                  </button>
                </div>
              </div>
              <Grid item container justify="center">
                <div className="hero-cta">Join Our 2+ Million Readers</div>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </div>
    </Grid>
  );
}

export default Hero;
