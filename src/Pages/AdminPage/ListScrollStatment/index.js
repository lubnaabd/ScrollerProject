import React, { useEffect, useState } from "react";
import ListItems from "./ListItem";
import { SpaceBetween, Links, CSVLinks } from "./style";
import axios from "axios";
import Loading from "../../../Components/Loading/loading";
import Back from "../../../Components/Icons/Back";
import CSv from "../../../Components/Icons/CSv";
import { useParams } from "react-router";

const Index = () => {
  const [list, setList] = useState([]);
  const [dataCSV, setdataCSV] = useState([]);

  let data = [];
  const { id } = useParams();
  const getData = async () => {
    await axios(`http://atalla.info:8923/rest/jview/${id}`, {
      method: "GET",
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
      },
    }).then((response) => {
      console.log(response);
      list.answer_count > 0&&list.word.forEach((item) => {
        data.push({
          statment: `${list.s_first} ${item.word} ${list.s_second}`,
        });
      });
      setList(response.data);
      setdataCSV(data);
 
    });
  };
  useEffect(() => {
    getData();

  }, []);
  return (
    <div>
      <SpaceBetween>
        <Links to={"/"}>
          <Back />
          <span>Back</span>
        </Links>
        <CSVLinks data={dataCSV}>
          <span>Csv</span>
          <CSv />
        </CSVLinks>
        ;
      </SpaceBetween>
      {list.answer_count > 0 ? <ListItems list={list} /> : <Loading />}
    </div>
  );
};

export default Index;
