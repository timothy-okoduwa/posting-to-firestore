import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Button, Input } from "antd";
import firebase from "firebase";
import app from "../Base";
import moment from "moment";
const Tnput = () => {
  const [myimage, setMyimage] = useState("");
  const [myavatar, setMyAvatar] = useState("");
  const [myvideo, setMyVideo] = useState("");
  const [myname, setMyName] = useState("");
  const [mytitle, setMyTitle] = useState("");
  const [myview, setMyView] = useState("");
  const [mydescription, setMyDescription] = useState("");
  const [show, setShow] = useState(0);

  const getpost = async () => {
    await app.firestore().collection("youtube").doc().set({
      image: myimage,
      avatar: myavatar,
      video: myvideo,
      name: myname,
      title: mytitle,
      view: myview,
      description: mydescription,
      time: firebase.firestore.FieldValue.serverTimestamp(),
    });
    setMyDescription("");
    setMyName("");
    setMyTitle("");
    setMyView("");
  };

  const uploadimage = async (e) => {
    const file = e.target.files[0];
    const fileref = app.storage().ref();
    const storageref = fileref.child(file.name);
    await storageref
      .put(file)
      .then(() => {
        console.log("completed");
      })
      .catch((err) => console.log(err.message));
    setMyimage(await storageref.getDownloadURL());
  };

  const monitorProgressAvatar = async (e) => {
    const file = e.target.files[0];
    const storageRef = app.storage().ref();

    const uploadTask = storageRef.child("avatar/" + file.name).put(file);

    uploadTask.on(
      firebase.storage.TaskEvent.STATE_CHANGED, // or 'state_changed'
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setShow(progress);
        console.log("Upload for Avatar is " + progress + "% done");
      },

      () => {
        // Upload completed successfully, now we can get the download URL
        uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
          console.log("File available at", downloadURL);
          setMyAvatar(downloadURL);
        });
      }
    );
  };

  const monitorProgressImage = async (e) => {
    const file = e.target.files[0];
    const storageRef = app.storage().ref();

    const uploadTask = storageRef.child("images/" + file.name).put(file);

    uploadTask.on(
      firebase.storage.TaskEvent.STATE_CHANGED, // or 'state_changed'
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setShow(progress);
        console.log("Upload for Image is " + progress + "% done");
      },

      () => {
        // Upload completed successfully, now we can get the download URL
        uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
          console.log("File available at", downloadURL);
          setMyimage(downloadURL);
        });
      }
    );
  };

  const monitorProgressVideo = async (e) => {
    const file = e.target.files[0];
    const storageRef = app.storage().ref();

    const uploadTask = storageRef.child("video/" + file.name).put(file);

    uploadTask.on(
      firebase.storage.TaskEvent.STATE_CHANGED, // or 'state_changed'
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setShow(progress);
        console.log("Upload for Video is " + progress + "% done");
      },

      () => {
        // Upload completed successfully, now we can get the download URL
        uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
          console.log("File available at", downloadURL);
          setMyVideo(downloadURL);
        });
      }
    );
  };
  useEffect(() => {
    // uploadImage()
  }, []);
  return (
    <>
      <Compp>
        <h3>{`${Math.floor(show)}%`}</h3>
        <div>
          <Input
            placeholder="image"
            type="file"
            onChange={monitorProgressImage}
          />
          <Input
            placeholder="avatar"
            type="file"
            onChange={monitorProgressAvatar}
          />
          <Input
            placeholder="video"
            type="file"
            onChange={monitorProgressVideo}
          />
          <Input placeholder="name" type="text" onChange={(e) => {}} />
          <Input
            placeholder="title"
            type="text"
            value={mytitle}
            onChange={(e) => {
              setMyTitle(e.target.value);
            }}
          />
          <Input
            placeholder="description"
            type="text"
            value={mydescription}
            onChange={(e) => {
              setMyDescription(e.target.value);
            }}
          />
          <Input
            placeholder="view"
            type="text"
            value={myview}
            onChange={(e) => {
              setMyView(e.target.value);
            }}
          />
        </div>
        <Button danger type="primary" onClick={getpost}>
          send
        </Button>
      </Compp>
    </>
  );
};

export default Tnput;
const Compp = styled.div`
  div {
    width: 300px;
    margin: 30px;
  }
  Button {
    margin-left: 30px;
  }
`;
