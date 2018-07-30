import React, { Component } from "react";
import ReactDOM from "react-dom";
import ShitListItem from "./ShitListItem";

export default class ShitList extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <ul>
          {this.props.list.map((item, index) => {
            return <ShitListItem key={index} item={item.name} />;
          })}
        </ul>
      </div>
    );
  }
}
