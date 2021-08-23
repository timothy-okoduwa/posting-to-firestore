import React, { useState } from "react";
import styled from "styled-components";
import { Bar } from "react-chartjs-2";
import { Button } from "antd";

const Chart = () => {
  const [changeno, setChangeno] = useState(0);
  const [changeyes, setChangeyes] = useState(0);
  const addyes = () => {
    setChangeyes(changeyes + 1);
  };
  const addno = () => {
    setChangeno(changeno + 1);
  };

  const options = {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: false,
          },
        },
      ],
    },
  };
  return (
    <Container>
      <Bar
        data={{
          labels: ["APC", "PDP"],
          datasets: [
            {
              label: "Election Performance",
              data: [changeno, changeyes],
              backgroundColor: [
                "rgba(255, 99, 132, 0.2)",
                "rgba(54, 162, 235, 0.2)",
              ],
              borderColor: ["rgba(255, 99, 132, 1)", "rgba(54, 162, 235, 1)"],
              borderWidth: 1,
            },
          ],
        }}
        options={options}
        width={900}
      />
      <span>
        {" "}
        <Button type="primary" danger onClick={addno}>
          click
        </Button>
        <Button type="primary" onClick={addyes}>
          click
        </Button>
      </span>
    </Container>
  );
};

export default Chart;
const Container = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: black;
  color: white;
  span {
    justify-content: space-around;
    display: flex;
  }
`;
