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
        <table className="table">
          <th>Item</th>
          <th>Rating</th>
          <tbody>
            {this.props.list.map((item, index) => {
              return (
                <ShitListItem
                  key={index}
                  name={item.name}
                  rating={item.rating}
                />
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}
