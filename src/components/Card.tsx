"use client";
import { Rating } from "@mui/material";
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
      <InteractiveCard>
        <div className="flex w-full bg-slate-500 rounded-lg">
 
          <Image
            src={imgSrc}
            alt="workingSpaceImg"
            width={350}
            height={350}
            className="rounded-lg h-full w-auto"
          />
          {/* <img src={imgSrc} alt="hospital image" className="rounded-t-xl" /> */}

          <div className="m-2 text-white">
            <h1 className="text-xl font-semibold mb-2">{hospitalName}</h1>
            <p className="font-thin">{address}</p>
            {/* {onRating && (
              <Rating
                id={hospitalName + " Rating"}
                name={hospitalName + " Rating"}
                data-testid={hospitalName + " Rating"}
                value={rating}
                onChange={(event, newValue) => {
                  if (newValue !== null) {
                    setRating(newValue);
                    onRating(hospitalName, newValue);
                  }
                }}
              />
            )} */}
          </div>
        </div>

      </InteractiveCard>

  );
}

export default Card;
