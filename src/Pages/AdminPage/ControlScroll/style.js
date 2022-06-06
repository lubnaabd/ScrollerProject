import { Link } from "react-router-dom";
import styled from "styled-components";
export const Card = styled.div`
  margin: 2rem;
  background: #FFFFFF;
  border: 1px solid #000000;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
`;
export const Word = styled.h3`
  padding: 0rem 1.5rem;
  font-family: "Inter";
  font-style: normal;
`;
export const Statment = styled.div`
  display: flex;
  justify-content: flex-start;
`;

export const SpaceBetween = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const ButtonBackground = styled.div`
  display: flex;
  justify-content: center;
  background: #d9d9d9;
  border-radius: 5px;
  margin: 0.2rem;
  width: 30px;
  height: 30px;
  align-items: center;
`;

export const Links = styled(Link)`
  display: flex;
  text-decoration: none;
  &:hover {
    fill: #0080008c;
  }
`;
