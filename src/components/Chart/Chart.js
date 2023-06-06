import Card from "../UI/Card";
import "./Chart.css";
import ChartBar from "./ChartBar";

const Chart = () => {
  return (
    <Card className="chart">
        <ChartBar month={month} />
    </Card>
  );
};

export default Chart;
