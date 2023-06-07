import React from "react";
import "./ChartBar.css";

const ChartBar = (props) => {
  let barFillPercentage = "0%";
  if (props.total > 0) {
    console.log("value : " + props.value + " tip : " + typeof(props.value));
    console.log("total : " + props.total + " tip : " + typeof(props.value));
    console.log(Math.round(props.value / props.total).toFixed(2));
    barFillPercentage =  Math.round(props.value / props.total * 100) + '%';
  }

  console.log(barFillPercentage);
  return (
    <div className="chart-bar">
      <div className="chart-bar__inner">
        <div style={{ height: barFillPercentage }} className="chart-bar__fill" ></div>
      </div>
      <label className="chart-bar__label">{props.label}</label>
    </div>
  );
};

export default ChartBar;
