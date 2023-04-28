import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const labels = ["January", "February", "March", "April", "May", "June", "July"];

export const data = {
  labels,
  datasets: [
    {
      label: "",
      pointBorderWidth: 0,
      pointHoverRadius: 0,
      data: [3200, 100, -2400, 223, 1900, 112, -503],
      borderColor: "#25A1FF",
      backgroundColor: "rgba(255, 99, 132, 0.5)",
      lineTension: 1,
    },
  ],
};

const SplineChart = () => {
  return (
    <Line
      options={{
        animation: false,
        responsive: true,
        elements: {
          point: {
            radius: 0,
          },
        },
        plugins: {
          legend: { display: false },
          tooltip: { enabled: true, mode: "nearest" },
        },
        scales: {
          // to remove the labels
          x: {
            ticks: {
              display: false,
            },

            // to remove the x-axis grid
            grid: {
              display: false,
            },
          },
          // to remove the y-axis labels
          y: {
            ticks: {
              display: false,
            },
            // to remove the y-axis grid
            grid: {
              display: false,
            },
          },
        },
      }}
      data={data}
    />
  );
};

export default SplineChart;
