import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  scales,
} from "chart.js";
import { BorderColor } from "@mui/icons-material";
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);
export const LineGraph = () => {
  const bg = (context) => {
    const chart = context.chart;
    const { ctx, chartArea } = chart;
    if (!chartArea) {
      return null;
    }
    const gradient = ctx.createLinearGradient(
      0,
      chartArea.top,
      0,
      chartArea.bottom
    );
    gradient.addColorStop(0, "rgba(75,192,0.5)");
    gradient.addColorStop(1, "rgba(75,192,192,0)");
    return gradient;
  };
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: true,
        text: "this is a line graph",
      },
      Tooltip: {
        backgroundColor: "#fff",
        titleColor: "#333",
        bodyColor: "#333",
        borderColor: "#ddd",
        borderWidth: 1,
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
        ticks: {
          color: "#888",
        },
      },
      y: {
        grid: {
          color: "#e0e0e0",
        },
        ticks: {
          color: "#888",
          stepSize: 10000,
          callback: (value) => {
            return value >= 1000 ? `${(value / 1000).toFixed(0)}k` : value;
          },
        },
      },
    },
  };
  const data = {
    labels: ["1", "5", "10", "15", "20", "25", "30"],
    datasets: [
      {
        label: "Active Users",
        data: [12000, 18000, 22000, 24000, 29000, 32000, 45000],
        fill: true,
        backgroundColor: "blue",
        borderColor: "#4BC0C0",
        tension: 0.5,
        pointRadius: 3,
        pointBackgroundColor: "#fff",
        pointBorderColor: "#4BC0C0",
        borderWidth: 2,
      },
    ],
  };
  return <Line options={options} data={data} />;
};
