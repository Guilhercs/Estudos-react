import React from "react";
import listStyle from "./list-style.module.scss";
import Item from "./item";

export default function List() {
  const tarefas = [
    {
      tarefa: "React",
      tempo: "02:00:00",
    },
    {
      tarefa: "Javascript",
      tempo: "01:00:00",
    },
  ];
  return (
    <aside className={listStyle.listaTarefas}>
      <h2>Estudos do dia</h2>
      <ul>
        {tarefas.map((item, index) => (
          <Item key={index} todo={item.tarefa} timer={item.tempo} />
        ))}
      </ul>
    </aside>
  );
}
