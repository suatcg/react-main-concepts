import React from "react";
import ListItem from "./ListItem";

function NumberList(props) {
  const numbers = props.numbers;
  const listItems = numbers.map((number) => (
    // Correct! Key should be specified inside the array.
    <ListItem key={number.toString()} value={number} />
  ));
  return <ul> {listItems}</ul>;
}
export default NumberList;