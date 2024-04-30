import Image from "next/image";
import React from "react";

const CollectibleCard = ({ year, name, image, collName }) => {
  return (
    <div className="box-content p-2 bg-[#B9A0FF] rounded-xl flex-col justify-start items-start space-y-2">
      <div className="flex justify-between items-center">
        <div className="box-content px-2 py-.5 bg-black rounded-lg flex-col justify-start items-start space-y-2 w-fit text-white text-[8px]">
          {" "}
          {year}
        </div>
        <div className="text-black text-[8px]">
          <p>
            By <span className="font-bold">{name}</span>
          </p>
        </div>
      </div>
      <div className="flex justify-center items-center">
        {" "}
        <p className="text-[11.02px] text-black font-semibold">{collName}</p>
      </div>
      <div className="box-content max-w-full flex-col justify-center items-center space-y-2">
        <Image
          className="w-full h-full rounded-xl border border-black"
          src={image}
          alt=""
          width={5}
          height={5}
        />
      </div>
    </div>
  );
};

export default CollectibleCard;
