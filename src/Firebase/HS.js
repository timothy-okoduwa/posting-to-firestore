import React from "react";
import styled from "styled-components";
const HS = () => {
  return (
    <Comp>
      <Wrap>
        <div>home</div>
        <div>add</div>
      </Wrap>
    </Comp>
  );
};

export default HS;
const Comp = styled.div`
  width: 100vw;
  height: 90px;
  background-color: blue;
`;
const Wrap = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  div {
    text-transform: uppercase;
    margin-top: 30px;
    color: white;
    font-weight: bolder;
    font-size: 20px;
  }
`;
