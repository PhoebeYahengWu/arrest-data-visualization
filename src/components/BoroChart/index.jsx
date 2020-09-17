import React from "react";
import { Bar } from "react-chartjs-2";

var colorArray = [
  "#FFB399",
  "#E6B3B3",
  "#6680B3",
  "#FF99E6",
  "#1AB399",
  "#4D8066",
];

const BarChart = (props) => {
  const mappings = {
    B: "Bronx",
    S: "Staten",
    K: "No idea",
    M: "Manhatten",
    Q: "Queeens",
  };
  const obj = {};

  let options = {
    legend: {
      display: false,
    },
    scales: {
      xAxes: [
        {
          gridLines: {
            display: false,
          },
        },
      ],
    },
  };

  props.results.forEach((arrest) => {
    const key = arrest["arrest_boro"];
    if (key)
      if (obj[key]) {
        obj[key] += 1;
      } else {
        obj[key] = 1;
      }
  });

  return (
    <Bar
      data={{
        labels: Object.keys(obj).map((x) => mappings[x]),
        datasets: [
          {
            data: Object.values(obj),
            backgroundColor: colorArray,
          },
        ],
      }}
      options={options}
    />
  );
};

export default BarChart;
