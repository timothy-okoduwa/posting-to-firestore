import React from "react";
import styled from "styled-components";
import { Input, Button } from "antd";
import t from "./t.jpg";
const Sign = () => {
  return (
    <Container>
      <Holder>
        <Put>
          <Name placeholder="Name" type="file" />
          <Email placeholder="Email" type="text" />
          <Password placeholder="password" type="text" />
          <center>
            {" "}
            <Button type="primary" danger>
              Sign in
            </Button>
          </center>
          <div>
            sign in with <a style={{ color: "red" }}>GOOGLE</a>
          </div>
        </Put>
        <br />
        <span>
          Don't have an account <a>SIGN UP</a>{" "}
        </span>
      </Holder>
      <Box src={t} />
    </Container>
  );
};

export default Sign;
const Container = styled.div`
  display: flex;
  flex-direction: row;

  margin: 200px;
`;
const Holder = styled.div``;
const Box = styled.img`
  height: 160px;
  width: 190px;
  object-fit: cover;

  border: 1px solid #55a9de;
  margin: 30px;
`;

const Name = styled(Input)`
  margin: 10px;
`;
const Email = styled(Input)`
  margin: 10px;
`;
const Password = styled(Input)`
  margin: 10px;
`;
const Put = styled.div`
  margin: 10px;
`;
