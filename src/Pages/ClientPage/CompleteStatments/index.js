import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  Statment,
  Complete,
  Center,
  Word,
  Space,
  Image,
  Topleft,
  ImgContainer,
} from "./style";
import Imgs from "../../../Components/Icons/Save.png";
import axios from "axios";
import { Loading } from "../../../Components/Loading/loadingStyles";

export default function Index() {
  const [value, setValue] = useState("");
  const [data, setData] = useState("");

  const handleInputChange = (e) => setValue(e.target.value);
  const { id } = useParams();
  const handleAddItem = () => {
    if (!value) {
      toast.error("Please Enter word", {
        position: toast.POSITION.TOP_RIGHT,
      });
      console.log(12)
    } else {
      let url = "http://atalla.info:8923/rest/cmd/";

      axios(url, {
        method: "POST",
        body: {
          cmd: "addword",
          FORM: { sa_word: value, sa_id: id },
        },
      })
        .then((res) => {
          toast.success("Add word Successfully", {
            position: toast.POSITION.TOP_RIGHT,
          });
        })
        .catch((e) => 
        toast.error(e.message, {
          position: toast.POSITION.TOP_RIGHT,
        }))
      ;
    }
    setValue("");
  };
  const getData = async () => {
    await axios(`http://atalla.info:8923/rest/jview/${id}`, {
      method: "GET",
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
      },
    }).then((response) => {
      setData(response.data);
    });
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <Space>
      {data ? (
        <>
          <Center>
            <Statment>
              <Word>{data.s_first}</Word>
              <Word>XXX</Word>
              <Word>{data.s_second}</Word>
            </Statment>

            <Complete
              type={"text"}
              onChange={handleInputChange}
              value={value}
            ></Complete>
          </Center>
          <ImgContainer>
            <Image src={Imgs} onClick={handleAddItem} />
            <Topleft>Save</Topleft>
          </ImgContainer>
          <ToastContainer />

        </>
      ) : (
        <Loading />
      )}
    </Space>
  );
}
