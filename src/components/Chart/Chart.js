import React from "react";
import Card from "../UI/Card";
import "./Chart.css";
import ChartBar from "./ChartBar";

const Chart = (props) => {
  const amounts = props.dataPoints.map(dataPoint => (dataPoint.value));
  const total = amounts.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

  return (
    <Card className="chart">
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          total={total}
          label={dataPoint.label}
        />
      ))}
    </Card>
  );
};

export default Chart;
