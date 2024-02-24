import React from "react";
import buttonStyle from "./button.module.scss";

export default class Button extends React.Component<{
  children?: React.ReactNode;
}> {
  render() {
    return (
      <button className={buttonStyle.button}>{this.props.children}</button>
    );
  }
}
