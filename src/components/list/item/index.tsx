import { ITodos } from "../../../types/todos";
import style from "../list-style.module.scss";

export default function Item({ todo, timer, selected, complete, id }: ITodos) {
  console.log("item atual: ", { todo, timer, selected, complete, id });
  return (
    <li className={style.item}>
      <h3>{todo}</h3>
      <span>{timer}</span>
    </li>
  );
}
