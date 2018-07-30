import React, { Component } from "react";
import ReactDOM from "react-dom";

export default class ShitListItem extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <li>{this.props.item}</li>;
  }
}
