import styled from "styled-components";
export const Statment = styled.div`
  display: flex;
  justify-content: flex-start;
  line-height: 1.6;
`;
export const Word = styled.h1`
  padding: 0rem 6rem;

  font-family: "Inter";
  font-style: normal;
`;

export const Complete = styled.input`
  border: 0;
  outline: 0;
  background: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 2px solid black;
  text-align: center;
  font-size: 2rem;
  width: 22%;
  align-self: center;
`;

export const Center = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  justify-content: flex-start;
`;

export const Space = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 500px;
`;

export const Image = styled.img`
  cursor: pointer;
`;
export const ImgContainer = styled.div`
   {
    cursor: pointer;

    position: relative;
  }
`;

export const Topleft = styled.div`
   {
    font-size: 20px;
    position: absolute;
    bottom: 57px;
    left: 41px;
  }
`;
