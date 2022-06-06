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
  // s_second

  // s_first
  return (
    <div>
      {props.list.map((element, index) => (
        <Card key={index}>
          <SpaceBetween>
            <Statment>
              <Word>{element.s_first}</Word>
              <Word> _ _ _</Word>
              <Word>{element.s_second}</Word>
            </Statment>
            <Statment>
              <ButtonBackground>
                <Links to={`/${element.id}/view`}>
                  <Run />
                </Links>
              </ButtonBackground>{" "}
              <ButtonBackground>
                <Links to={`/${element.id}`}>
                  <ViewIcon />
                </Links>{" "}
              </ButtonBackground>
              <ButtonBackground>
                <Links to={`/${element.id}/list`}>
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
