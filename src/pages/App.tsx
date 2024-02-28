import React, { useState } from "react";
import Forms from "../components/forms";
import List from "../components/list";
import style from "./app-style.module.scss";
import Timer from "../components/timer";
import { ITodos } from "../types/todos";

function App() {
  const [todos, setTodos] = useState<ITodos[]>([]);
  const [selected, setSelected] = useState<ITodos>();

  function selectTodo(todoSelected: ITodos) {
    setSelected(todoSelected);
    setTodos((oldTodo) =>
      oldTodo.map((todo) => ({
        ...todo,
        selected: todo.id === selected?.id ? true : false,
      }))
    );
  }
  return (
    <div className={style.appStyle}>
      <Forms setTodos={setTodos} />
      <List todos={todos} selectTodo={selectTodo} />
      <Timer selected={selected} />
    </div>
  );
}

export default App;
