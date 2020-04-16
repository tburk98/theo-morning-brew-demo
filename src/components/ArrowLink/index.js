import React from "react";
import { Grid } from "@material-ui/core";
import "./index.sass";
import TinyArrow from "../../assets/images/link-arrow.svg";

function ArrowLink(props) {
  return (
    <div className="arrow-container">
      <div className="link-title">{props.Title}</div>
      <span>
        <img src={TinyArrow} alt="tiny arrow" />
      </span>
    </div>
  );
}

export default ArrowLink;
