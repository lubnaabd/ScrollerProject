import React from "react";
import { useParams } from "react-router";
import {
  Word,
  Card,
  Statment,
  SpaceBetween,
  Links,
  ButtonBackground,
} from "./style";
import Run from "../../../Components/Icons/Run";
import ViewIcon from "../../../Components/Icons/view";
import ListIcon from "../../../Components/Icons/ListIcon";
const ListItem = (props) => {
  const { id } = useParams();
  return (
    <div>
      {props.list.map((element, index) => (
        <Card key={index}>
          <SpaceBetween>
            <Statment>
              <Word>{element.word1}</Word>
              <Word> _ _ _</Word>
              <Word>{element.word3}</Word>
            </Statment>
            <Statment>
              <ButtonBackground>
                <Links to={`/1/view`}>
                  <Run />
                </Links>
              </ButtonBackground>{" "}
              <ButtonBackground>
                <Links to={`/1`}>
                  <ViewIcon />
                </Links>{" "}
              </ButtonBackground>
              <ButtonBackground>
                <Links to={`/1/list`}>
                  <ListIcon />
                </Links>
              </ButtonBackground>
            </Statment>
          </SpaceBetween>
        </Card>
      ))}
    </div>
  );
};

export default ListItem;
