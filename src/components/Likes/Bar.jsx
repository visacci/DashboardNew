import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  plugins,
} from "chart.js";
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);
export const BarChart = () => {
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: true,
        position: "top",
        labels: {
          color: "#333",
          padding: 20,
          boxwidth: 10,
        },
      },
      tooltip: {
        backgroundColor: "#fff",
        titleColor: "#333",
        borderColor: "#ddd",
        bodyColor: "#333",
        borderWidth: 1,
      },
    },
    scale: {
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
          display: false,
          color: "#e0e0e0",
        },
        ticks: {
          color: "#888",
          stepSize: 100,
        },
      },
    },
  };
  const data = {
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    datasets: [
      {
        label: "Likes",
        data: [446, 285, 392, 318, 465, 437, 402],
        backgroundColor: "rgb(144, 118, 222)",
        borderColor: "#4BC0C0",
        borderWidth: 0,
        barThickness: 30,
        borderRadius: 10,
        fontFamily: "Roboto",
      },
      {
        label: "comments",
        backgroundColor: "#FF6384",
        borderColor: "#FF6384",
        data: [200, 150, 220, 180, 250, 210],
        borderWidth: 2,
        borderRadius: 4,
        barThickness: 10,
      },
      {
        label: "Shares",
        backgroundColor: "#FFCE56",
        borderColor: "#FFCE56",
        data: [230, 300, 310, 240, 280, 330, 310],
        borderWidth: 2,
        borderRadius: 4,
        barThickness: 10,
      },
    ],
  };
  return <Bar options={options} data={data} />;
};
