import React from "react";
import { PiChatTeardropFill } from "react-icons/pi";
import { BsBarChartLineFill } from "react-icons/bs";
import ComboChart from "../Charts/ComboChart";
import BarChart from "../Charts/BarChart";

export default function Insights() {
  return (
    <section className="mt-8 p-6">
      <h2 className="text-lg font-bold mb-4">Insights</h2>

      <div className="grid grid-cols-4 lg:grid-cols-6 gap-6 items-center">
        {/* Combo Chart */}
        <div className="bg-white p-4 border border-[#DCDFE4] rounded-[20px] shadow col-span-3">
          <div className="flex items-center text-[color:--insights-heading-color]">
            <PiChatTeardropFill className="mr-2" />
            <h3 className="font-inter font-semibold text-[12px] leading-[30px] tracking-[0.5px] uppercase">
              Consultations
            </h3>
          </div>
          <ComboChart />
        </div>

        {/* Bar Chart */}
        <div className="bg-white p-4 border border-[#DCDFE4] rounded-[20px] shadow col-span-2">
          <div className="flex items-center text-[color:--insights-heading-color]">
            <BsBarChartLineFill className="mr-2" />
            <h3 className="font-inter font-semibold text-[12px] leading-[30px] tracking-[0.5px] uppercase">
              VS Past Period
            </h3>
          </div>
          <BarChart />
        </div>
        <div className="w-full h-full rounded-[20px] col-span-1 bg-[url(/caed.jpeg)] bg-contain bg-no-repeat bg-[#109785]"></div>
      </div>
    </section>
  );
}
