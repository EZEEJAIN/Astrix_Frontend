import Image from "next/image";
import React from "react";

const HomeCard = ({ image, name, nickname }) => {
  return (
    <div className="">
      <div className="text-white">
        <div>
          <p className="text-[24px] font-semibold">{name}</p>
        </div>
        <div>
          <p className="text-[16px] font-medium">(ft. {nickname})</p>
        </div>
      </div>
      <div className="box-content flex-col justify-center items-center">
        <Image
          className="w-full h-[460px] object-contain border border-black"
          src={image}
          alt=""
          width={5}
          height={5}
        />
      </div>
    </div>
  );
};

export default HomeCard;
