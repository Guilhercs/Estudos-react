import listStyle from "./list-style.module.scss";
import Item from "./item";
import { useState } from "react";

export default function List() {
  let [tarefas, setTarefas] = useState([
    {
      tarefa: "React",
      tempo: "02:00:00",
    },
    {
      tarefa: "Javascript",
      tempo: "01:00:00",
    },
  ]);
  return (
    <aside className={listStyle.listaTarefas}>
      <h2
        onClick={() => {
          setTarefas([...tarefas, { tarefa: "Todo x", tempo: "05:00:00" }]);
        }}
      >
        Estudos do dia
      </h2>
      <ul>
        {tarefas.map((item, index) => (
          <Item key={index} todo={item.tarefa} timer={item.tempo} />
        ))}
      </ul>
    </aside>
  );
}
