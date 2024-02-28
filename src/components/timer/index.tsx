import { useEffect, useState } from "react";
import { ITodos } from "../../types/todos";
import Button from "../button";
import Clock from "./clock";
import timerStyle from "./timer.module.scss";
import { tempoParaSegundos } from "../../common/utils/time";

interface Props {
  selected: ITodos | undefined;
}

export default function Timer({ selected }: Props) {
  const [time, setTime] = useState<number>();

  useEffect(() => {
    if (selected?.time) {
      setTime(tempoParaSegundos(selected.time));
    }
  }, [selected]);
  return (
    <div className={timerStyle.timer}>
      <h3 className={timerStyle.title}>Choose a card and start the timer</h3>
      <div className={timerStyle.timerWrapper}>
        <Clock timer={time} />
      </div>
      <Button>Start!</Button>
    </div>
  );
}
