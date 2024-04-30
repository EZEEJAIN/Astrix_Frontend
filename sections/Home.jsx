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
    <div
      className="flex-col justify-start items-start"
      // style={{
      //   background: "url('/ViewBG.svg')",
      //   backgroundSize: "cover",
      //   backgroundRepeat: "repeat",
      // }}
    >
      <Navbar />
      <div className="flex justify-start items-center space-x-3 py-10 ">
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
