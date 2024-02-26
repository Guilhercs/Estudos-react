import React from "react";
import clockStyle from "./relogio.module.scss";

export default function Clock() {
  return (
    <React.Fragment>
      <span className={clockStyle.clockNumber}>0</span>
      <span className={clockStyle.clockNumber}>0</span>
      <span className={clockStyle.clockTwoPoints}>:</span>
      <span className={clockStyle.clockNumber}>0</span>
      <span className={clockStyle.clockNumber}>0</span>
    </React.Fragment>
  );
}
