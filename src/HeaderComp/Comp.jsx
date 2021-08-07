import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { AiFillHome } from "react-icons/ai";
import { AiOutlineDoubleLeft } from "react-icons/ai";
import { AiOutlineDoubleRight } from "react-icons/ai";
import { AiOutlineMenuUnfold } from "react-icons/ai";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { GoGraph } from "react-icons/go";
import { BsNewspaper } from "react-icons/bs";
// import t from "./tim.JPG";
import t from "./to.png";
import "./slider.css";
import Sly from "./Sly";

const Comp = ({ toggle }) => {
  return (
    <Component>
      <Imageholder>
        <img src={t} />
      </Imageholder>
      <Wrapper>
        <a>
          <AiFillHome />
          <span>Home</span>
        </a>
        <a>
          <BsFillPersonLinesFill />
          <span>About</span>
        </a>
        <a>
          <BsNewspaper />
          <span>Contact</span>
        </a>
        <a>
          <GoGraph />
          <span>Project</span>
        </a>
      </Wrapper>{" "}
      <Left>
        {" "}
        <AiOutlineDoubleLeft />
        <Name>Timothy Okoduwa</Name>
        <AiOutlineDoubleRight />
      </Left>
      <AiOutlineMenuUnfold onClick={toggle} className="slider" />
    </Component>
  );
};

export default Comp;
const Component = styled.div`
  width: 100vw;
  height: 70px;
  /* background: linear-gradient(250deg, #f107a3, #7b2ff7); */

  background: rgba(255, 255, 255, 0.25);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  //border-radius: 100px;
  border: 1px solid rgba(255, 255, 255, 0.18);

  display: flex;
  align-items: center;
  position: fixed;
  @media screen and (max-width: 768px) {
    display: flex;
    width: 100vw;
    justify-content: space-between;
  }
`;
const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  margin:300px;
  a {
    display: flex;
    align-items: center;
    height: 100%;
    position: relative;
    margin-left: 40px;
    color: #d0cbcb;

    &:hover {
      color: white;
    }
    span {
      font-weight: bold;
      text-transform: uppercase;
      font-size: 11px;
      letter-spacing: 1.1px;
      position: relative;
      &:after {
        height: 3px;
        background-color:white;
        content: "";
        position: absolute;
       
        right: 0;
        left: 20px;
        bottom: 20px;
        opacity: 0;
        transform:scaleX(1)
        transform-origin: center left;
      transition: all 350ms cubic-bezier(0.34, 0.44, 0.96, 0.47) 0s;
      }
    }
    &:hover{
      span{
        opacity:1;
      }
      span:after{
        opacity: 1;
      transform: scaleX(1.06)
      }
    }
  }
@media screen and (max-width :768px ){
  display:none;
}
`;
const Imageholder = styled.div`
  height: 50px;
  width: 50px;

  margin-left: 20px;
  border-radius: 25px;

  img {
    margin-top: 10px;
    height: 40px;
    width: 80px;
    border-radius: 25px;
    object-fit: contain;
  }
`;
const Left = styled.div`
  display: flex;
  flex-direction: row;
  color: black;
  font-size: 25px;
  height: 100%;
  margin-top: 60px;
  margin-left: -20px;
  cursor: pointer;
  &:hover {
    color: white;
  }
`;
const Name = styled.div`
  font-size: 10px;
  color: white;
  font-weight: bold;
  cursor: pointer;
  text-transform: uppercase;
  padding-top: 4px;
  &:hover {
    color: #000000;
  }
`;
