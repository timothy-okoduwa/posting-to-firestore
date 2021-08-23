import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import t from "./t.jpg";
const Nav = () => {
  return (
    <Head>
      <Holder>
        <Link to="/Home">
          <span>HOME</span>
        </Link>
        <Link to="/Sign">
          <span>SIGN UP</span>
        </Link>
        <Link to="/">
          <span>INPUT</span>
        </Link>
        <Link to="/View">
          <span>VIEW</span>
        </Link>
        <Link to="/Ddetail">
          <span>DETAIL</span>
        </Link>
        <Avatar>
          <Image src={t} />
        </Avatar>
      </Holder>
    </Head>
  );
};

export default Nav;
const Head = styled.div`
  height: 50px;
  weight: 100vw;
  background-color: black;
`;
const Holder = styled.div`
  color: white;
  display: flex;
  justify-content: space-around;

  span {
    margin-top: 10px;
    font-size: large;
    text-transform: capitalize;
    cursor: pointer;
    text-decoration: underline;
    color: white;
    &:hover {
      color: purple;
    }
  }
`;
const Avatar = styled.div`
  height: 40px;
  width: 40px;
  background-color: red;
  display: flex;
  align-items: center;
  border-radius: 20px;
  margin: 5px;
`;
const Image = styled.img`
  height: 40px;
  width: 40px;
  border-radius: 20px;
  object-fit: cover;
`;
