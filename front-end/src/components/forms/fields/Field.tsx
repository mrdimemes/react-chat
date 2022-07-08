import React, { ChangeEvent } from "react";
import classNames from "classnames";
import { FieldProps, FieldState } from "./types";

class Field extends React.Component<FieldProps, FieldState> {
  constructor(props: FieldProps) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }
  state: FieldState = {
    value: ""
  }
  handleChange(event: ChangeEvent<HTMLInputElement>) {
    this.setState({ value: event.target.value })
  }
  render() {
    return (
      <input
        className={classNames(
          "form__field",
          { [`${this.props.parentClass}__field`]: this.props.parentClass }
        )}
        type={this.props.type}
        placeholder={this.props.placeholder}
        onChange={this.handleChange}
        value={this.state.value}
        maxLength={this.props.maxLength}
        required={this.props.isRequired}
      />
    )
  };
}

export default Field;