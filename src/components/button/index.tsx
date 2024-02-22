import React from "react";
import buttonStyle from "./button.module.scss";

export default class Button extends React.Component {
  render() {
    return <button className={buttonStyle.button}>Clique aqui</button>;
  }
}
