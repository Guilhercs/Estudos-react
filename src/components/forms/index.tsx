import React from "react";
import Button from "../button";
import formsStyle from "./forms-style.module.scss";
import { ITodos } from "../../types/todos";
import { v4 as uuidv4 } from "uuid";

export default class Formulario extends React.Component<{
  setTodos: React.Dispatch<React.SetStateAction<ITodos[]>>;
}> {
  state = {
    todo: "",
    time: "00:00",
  };

  addTodo(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    this.props.setTodos((oldTodos) => [
      ...oldTodos,
      { ...this.state, selected: false, complete: false, id: uuidv4() },
    ]);
    this.setState({
      todo: "",
      timer: "00:00",
    });
  }
  render() {
    return (
      <form
        className={formsStyle.novaTarefa}
        onSubmit={this.addTodo.bind(this)}
      >
        <div className={formsStyle.inputContainer}>
          <label htmlFor="tarefa">Todo: </label>
          <input
            type="text"
            name="tarefa"
            id="tarefa"
            value={this.state.todo}
            onChange={(event) =>
              this.setState({ ...this.state, todo: event.target.value })
            }
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
            value={this.state.time}
            onChange={(event) =>
              this.setState({ ...this.state, time: event.target.value })
            }
            id="tempo"
            min="00:00:00"
            max="01:30:00"
            required
          />
        </div>
        <Button>
          <p>Add Todo</p>
        </Button>
      </form>
    );
  }
}
