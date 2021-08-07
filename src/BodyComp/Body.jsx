import { useState } from "react";
import { motion, motionValue } from "framer-motion";
import styled from "styled-components";
import "./Body.css";
import all from "./alright.png";
// import all from "./timo.png";
const Body = () => {
  return (
    <Container>
      <Main>
        {/* <Holder1>content</Holder1> */}
        <Circle>
          <img src={all} />
          {/* <Circle> </> */}
        </Circle>
        <Holder3>
          <Intro>
            <a>Introduction</a>
            <span>Front end web Developer.</span>
            <span>Content Creator.</span>
            <span>Graphic Designer.</span>
            <div>
              iam A young Web developer who is dedicated in the career path{" "}
              <br />
              of programming to build web applications <br />
              and translate code into user-friendly applications.
            </div>
          </Intro>
        </Holder3>
      </Main>
    </Container>
  );
};

export default Body;
const Container = styled.div`
  height: 800px;
  width: 100vw;

   {
    background: linear-gradient(
      295deg,
      #00d0ff,
      #daeaee,
      #0c99f9,
      #f90cc6,
      #94231d
    );
    background-size: 1000% 1000%;

    -webkit-animation: AnimationName 18s ease infinite;
    -moz-animation: AnimationName 18s ease infinite;
    -o-animation: AnimationName 18s ease infinite;
    animation: AnimationName 18s ease infinite;
  }

  @-webkit-keyframes AnimationName {
    0% {
      background-position: 0% 15%;
    }
    50% {
      background-position: 100% 86%;
    }
    100% {
      background-position: 0% 15%;
    }
  }
  @-moz-keyframes AnimationName {
    0% {
      background-position: 0% 15%;
    }
    50% {
      background-position: 100% 86%;
    }
    100% {
      background-position: 0% 15%;
    }
  }
  @-o-keyframes AnimationName {
    0% {
      background-position: 0% 15%;
    }
    50% {
      background-position: 100% 86%;
    }
    100% {
      background-position: 0% 15%;
    }
  }
  @keyframes AnimationName {
    0% {
      background-position: 0% 15%;
    }
    50% {
      background-position: 100% 86%;
    }
    100% {
      background-position: 0% 15%;
    }
  }
  display: flex;
  flex-wrap: wrap;
`;
const Main = styled.div`
  height: 500px;
  width: 100vw;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  flex-wrap: wrap;
`;
const Holder1 = styled.div`
  height: 500px;
  width: 300px;
  background-color: red;
`;
const Holder2 = styled.div`
  height: 500px;
  width: 300px;
  background-color: pink;
`;
const Holder3 = styled.div`
  /* height: 500px;
  width: 300px;
  background-color: green; */
  margin-top: 180px;
`;
const Circle = styled.div`
  height: 200px;
  width: 200px;
  border-radius: 100px;
  background: rgba(255, 255, 255, 0.25);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);#
  backdrop-filter: blur(4px);

  margin-right: 90px;
  margin-left: 70px;
  margin-top: 100px;
  /* z-index: -10000000; */

  img {
    margin-left: -60px;
    margin-top: 15px;
  }
`;
const Intro = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 33px;
  a {
    color: white;
    font-size: 15px;
    text-transform: uppercase;
    font-weight: bold;
    cursor: none;
  }
  span {
    font-size: 30px;
    font-weight: bolder;
  }
`;
