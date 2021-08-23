import React, { useState } from "react";
import styled from "styled-components";
import { Input, Button } from "antd";
import TextArea from "antd/lib/input/TextArea";
import app from "../Base";
import firebase from "firebase";

const Inputss = () => {
  //setting the states for our collection we want to push to our fireBase
  const [profile, setProfile] = useState("");
  const [imagepix, setImagepix] = useState("");
  const [video, setVideo] = useState("");
  const [name, setName] = useState("");
  const [title, setTitle] = useState("");
  const [discription, setDiscription] = useState("");

// setting the state for the media files (video,image,avtar)
  const [showi , setShowi]= useState(0)
  const [showp , setShowp]= useState(0)
  const [showv , setShowv]= useState(0)
//writing the uploadProfile function 
const putProfile = async(e)=>{
  const file = e.target.files[0] 
  const fileRef = await app.storage().fileRef()
  const storageRef = fileRef.child('profile/'+file.name).put(file)

  storageRef.on(firebase.storage.taskEvent.STATE_CHANGED,(snapshot)=>{
    const uploadedByte = (snapshot.byteTreansferred/snapshot.totalBytes)*100
    console.log(`${Math.round(uploadedByte)}%`)
    setShowp(Math.round(uploadedByte))
  })
}

  return (
    <Container>
      <Holder>
        <Image placeholder="Image" type="file" />

        <Profilepix placeholder="Avatar" type="file" />

        <Video placeholder="Video" type="file" />

        <Name placeholder="Name" type="text" />
        <Title placeholder="Title" type="text" />
        <Discription placeholder="Discription" type="text" />
        <Button type="primary" danger>
          Post
        </Button>
      </Holder>
    </Container>
  );
};

export default Inputss;
const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;
const Holder = styled.div`
  display: flex;
  flex-direction: column;
  width: 400px;
  margin: 30px;
`;
const Image = styled(Input)`
  margin: 10px;
`;
const Profilepix = styled(Input)`
  margin: 10px;
`;
const Video = styled(Input)`
  margin: 10px;
`;
const Name = styled(Input)`
  margin: 10px;
`;
const Title = styled(Input)`
  margin: 10px;
`;
const Discription = styled(TextArea)`
  resize: none;
  margin: 10px;
`;
