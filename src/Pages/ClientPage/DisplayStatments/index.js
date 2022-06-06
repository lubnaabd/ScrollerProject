import React, { useEffect, useState } from "react";
import ListItems from "./ListItem";
import Loading from "../../../Components/Loading/loading";
import { useParams } from "react-router";
import axios from "axios";

export default function Index(props) {
  const [list, setList] = useState([]);

  const { id } = useParams();
  const getData = async () => {
    await axios(`http://atalla.info:8923/rest/jview/${id}`, {
      method: "GET",
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
      },
    }).then((response) => {
      setList(response.data);
    });
  };
  useEffect(() => {
    getData();
  }, []);

  return <div>{list.answer_count>0 ? <ListItems data={list} /> : <Loading />}</div>;
}
