import React, { useState } from "react";
import Forms from "../components/forms";
import List from "../components/list";
import style from "./app-style.module.scss";
import Timer from "../components/timer";
import { ITodos } from "../types/todos";

function App() {
  const [todos, setTodos] = useState<ITodos[]>([]);
  return (
    <div className={style.appStyle}>
      <Forms setTodos={setTodos} />
      <List todos={todos} />
      <Timer />
    </div>
  );
}

export default App;
