import React, { useEffect, useState } from "react";
import ListItems from "./ListItem";
import Loading from "../../../Components/Loading/loading";
import { useParams } from "react-router";
import axios from "axios";

export default function Index() {
  const [list, setList] = useState([
    { word1: "Marburg1", word2: "XXX", word3: "world" },
    { word1: "Marburg2", word2: "XXX", word3: "world" },
    { word1: "Marburg3", word2: "XXX", word3: "world" },
    { word1: "Marburg4", word2: "XXX", word3: "world" },
    { word1: "Marburg5", word2: "XXX", word3: "world" },
    { word1: "Marburg6", word2: "XXX", word3: "world" },
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

  return <div>{list.length > 0 ? <ListItems data={list} /> : <Loading />}</div>;
}
