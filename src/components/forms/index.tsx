import React from "react";
import Button from "../button";
import formsStyle from "./forms-style.module.scss";

export default class Formulario extends React.Component {
  render() {
    return (
      <form className={formsStyle.novaTarefa}>
        <div className={formsStyle.inputContainer}>
          <label htmlFor="tarefa">Todo: </label>
          <input
            type="text"
            name="tarefa"
            id="tarefa"
            placeholder="Drink Wather"
            required
          />
        </div>
        <div className={formsStyle.inputContainer}>
          <label
            htmlFor="tempo
          "
          ></label>
          <input
            type="time"
            step="1"
            name="tempo"
            id="tempo"
            min="00:00:00"
            max="01:30:00"
            required
          />
        </div>
        <Button />
      </form>
    );
  }
}
