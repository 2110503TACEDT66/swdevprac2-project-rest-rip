"use client";
import InteractiveCard from "./InteractiveCard";
import { useState } from "react";
import Image from "next/image";


type CardProps = {
  hospitalName: string;
  imgSrc: string;
  address : string;
  onRating?: Function;
};

function Card({ hospitalName, imgSrc,address, onRating }: CardProps) {
  const [rating, setRating] = useState(5);


  return (
    <div>
      <InteractiveCard>
        <div className="flex flex-row p-2 w-full medium bg-slate-500 rounded-2xl">
          <Image
            src={imgSrc}
            alt="workingSpaceImg"
            width={350}
            height={350}
            className="rounded-lg h-full w-auto shadow-lg"
          />
    
          <div className="flex items-center align-center  mx-5 px-3">
            <div className="text-left m-2 text-slate-50"> 
              <h1 className="text-3xl font-semibold mb-2">{hospitalName}</h1>
              <p className="text-xl font-medium text-slate-200 italic">{address}</p>
            </div>
            
          </div>
        </div>

      </InteractiveCard>
      </div>
  );
}

export default Card;
