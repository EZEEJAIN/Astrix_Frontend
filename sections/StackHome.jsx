import Image from "next/image";
import React from "react";
import Ellipse1 from "../public/assests/Ellipse1.svg";
import Ellipse2 from "../public/assests/Ellipse2.svg";
import Ellipse3 from "../public/assests/Ellipse3.svg";
import CollectibleCard from "@/components/CollectibleCard";
import Card from "../public/assests/CardImage.svg";
import Slider from "@/components/Slider";

const StackHome = () => {
  const collectiblesItems = [
    {
      year: "2024",
      collName: "Collectible Name",
      name: "Pablo",
      image: Card,
    },
    {
      year: "2024",
      collName: "Collectible Name",
      name: "Pablo",
      image: Card,
    },
    {
      year: "2024",
      collName: "Collectible Name",
      name: "Pablo",
      image: Card,
    },
    {
      year: "2024",
      collName: "Collectible Name",
      name: "Pablo",
      image: Card,
    },
    {
      year: "2024",
      collName: "Collectible Name",
      name: "Pablo",
      image: Card,
    },
    {
      year: "2024",
      collName: "Collectible Name",
      name: "Pablo",
      image: Card,
    },
  ];
  return (
    <><Slider/>
    <div className="flex-col justify-start items-start pl-12 py-10 text-white space-y-2">
      <div className="text-white space-y-2 w-[270px]">
        <div>
          <p className="text-[20px] font-semibold">
            Explore Your First Collectible
          </p>
        </div>
        <div>
          <p className="text-[49px] font-extrabold tracking-wide">Meta Lives</p>
        </div>
        <div>
          <p className="text-[20px] font-medium">Live in Astrix</p>
        </div>
        <div>
          <p className="text-[13px] w-60 font-medium">
            Lorem ipsum dolor sit amet consectetur. Ac lorem massa in morbi et
            sed ipsum. Pellentesque mattis condimentum ut nulla.{" "}
          </p>
        </div>
        <div className="flex justify-center items-center space-x-5 pt-5">
          <div className="flex -space-x-3 overflow-hidden">
            <Image
              className="inline-block h-7 w-7 rounded-full"
              src={Ellipse1}
              alt=""
              width={5}
              height={5}
            />
            <Image
              className="inline-block h-7 w-7 rounded-full"
              src={Ellipse2}
              alt=""
              width={5}
              height={5}
            />
            <Image
              className="inline-block h-7 w-7 rounded-full"
              src={Ellipse3}
              alt=""
              width={5}
              height={5}
            />
            <Image
              className="inline-block h-7 w-7 rounded-full"
              src={Ellipse1}
              alt=""
              width={5}
              height={5}
            />
            <Image
              className="inline-block h-7 w-7 rounded-full"
              src={Ellipse2}
              alt=""
              width={5}
              height={5}
            />
          </div>
          <div>
            <p className="text-white text-[15px] font-medium">
              22k people interested
            </p>
          </div>
        </div>
      </div>
      <div className="text-[16px] pt-5">
        <p>Collectibles</p>
      </div>
      <div className="flex justify-start items-start space-x-5 overflow-scroll no-scrollbar w-auto">
        {collectiblesItems.map((elem, index) => (
          <>
            <CollectibleCard
              key={index}
              year={elem.year}
              name={elem.name}
              collName={elem.collName}
              image={elem.image}
            />
          </>
        ))}
      </div>
      <div className="box-content py-2 px-5 w-fit text-[18px] text-black bg-[#FFCA5F] rounded-full font-bold font-sans">Join Waitlist</div>
    </div>
    </>
  );
};

export default StackHome;
