import { Link } from "react-router-dom";
import { CSVLink } from "react-csv";

import styled from "styled-components";
export const Statment = styled.div`
  display: flex;
  justify-content: flex-start;
`;
export const Word = styled.h3`
  padding: 0rem 4rem;
  font-family: "Inter";
  font-style: normal;
`;

export const Links = styled(Link)`
  text-decoration: none;
  margin: 1rem 0rem;
  padding: .2rem 1rem;
  width: 8%;
  color: #000;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #FFFFFF;
  border: 1px solid #000000;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
`;

export const CSVLinks = styled(CSVLink)`
  display: flex;
  text-decoration: none;
  margin: 1rem;
  padding: .2rem 1rem;
  width: 8%;
  color: #000;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #FFFFFF;
  border: 1px solid #000000;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
`;

export const SpaceBetween = styled.div`
  display: flex;
  justify-content: space-between;
`;
