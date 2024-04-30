import Image from "next/image";
import React from "react";

const HomeCard = ({ image, name, nickname }) => {
  return (
    <div className="space-y-3">
      <div className="text-white">
        <div>
          <p className="text-[24px] font-semibold">{name}</p>
        </div>
        <div>
          <p className="text-[16px] font-medium">(ft. {nickname})</p>
        </div>
      </div>
      <div className="box-content max-w-[563px] w-auto h-[797px] flex-col justify-center items-center">
        <Image
          className="w-fit h-auto border border-black"
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
