import React, { useEffect, useState } from "react";
import ListItems from "./ListItem";
import { SpaceBetween, Links, CSVLinks } from "./style";
import axios from "axios";
import Loading from "../../../Components/Loading/loading";
import Back from "../../../Components/Icons/Back";
import CSv from "../../../Components/Icons/CSv";
import { useParams } from "react-router";

const Index = () => {
  const [list, setList] = useState([
    { word1: "Marburg", word2: "XXX", word3: "world" },
    { word1: "Marburg", word2: "XXX", word3: "world" },
    { word1: "Marburg", word2: "XXX", word3: "world" },
    { word1: "Marburg", word2: "XXX", word3: "world" },
    { word1: "Marburg", word2: "XXX", word3: "world" },
    { word1: "Marburg", word2: "XXX", word3: "world" },
    { word1: "Marburg", word2: "XXX", word3: "world" },
    { word1: "Marburg", word2: "XXX", word3: "world" },
    { word1: "Marburg", word2: "XXX", word3: "world" },
    { word1: "Marburg", word2: "XXX", word3: "world" },
    { word1: "Marburg", word2: "XXX", word3: "world" },
    { word1: "Marburg", word2: "XXX", word3: "world" },
    { word1: "Marburg", word2: "XXX", word3: "world" },
    { word1: "Marburg", word2: "XXX", word3: "world" },
    { word1: "Marburg", word2: "XXX", word3: "world" },
    { word1: "Marburg", word2: "XXX", word3: "world" },
    { word1: "Marburg", word2: "XXX", word3: "world" },
    { word1: "Marburg", word2: "XXX", word3: "world" },
    { word1: "Marburg", word2: "XXX", word3: "world" },
    { word1: "Marburg", word2: "XXX", word3: "world" },
    { word1: "Marburg", word2: "XXX", word3: "world" },
    { word1: "Marburg", word2: "XXX", word3: "world" },
    { word1: "Marburg", word2: "XXX", word3: "world" },
    { word1: "Marburg", word2: "XXX", word3: "world" },
    { word1: "Marburg", word2: "XXX", word3: "world" },
    { word1: "Marburg", word2: "XXX", word3: "world" },
    { word1: "Marburg", word2: "XXX", word3: "world" },
    { word1: "Marburg", word2: "XXX", word3: "world" },
  ]);
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
      // setList(r)
    });
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <SpaceBetween>
        <Links to={"/control_scroll"}>
          <Back />
          <span>Back</span>
        </Links>
        <CSVLinks data={list}>
          <span>Csv</span>
          <CSv />
        </CSVLinks>
        ;
      </SpaceBetween>
      {list.length > 0 ? <ListItems list={list} /> : <Loading />}
    </div>
  );
};

export default Index;
