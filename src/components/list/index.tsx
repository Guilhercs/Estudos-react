import listStyle from "./list-style.module.scss";
import Item from "./item";
import { ITodos } from "../../types/todos";

export default function List({ todos }: { todos: ITodos[] }) {
  return (
    <aside className={listStyle.listaTarefas}>
      <h2>Estudos do dia</h2>
      <ul>
        {todos.map((item, index) => (
          <Item key={index} {...item} />
        ))}
      </ul>
    </aside>
  );
}
