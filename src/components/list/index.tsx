import listStyle from "./list-style.module.scss";
import Item from "./item";
import { ITodos } from "../../types/todos";

interface Props {
  todos: ITodos[];
  selectTodo: (selectedTodo: ITodos) => void;
}

export default function List({ todos, selectTodo }: Props) {
  return (
    <aside className={listStyle.listaTarefas}>
      <h2>Estudos do dia</h2>
      <ul>
        {todos.map((item) => (
          <Item selectTodo={selectTodo} key={item.id} {...item} />
        ))}
      </ul>
    </aside>
  );
}
