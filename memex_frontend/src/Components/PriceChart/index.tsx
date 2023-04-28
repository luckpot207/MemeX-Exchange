import React, { useEffect, useState } from "react";
import { IgrFinancialChart } from "igniteui-react-charts";
import { IgrFinancialChartModule } from "igniteui-react-charts";
import { StocksUtility } from "./StocksUtility";
import "./index.css";

IgrFinancialChartModule.register();

const PriceChart = () => {
  const [data, setData] = useState();

  useEffect(() => {
    initData();
  }, []);

  const initData = () => {
    const today = new Date();
    const year = today.getFullYear();
    const month = today.getMonth();
    const dateEnd = new Date(year, month, 1);
    const dateStart = new Date(year - 1, month, 1);

    setData(StocksUtility.GetStocksBetween(dateStart, dateEnd));
  };

  return (
    <IgrFinancialChart
      width="100%"
      height="100%"
      chartType="Candle"
      isToolbarVisible={false}
      zoomSliderType="Candle"
      volumeType="Area"
      overlayBrushes="rgba(5, 138, 0, 0.17)"
      overlayOutlines="rgba(5, 138, 0, 0.4)"
      overlayThickness={1}
      dataSource={data}
    />
  );
};

export default PriceChart;
