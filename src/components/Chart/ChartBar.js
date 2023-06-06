import "./ChartBar.css";

const ChartBar = (props) => {
  return (
    <div className="chart-bar">
      <div className="chart-bar__inner">
        <div className="chart-bar__fill"></div>
      </div>
      <label className="chart-bar__label">{props.month}</label>
    </div>
  );
};

export default ChartBar;
