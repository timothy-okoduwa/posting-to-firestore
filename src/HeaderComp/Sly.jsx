import React, { useContext } from "react";
import styled from "styled-components";
import { AiFillHome } from "react-icons/ai";
import { AiOutlineMenuUnfold } from "react-icons/ai";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { GoGraph } from "react-icons/go";
import { BsNewspaper } from "react-icons/bs";
import { CloseOutlined } from "@ant-design/icons";
const Sly = ({ isOpen, toggle }) => {
  return (
    <>
      <Container isOpen={isOpen}>
        <Warpper>
          <Close>
            {" "}
            <CloseOutlined onClick={toggle} />
          </Close>
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
        </Warpper>
      </Container>
    </>
  );
};

export default Sly;
const Container = styled.div`
  @media screen and (min-width: 768px) {
    /* color: red;
    display: flex;
    justify-content: center; */
    display: none;
  }
  position: fixed;
  align-items: center;
  background-color: #645d5dbb;
  z-index: 9999;
  display: flex;
  justify-content: flex-end;
  transition: 0.4s ease-in-out;
  opacity: ${({ isOpen }) => (isOpen ? "100%" : "0")};
  top: ${({ isOpen }) => (isOpen ? "0" : "-100%")};
`;
const Warpper = styled.div`
  height: 350px;
  width: 250px;
  background: linear-gradient( 115deg,  #8dd6e6,
      #96a3a7,
      #5d95ba,
      #b663a4,
      #8150a2);
  /* background: red; */
  border-radius: 0px 0px 10px 0px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: -28px;
  color:red;
  margin-right: -19px;
 position: sticky;
 z-index: -1000;
  a {
    font-size: 20px;
    margin: 15px;
    margin-left: -58px;
    color: white;
    text-transform: uppercase;
    &:hover {
      color: #6a00ff;
    }
    span {
      font-weight: bold;
      text-transform: uppercase;
      font-size: 13px;
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
`;
const Close = styled.div`
  color: white;
  font-size: 20px;

  margin-left: 170px;
  &:hover {
    color: purple;
  }
`;
