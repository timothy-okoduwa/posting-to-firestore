import React from "react";
import { BsCircle } from "react-icons/bs";
import styled from "styled-components";
import R from "./logo192.png";
import m from "./mongodb.png";
import f from "./firebase.png";
import js from "./jj.jpg";
import "./Project.css";
const Project = () => {
  return (
    <>
      <Container>
        <Exp>
          <span>6 Projects Done and Deployed</span>
          <span>1 year+ Experience</span>
        </Exp>
        <div>🛠Tools i work with👇👇 </div>
        <Circle>
          <BigC>
            <Mongo>
              <img src={m} className="M-logo" />
            </Mongo>
            <Fire>
              {" "}
              <img src={f} className="F-logo" />
            </Fire>
            <Reactimage>
              <img src={R} className="App-logo" />
            </Reactimage>
            <Js>
              {" "}
              <img src={js} className="J-logo" />
            </Js>
          </BigC>
        </Circle>
      </Container>
    </>
  );
};

export default Project;
const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #dfdfdf;
  padding-top: 50px;
  /* display: flex;
  justify-content: center;
  flex-direction: column; */
  div {
    display: flex;
    justify-content: center;
    font-size: 20px;
    color: purple;
  }
`;
const Exp = styled.div`
  display: flex;
  justify-content: center;

  span {
    margin: 50px;
    font-weight: bolder;
    font-size: 20px;
    color: black;
    @media screen and (max-width: 320px) {
      font-size: 5px;
      font-weight: bolder;
    }
  }
`;
const Circle = styled.div`
  /* height: 100vh; */
  width: 100vw;

  display: flex;
  justify-content: center;
  /* align-items: center; */
`;
const BigC = styled.div`
  height: 320px;
  width: 320px;
  background-color: white;
  margin-top: 40px;
  border-radius: 160px;
  @media screen and (max-width: 320px) {
    height: 250px;
    width: 250px;
    margin: 30px;
  }
`;
const Reactimage = styled.div`
  height: 10vmin;
  margin-top: 130px;
  margin-right: 40px;
  @media screen and (max-width: 320px) {
    margin-top: 110px;
  }
`;
const Mongo = styled.div`
  height: 8vmin;
  margin-top: 150px;
  margin-right: 70px;
  padding-left: 70px;
  @media screen and (max-width: 320px) {
    height: 10vmin;
    padding-left: 100px;
  }
`;
const Fire = styled.div`
  height: 8vmin;
`;
const Js = styled.div`
  height: 5vmin;
  margin-top: 150px;
  margin-left: 70px;
  padding-right: 70px;
  @media screen and (max-width: 320px) {
    height: 8vmin;
    padding-right: 100px;
  }
`;
