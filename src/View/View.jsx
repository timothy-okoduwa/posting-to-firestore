// import Avatar from "antd/lib/avatar/avatar";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
import React from "react";
import styled from "styled-components";
import img from "./Timothy.jpg";
import vid from "./Vision.mp4";
import A from "./ava.JPG";
// import { DialogContent } from "@material-ui/core";

const View = () => {
  return (
    <Container>
      <Wraper>
        <Media>
          <Image src={img} />
          <Video src={vid} loop={true} muted autoPlay />
        </Media>
        <Content>
          <Avatar src={A} />
          <div>
            <Titleholder>
              <Title>this is the title</Title>
              <Icon />
            </Titleholder>
          </div>
        </Content>
        <Discriptionholder>
          <Discriptionrow>
            <Discription>hekkko</Discription>

            <span>
              <Row>view</Row>
              {/* <Row>
              <FiberManualRecordIcon />
            </Row> */}
            </span>
            <Row>time</Row>
          </Discriptionrow>
        </Discriptionholder>
      </Wraper>
    </Container>
  );
};

export default View;
const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding-top: 10px;
`;
const Wraper = styled.div``;
const Media = styled.div`
  margin-top: 60px;
  width: 300px;
  height: 400px;
  background-color: red;
  display: flex;
  flex-direction: column;
`;
const Image = styled.img`
  width: 300px;
  height: 400px;
  object-fit: cover;
  position: relative;
`;
const Video = styled.video`
  width: 300px;
  height: 400px;
  position: absolute;
  object-fit: cover;
  opacity: 0;
  transition: all 350ms;
  &:hover {
    opacity: 1;
  }
`;
const Content = styled.div`
  display: flex;
  margin-top: 5px;
  /* flex-direction: column; */
  /* margin-left: 30px; */
  border: 1px solid black;
`;
const Avatar = styled.img`
  height: 50px;
  width: 50px;
  border-radius: 25px;
`;
const Titleholder = styled.div`
  display: flex;
  flex-direction: row;
`;
const Title = styled.div`
  margin-left: 20px;
  text-transform: uppercase;
  font-weight: bold;
`;
const Icon = styled(MoreVertIcon)`
  color: purple;
  display: flex;
  flex: 1;
  margin-left: 90px;
  &:hover {
    color: purple;
    opacity: 1;
  }
`;
const Discriptionholder = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  /* margin-top: 30px; */
  border: 1px solid black;
`;
const Discription = styled.div`
  display: flex;
  flex-direction: row;
`;
const Discriptionrow = styled.div`
  span {
    display: flex;
    /* flex-direction: row; */
    justify-content: space-between;
  }
`;
const Row = styled.div``;
