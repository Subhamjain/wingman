import React, { useState } from "react";
import { Sidebar } from "./components/Sidebar/Sidebar";
import Header from "./components/Header/Header";
import Insights from "./components/Insights/Insights";
import Card from "./components/Card/Card";
import consultationLogo from "./assets/consultation.svg";
import check from "./assets/check.svg";
import coin from "./assets/coin.svg";
import coins from "./assets/coins.svg";
import piggybank from "./assets/piggybank.svg";
import tag from "./assets/tag.svg";
import trendup from "./assets/trendup.svg";
import trenddown from "./assets/trenddown.svg";
import Table from "./components/Table/Table";
import openingsoon from "./assets/OpeningSoon.mp4";

const cardData = [
  {
    title: "CONSULTATIONS",
    value: "24",
    change: "15%",
    color: "text-green-500",
    icon: consultationLogo,
    trend: trendup,
    increase: true,
  },
  {
    title: "ORDERS PLACED",
    value: "12",
    change: "15%",
    color: "text-red-500",
    icon: check,
    trend: trenddown,
    decrease: true,
  },
  {
    title: "CONVERSION",
    value: "15%",
    change: "15%",
    color: "text-red-500",
    icon: coin,
    trend: trenddown,
    decrease: true,
  },
  {
    title: "CONVERSION",
    value: "$2,400",
    change: "15%",
    color: "text-green-500",
    icon: coins,
    trendup: trendup,
    increase: true,
  },
  {
    title: "CONVERSION",
    value: "$240",
    change: "15%",
    color: "text-green-500",
    icon: tag,
    trend: trendup,
    increase: true,
  },
  {
    title: "CONVERSION",
    value: "$240",
    change: "15%",
    color: "text-red-500",
    icon: piggybank,
    trend: trenddown,
    decrease: true,
  },
];

function App() {
  const [selectedItemIndex, setSelectedItemIndex] = useState(0);
  const [selectedHeader, setSelectedHeader] = useState(0);
  return (
    <div className="flex min-h-screen ">
      {/* Sidebar */}
      <Sidebar
        selectedItemIndex={selectedItemIndex}
        setSelectedItemIndex={setSelectedItemIndex}
      />
      {/* Main Content */}
      <main className="flex-1 ml-20  ">
        {/* Header Tabs */}
        <Header
          selectedHeader={selectedHeader}
          setSelectedHeader={setSelectedHeader}
        />

        {selectedItemIndex === 0 && selectedHeader === 0 ? (
          <>
            <div className="border border-[#DCDFE4] rounded-[20px] m-6 shadow mt-[130px] overflow-y-auto">
              <h2 className="text-lg font-semibold p-6">At a glance</h2>

              <section className="grid grid-cols-1 lg:grid-cols-3 gap-6 p-6">
                {cardData.map((card, index) => (
                  <Card key={index} card={card} />
                ))}
              </section>
              {/* Insights */}
              <Insights />
              {/* Table */}
              <Table />
            </div>
          </>
        ) : (
          <div className="flex justify-center w-full mt-[130px]">
            <video
              src={openingsoon}
              className="rounded-lg h-96 "
              autoPlay
              loop
              muted
              controls={false} // Remove controls for a cleaner look
            />
          </div>
        )}
        {/* At a Glance Section */}
      </main>
    </div>
  );
}

export default App;
