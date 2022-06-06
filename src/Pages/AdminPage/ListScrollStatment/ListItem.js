import React from "react";
import { Statment, Word } from "./style";

const ListItem = (props) => {
  return (
    <div>
      {props.list &&
        props.list.answer_count > 0 &&
        props.list.word.map((element, index) => (
          <Statment key={index}>
            <h3>{index + 1}</h3>
            <Word>{props.list.s_first}</Word>
            <Word>{element.word}</Word>
            <Word>{props.list.s_second}</Word>
          </Statment>
        ))}
    </div>
  );
};

export default ListItem;
