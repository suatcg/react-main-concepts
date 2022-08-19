import React from "react";
import classes from "./WarningBanner.module.css";

function WarningBanner(props) {
  if (!props.warn) {
    return null;
  }

  return <div className={classes.warning}>Warning</div>;
}

export default WarningBanner;
