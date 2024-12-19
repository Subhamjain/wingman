import React, { useState } from "react";
import { FaSort, FaSortUp, FaSortDown } from "react-icons/fa";
import buds from "../../assets/earbud.svg";
import arrowup from "../../assets/arrowup.svg";

export default function Table() {
  const [data, setData] = useState([
    {
      product: "Earbuds",
      date: "24 Apr 2024",
      time: "2h 5m",
      value: 120.21,
      commission: 55,
    },
    {
      product: "Headphones",
      date: "23 Apr 2024",
      time: "1h 20m",
      value: 80.15,
      commission: 35,
    },
    {
      product: "Smartwatch",
      date: "22 Apr 2024",
      time: "3h 10m",
      value: 200.45,
      commission: 90,
    },
    {
      product: "Speaker",
      date: "25 Apr 2024",
      time: "4h 0m",
      value: 150.75,
      commission: 70,
    },
  ]);

  const [sortConfig, setSortConfig] = useState({ key: null, direction: null });

  const sortData = (key) => {
    let direction = "ascending";
    if (sortConfig.key === key && sortConfig.direction === "ascending") {
      direction = "descending";
    }

    const sortedData = [...data].sort((a, b) => {
      if (a[key] < b[key]) {
        return direction === "ascending" ? -1 : 1;
      }
      if (a[key] > b[key]) {
        return direction === "ascending" ? 1 : -1;
      }
      return 0;
    });

    setData(sortedData);
    setSortConfig({ key, direction });
  };

  const getSortIcon = (key) => {
    if (sortConfig.key !== key)
      return <FaSort className="inline-block ml-2 text-gray-400" />;
    return sortConfig.direction === "ascending" ? (
      <FaSortUp className="inline-block ml-2 text-gray-600" />
    ) : (
      <FaSortDown className="inline-block ml-2 text-gray-600" />
    );
  };

  return (
    <div className="p-6">
      <h2 className="text-lg font-semibold mb-4 mt-8">Orders</h2>
      <section className="mt-5 bg-white shadow rounded-lg border border-[#DCDFE4]">
        <table className="w-full">
          <thead>
            <tr className="border-b bg-slate-100">
              <th
                className="p-2 text-left text-[14px] font-[400] text-[#667085] cursor-pointer"
                onClick={() => sortData("product")}
              >
                Product {getSortIcon("product")}
              </th>
              <th
                className="p-2 text-left text-[14px] font-[400] text-[#667085] cursor-pointer"
                onClick={() => sortData("date")}
              >
                Date {getSortIcon("date")}
              </th>
              <th
                className="p-2 text-left text-[14px] font-[400] text-[#667085] cursor-pointer"
                onClick={() => sortData("time")}
              >
                Time Spent {getSortIcon("time")}
              </th>
              <th
                className="p-2 text-left text-[14px] font-[400] text-[#667085] cursor-pointer"
                onClick={() => sortData("value")}
              >
                Order Value {getSortIcon("value")}
              </th>
              <th
                className="p-2 text-left text-[14px] font-[400] text-[#667085] cursor-pointer"
                onClick={() => sortData("commission")}
              >
                Commission {getSortIcon("commission")}
              </th>
              <th className=""></th>
            </tr>
          </thead>
          <tbody className="text-[16px] font-[400] text-[#212636]">
            {data.map((row, i) => (
              <tr key={i} className="border-b">
                <td className="p-2 flex items-center">
                  <div className="mr-3">
                    <img src={buds} alt="Product" />
                  </div>
                  <div>{row.product}</div>
                </td>
                <td className="p-2">
                  {row.date}
                  <div className="text-[12px]">10:24AM</div>
                </td>
                <td className="p-2">{row.time}</td>
                <td className="p-2">${row.value.toFixed(2)}</td>
                <td className="p-2 text-[16px] font-[700]">
                  ${row.commission}
                </td>
                <td className="p-2 text-[#8A94A6] text-[12px] flex">
                  <div className="mr-2">view chat</div>
                  <div>
                    <img src={arrowup} />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </div>
  );
}
