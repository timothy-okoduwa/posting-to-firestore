import React, { useState, useEffect } from "react";

const GenRand = () => {
  const [rand, setRand] = useState(0);
  const getRand = (min, max) => {
    const res = Math.floor(Math.random() * (max - min + 1)) + min;
    setRand(res);
  };
  const getmyrand = () => {
    getRand(3, 15);
  };
  useEffect(() => {
    setInterval(() => {
      getmyrand();
    }, 2000);
  }, []);
  return (
    <div>
      <div>hiii</div>
      <button
        onClick={() => {
          getRand(3, 15);
        }}
      >
        check
      </button>
      <div> {rand} </div>
    </div>
  );
};

export default GenRand;
