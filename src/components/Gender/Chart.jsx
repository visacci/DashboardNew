import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, Tooltip, Legend, ArcElement } from "chart.js";
import { BorderColor } from "@mui/icons-material";
ChartJS.register(Tooltip, Legend, ArcElement);
export const Chart = () => {
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: true,
        position: "bottom",
        labels: {
          color: "#333",
          padding: 15,
          boxWidth: 10,
        },
      },
    },
  };
  const data = {
    labels: ["Female", "Male", "Other"],
    datasets: [
      {
        // label: "Time spent",
        data: [50, 45, 5],
        backgroundColor: ["#36A2EB", "#FF6384", "#FFCE56"],
        hoverOffset: 6,
        BorderColor: "#36A2EB",
      },
    ],
  };
  return <Doughnut options={options} data={data} />;
};
