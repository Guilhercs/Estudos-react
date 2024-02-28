import React from "react";
import clockStyle from "./relogio.module.scss";
interface Props {
  timer: number | undefined;
}

export default function Clock({ timer = 0 }: Props) {
  const min = Math.floor(timer / 60);
  const sec = timer % 60;
  const [minDozens, minUnit] = String(min).padStart(2, "0");
  const [secDozens, secUnit] = String(sec).padStart(2, "0");

  return (
    <React.Fragment>
      <span className={clockStyle.clockNumber}>{minDozens}</span>
      <span className={clockStyle.clockNumber}>{minUnit}</span>
      <span className={clockStyle.clockTwoPoints}>:</span>
      <span className={clockStyle.clockNumber}>{secDozens}</span>
      <span className={clockStyle.clockNumber}>{secUnit}</span>
    </React.Fragment>
  );
}
