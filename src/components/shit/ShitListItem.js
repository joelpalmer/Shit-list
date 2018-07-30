import React, { Component } from "react";
import ReactDOM from "react-dom";

export default class ShitListItem extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <tr>
        <td>{this.props.name}</td>
        <td>{this.props.rating}</td>
      </tr>
    );
  }
}
