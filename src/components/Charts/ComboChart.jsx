import React, { useState } from "react";
import Chart from "react-apexcharts";

export default function ComboChart() {
  const [chartData] = useState({
    series: [
      {
        name: "Incoming",
        type: "line",
        data: [30, 35, 40, 50, 45, 50, 55], // Dashed line data
      },
      {
        name: "Answered",
        type: "line",
        data: [25, 30, 35, 45, 40, 42, 50], // Solid line data
      },
      {
        name: "Experts Online",
        type: "column",
        data: [10, 12, 15, 20, 18, 17, 19], // Column bar data
      },
    ],
    options: {
      chart: {
        height: 350,
        type: "line", // This is the parent type for mixed charts
        toolbar: {
          show: false,
        },
      },
      stroke: {
        width: [2, 2, 0], // Thickness of each series' line
        curve: "smooth",
        dashArray: [5, 0, 0], // Dashed for the first series
      },
      dataLabels: {
        enabled: false, // Disable data labels
      },
      xaxis: {
        categories: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"], // Categories for the x-axis
        labels: {
          style: {
            fontSize: "12px", // Font size for x-axis labels
            colors: "#667085", // Label color
            fontWeight: 400,
          },
        },
      },
      yaxis: [
        {
          title: {
            text: "Consultations",
            style: {
              fontSize: "12px",
              color: "#C4C4C4",
              fontWeight: 600,
            },
          },
          labels: {
            style: {
              fontSize: "12px", // Font size for x-axis labels
              colors: "#667085", // Label color
              fontWeight: 400,
            },
          },
        },
        {
          opposite: true, // Positions this Y-axis on the right
          title: {
            text: "Experts Online",
            style: {
              fontSize: "12px",
              color: "#C4C4C4",
              fontWeight: 600,
            },
          },
          labels: {
            style: {
              fontSize: "12px", // Font size for x-axis labels
              colors: "#667085", // Label color
              fontWeight: 400,
            },
          },
        },
      ],
      colors: ["#8A94A6", "#15B79F", "#FFE587"], // Define colors for each series
      legend: {
        show: false,
      },
    },
  });
  return (
    <div>
      <Chart
        options={chartData.options}
        series={chartData.series}
        type="line"
        height={350}
      />
      <div className="border-t flex pt-6">
        {chartData.series.map((data, index) => {
          return (
            <div className="flex items-center mr-10">
              <div
                className={`w-[16px] h-[4px] rounded-2xl bg-[${chartData.options.colors[index]}] mr-2`}
              ></div>
              <p className="font-inter text-[12px] text-[color:--insights-heading-color]">
                {data.name}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
