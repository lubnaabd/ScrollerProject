import React, { useState } from "react";
import { useParams } from "react-router";
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

export default function Index() {
  const [value, setValue] = useState("");
  const handleInputChange = (e) => setValue(e.target.value);
  const { id } = useParams();
  const handleAddItem = () => {
    if (!value) return;
    console.log(id);
    console.log(value);

    let url = "http://atalla.info:8923/rest/cmd/";

    // axios(url, {
    //   method: "POST",
    //   body: {
    //     cmd: "addword",
    //     FORM: { sa_word: value, sa_id: id },
    //   },
    // });
    setValue("");
  };
  return (
    <Space>
      <Center>
        <Statment>
          <Word>Marburg</Word>
          <Word>XXX</Word>
          <Word>world</Word>
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
    </Space>
  );
}
