import React from "react";
import Forms from "../components/forms";
import List from "../components/list";
import style from "./app-style.module.scss";
import Timer from "../components/timer";

function App() {
  return (
    <div className={style.appStyle}>
      <Forms />
      <List />
      <Timer />
    </div>
  );
}

export default App;
