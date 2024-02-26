import Button from "../button";
import Clock from "./clock";
import timerStyle from "./timer.module.scss";

export default function Timer() {
  return (
    <div className={timerStyle.timer}>
      <h3 className={timerStyle.title}>Choose a card and start the timer</h3>
      <div className={timerStyle.timerWrapper}>
        <Clock />
      </div>
      <Button>Start!</Button>
    </div>
  );
}
