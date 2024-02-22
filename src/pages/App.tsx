import React from "react";
import Forms from "../components/forms";
import List from "../components/list";
import style from "./app-style.module.scss";

function App() {
  return (
    <div className={style.appStyle}>
      <Forms />
      <List />
    </div>
  );
}

export default App;
