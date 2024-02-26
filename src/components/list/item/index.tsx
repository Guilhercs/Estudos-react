import { ITodos } from "../../../types/todos";
import style from "../list-style.module.scss";

interface Props extends ITodos {
  selectTodo: (selectedTodo: ITodos) => void;
}

export default function Item({
  todo,
  time,
  selected,
  complete,
  id,
  selectTodo,
}: Props) {
  return (
    <li
      className={`${style.item} ${selected ? style.itemSelecionado : ""}`}
      onClick={() =>
        selectTodo({
          todo,
          time,
          selected,
          complete,
          id,
        })
      }
    >
      <h3>{todo}</h3>
      <span>{time}</span>
    </li>
  );
}
