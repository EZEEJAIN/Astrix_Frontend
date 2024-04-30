import React from "react";
import Card1 from "../public/assests/card1.svg";
import Card2 from "../public/assests/card2.svg";
import Card3 from "../public/assests/card3.svg";
import Card4 from "../public/assests/card4.svg";
import Navbar from "@/components/Navbar";
import HomeCard from "@/components/HomeCard";
const Homee = () => {
  const cardItems = [
    {
      nickname: "Kanye west",
      name: "Lunar Palace",
      image: Card1,
    },
    {
      nickname: "Kanye west",
      name: "Lunar Palace",
      image: Card2,
    },
    {
      nickname: "Kanye west",
      name: "Lunar Palace",
      image: Card3,
    },
    {
      nickname: "Kanye west",
      name: "Lunar Palace",
      image: Card4,
    },
  ];
  return (
    <div className="flex-col justify-start items-start relative">
      <Navbar />
      <div className="px-8 absolute top-24">
        <p className="text-8xl font-bold text-slate-200 opacity-75 -z-20">
          ASTR
        </p>
        <p className="text-8xl font-bold text-slate-200 opacity-75 mb-16">
          IX
        </p>
        <p className="text-8xl font-bold text-slate-200 opacity-75">
          COLL
        </p>
        <p className="text-8xl font-bold text-slate-200 opacity-75">
          ECTI
        </p>
        <p className="text-8xl font-bold text-slate-200 opacity-75">
          BLE
        </p>
      </div>
      <div className="flex justify-between items-center space-x-3 py-10 ml-52">
        {cardItems.map((elem, index) => (
        <HomeCard
          key={index}
          image={elem.image}
          name={elem.name}
          nickname={elem.nickname}
        />
      ))}
      </div>
    </div>
  );
};

export default Homee;
