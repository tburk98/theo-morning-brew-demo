import React from "react";
import Ticker from "react-ticker";
import { Grid } from "@material-ui/core";
import "./index.sass";

const stories = [
  "32 Ways People Are Using Zoom Besides Work",
  "Fed Unleashes Another Round of Stimulus Measures",
  "Zoom Under Fire for Security, Privacy Lapses",
  "Google, Facebook Share Mobile Location Data",
];

function BrewTicker() {
  let headlines = ["Trending Now on Morning Brew", ...stories];

  return (
    <div className="ticker-container">
      <Ticker speed={3}>
        {({ index }) => (
          <>
            <div className="headline-container">
              <div
                className={
                  index % headlines.length === 0
                    ? "ticker-headline-bold"
                    : "ticker-headline"
                }
              >
                {headlines[index % headlines.length]}{" "}
                <span className="spacer">●</span>
              </div>
            </div>
          </>
        )}
      </Ticker>
    </div>
  );
}

export default BrewTicker;
