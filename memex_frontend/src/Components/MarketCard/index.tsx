import { RiseOutlined, FallOutlined } from "@ant-design/icons";
import SplineChart from "../SplineChart";
import { commafy } from "../../Common/utils";
import "./index.css";

const MarketCard = (props: IMarketCardProps) => {
  return (
    <div className="marketcard-container">
      <div className="d-flex">
        <div>
          <div className="d-flex align-center">
            <p className="coin_name">{props.name}</p>
          </div>
          <div className="d-flex marketcard-container-price align-center">
            <p className="price">${commafy(props.price)}</p>
            {props.chart ? (
              <div className="d-flex">
                <p className="chart-up">+{props.chartNumber}%</p>
                <RiseOutlined className="chart-up__svg" />
              </div>
            ) : (
              <div className="d-flex">
                <p className="chart-down">-{props.chartNumber}%</p>
                <FallOutlined className="chart-down__svg" />
              </div>
            )}
          </div>
        </div>
        <div className="line-chart">
          <SplineChart />
        </div>
      </div>
    </div>
  );
};

declare interface IMarketCardProps {
  name: string;
  price: number;
  chart: boolean;
  chartNumber: number;
}

export default MarketCard;
