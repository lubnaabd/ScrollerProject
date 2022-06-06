import React from "react";
import { Statment, Word } from "./style";

const ListItem = (props) => {
  return (
    <div>
      {props.list.map((element, index) => (
        <Statment key={index}>
          <h3>{index + 1}</h3>
          <Word>{element.word1}</Word>
          <Word>{element.word2}</Word>
          <Word>{element.word3}</Word>
        </Statment>
      ))}
    </div>
  );
};

export default ListItem;
