import React, { useState, useEffect } from "react";
import styled from "styled-components";
import firebase from "firebase";
import app from "../Base";

const Card = () => {
  const [data, setData] = useState([]);
  const [post, setPost] = useState("");

  // const postdata = async()=>{
  //   await app.firestore()
  //   .
  // }

  const getdata = async () => {
    await app
      .firestore()
      .collection("Todotask")
      .onSnapshot((stella) => {
        const item = [];
        stella.forEach((doc) => {
          item.push({ ...doc.data(), id: doc.id });
        });
        setData(item);
        console.log(item);
      });
  };
  useEffect(() => {
    getdata();
  }, []);
  return (
    <Comp>
      <Imp>
        <input />
        <button>click</button>
      </Imp>
      {data.map(({ id, title, done }) => (
        <Content key={id}>
          <Indicator></Indicator>
          <span>{title}</span>
          {/* <span>{done}</span> */}
        </Content>
      ))}
    </Comp>
  );
};

export default Card;
const Comp = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: #da6dda;
`;
const Content = styled.div`
  display: flex;
  justify-content: center;
  height: 200px;
  width: 200px;
  background-color: white;
  flex-direction: column;
`;
const Imp = styled.div``;
const Indicator = styled.div`
  height: 20px;
  width: 100%;
  background-color: #ff0000;
`;
