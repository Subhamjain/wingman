import React, { useState } from "react";
import Chart from "react-apexcharts";

export default function BarChart() {
  const [chartData] = useState({
    series: [
      {
        name: "Consultations",
        data: [20, 15], // Values for "This week" and "Last week"
      },
      {
        name: "Orders closed",
        data: [15, 12], // Values for "This week" and "Last week"
      },
    ],
    options: {
      chart: {
        type: "bar",
        height: 350,
        toolbar: {
          show: false, // Disable chart tools
        },
      },
      plotOptions: {
        bar: {
          horizontal: false, // Vertical bars
          columnWidth: "50%", // Adjust column width
          endingShape: "rounded", // Rounded bar ends
        },
      },
      dataLabels: {
        enabled: false, // Disable data labels on bars
      },
      xaxis: {
        categories: ["This week", "Last week"], // X-axis categories
        labels: {
          style: {
            colors: ["#8E8E8E", "#8E8E8E"], // Label color
            fontSize: "12px", // Font size for x-axis labels
          },
        },
        axisBorder: {
          show: false, // Hide x-axis border
        },
        axisTicks: {
          show: false, // Hide x-axis ticks
        },
      },
      yaxis: {
        labels: {
          style: {
            colors: "#667085", // Label color
            fontSize: "12px", // Font size for y-axis labels
          },
        },
      },
      grid: {
        strokeDashArray: 5, // Dashed grid lines
        borderColor: "#E0E0E0", // Grid line color
      },
      colors: ["#CCFBEF", "#134E48"], // Custom bar colors
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
        type="bar"
        height={350}
      />
      <div className="border-t flex pt-6">
        {chartData.series.map((data, index) => {
          return (
            <div className="flex items-center mr-10">
              <div className={`w-[16px] h-[4px] rounded-2xl bg-[${chartData.options.colors[index]}] mr-2`}></div>
              <p className="font-inter text-[12px] text-[color:--insights-heading-color]">{data.name}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
