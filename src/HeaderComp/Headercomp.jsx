import React, { useState, useEffect } from "react";
import { FaBars, FaMagento } from "react-icons/fa";
// import logo from "../img/and.png";
import { DownOutlined } from "@ant-design/icons";
import { Button } from "antd";
import "./nav.css";
import { MenuOutlined } from "@ant-design/icons";
import styled from "styled-components";
import { CgMenu } from "react-icons/cg";
import { AiFillHome } from "react-icons/ai";
import { AiOutlineMenuUnfold } from "react-icons/ai";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { GoGraph } from "react-icons/go";
import { BsNewspaper } from "react-icons/bs";
import { AiOutlineSearch } from "react-icons/ai";
import { Input } from "antd";
import "antd/dist/antd.css";
import t from "./tim.JPG";
// import Link from "react-scroll";

const Headercomp = ({ toggle }) => {
  return (
    <>
      <Container>
        {/* <Link to="/"> */}
        <Imholder>
          <img src={t} />
        </Imholder>
        {/* </Link> */}

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
            <GoGraph />
            <span>Project</span>
          </a>

          <a>
            <BsNewspaper />
            <span>Contact</span>
          </a>
          {/* <Input
            style={{ height: "30px", marginLeft: "30px" }}
            placeholder="Search"
            prefix={<AiOutlineSearch />}
          /> */}
        </Wrapper>

        <UserButton>
          <Button>timothy</Button>
        </UserButton>

        <AiOutlineMenuUnfold onClick={toggle} className="menu-sider" />
      </Container>
    </>
  );
};

export default Headercomp;
const UserButton = styled.div`
  display: flex;
  margin: 10px;
  align-items: center;
  margin-right: 100px;

  @media screen and (max-width: 768px) {
    display: none;
  }

  Button {
    background-color: #0e3bf2;
    color: white;
    width: 120px;
    height: 40px;
    border-radius: 5px;
  }
`;

const SubUser = styled.div`
  display: flex;
  height: 100px;
  justify-content: space-between;
  align-items: center;
  padding: 0px 30px;

  img {
    width: 50px;
    height: 50px;
    border-radius: 25px;
    object-fit: cover;
    border: 2px solid white;
  }

  span {
    font-size: 15px;
    font-weight: bold;
  }
`;

const SubMenu = styled.div`
  display: none;

  @media screen and (max-width: 786px) {
    width: 250px;
    height: 60%;
    background-color: #090b13;
    float: right;
    border-radius: 0 0 0px 10px;
    display: flex;
    flex-direction: column;
    padding-left: 20px;

    a {
      width: 100%;
      height: 40px;
      display: flex;
      align-items: center;
      margin-top: 30px;

      img {
        width: 30px;
        height: 30px;
        object-fit: 15px;
        opacity: 0.4;
        transition: all 350ms;
      }

      span {
        margin-left: 30px;
        text-transform: uppercase;
        font-weight: bold;
        color: rgba(249, 249, 249, 0.6);
      }

      &:hover {
        cursor: pointer;
        span {
          color: white;
        }
        img {
          opacity: 1;
        }
      }
    }
  }
`;

const Menu = styled(AiOutlineMenuUnfold)`
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
    font-size: 30px;
    padding-right: 30px;
    cursor: pointer;
    color: white;
    background-color: red;
  }
`;

const Container = styled.div`
  width: 100vw;
  height: 70px;
  background-color: purple;
  display: flex;
  align-items: center;

  justify-content: space-between;
  color: white;

  @media screen and (max-width: 768px) {
    display: flex;
    width: 100vw;
    justify-content: space-between;
  }
`;

const Logo = styled.div`
  width: 50px;
  height: 50px;
  object-fit: contain;
  cursor: pointer;
  margin-left: 30px;
  background: #76beda;
  border-radius: 50px;
  display: flex;
`;
const Wrapper = styled.div`
display: flex;
align-items: center;
height: 100%; 
cursor: pointer;
margin-left: 20px;
justify-content: center;
color : white;

/* flex: 1; */


a{
  display: flex;
  align-items: center;
  height: 100%; 
  position: relative;
  margin-left: 20px;
  color : white;

  img{
    width: 20px;
    height: 20px;
    object-fit: cover;
    
  }

  span{
    font-weight: bold;
    text-transform: uppercase;
    font-size: 11px;
    letter-spacing: 1.1px;
    position: relative;
    opacity: 0.6;


    &:after{
      content:"";
      position: absolute;
      height: 2px;
      background-color: #0E3BF2;
      right: 0;
      left: 20px;
      bottom: 20px;
      opacity: 0;
      transform: scaleX(1);
      transform-origin: center left;
      transition: all 350ms cubic-bezier(0.34, 0.44, 0.96, 0.47) 0s;
    }
  }

  &:hover{
    span{
      opacity: 1;
    }
    span:after {
      opacity: 1;
      transform: scaleX(1.06)
    }
  }
}

@media screen and (max-width: 768px){
  display: none;
}
`;
const Imholder = styled.div`
  height: 50px;
  width: 50px;
  margin-left: 20px;
  background-color: red;
  border-radius: 25px;
  object-fit: contain;
  img {
    height: 50px;
    width: 50px;
    border-radius: 25px;
    object-fit: cover;
    /* transition: all 350ms cubic-bezier(0.34, 0.44, 0.96, 0.47) 0s;
    transform: scaleX(1); */
  }
`;
