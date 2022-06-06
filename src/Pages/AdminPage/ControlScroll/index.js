import React, { useEffect, useState } from "react";
import ListItem from "./listItem";
import Loading from "../../../Components/Loading/loading";
import { useParams } from "react-router";
import axios from "axios";

const Index = () => {
  const { id } = useParams();

  const [list, setList] = useState([]);

  const getData = async () => {
    let url = "http://atalla.info:8923/rest/list";
    await axios(url, {
      method: "GET",
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
      },
    }).then((response) => {
      console.log(response.data);
      setList(response.data);
    });

    // setList(data);
  };
  useEffect(() => {
    getData();
  }, []);

  return <div>{list.length > 0 ? <ListItem list={list} /> : <Loading />}</div>;
};

export default Index;
