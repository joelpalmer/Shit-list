import React, { Component } from "react";
import ReactDOM from "react-dom";

export default class ShitListItem extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let shitVect = [];
    for (let i = 0; i < this.props.rating; i++) {
      shitVect.push(<span>💩</span>);
    }
    return (
      <tr>
        <td>{this.props.name}</td>
        <td>{shitVect}</td>
      </tr>
    );
  }
}
