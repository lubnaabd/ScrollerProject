import styled from "styled-components";
export const Statment = styled.div`
  display: flex;
  justify-content: flex-start;
`;
export const Word = styled.h3`
  padding: 0rem 5rem;
  font-family: "Inter";
  font-style: normal;
  font-weight: 300;
  font-size: 30px;
  line-height: 36px;
  text-align: center;
  @media (max-width: 800px) {
    padding: 1rem;
  }
  color: #000000;
`;
export const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100%;
`;

export const Swipers = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 500px;
`;
export const NavigationButtons = styled.div`
  position: relative;
  display: flex;

  height: 60px;
  margin: 0 auto;
  width: 20%;
  margin-top: 1rem;
  justify-content: space-between;
  z-index: 1000;
`;

export const NavBtn = styled.div`
  background: white;
  padding: 15px;
  margin-bottom: 10px;
  border-radius: 3px;
`;
