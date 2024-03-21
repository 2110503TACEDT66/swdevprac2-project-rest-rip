"use client";
import { Rating } from "@mui/material";
import InteractiveCard from "./InteractiveCard";
import { useState } from "react";
import Image from "next/image";

type CardProps = {
  hospitalName: string;
  imgSrc: string;
  onRating?: Function;
};

function Card({ hospitalName, imgSrc, onRating }: CardProps) {
  const [rating, setRating] = useState(5);

  return (
    <div className="w-80 h-96">
      <InteractiveCard>
        <div className="">
          <Image
            src={imgSrc}
            alt="asd"
            width={0}
            height={0}
            className="rounded-t-xl w-full h-auto"
          />
          {/* <img src={imgSrc} alt="hospital image" className="rounded-t-xl" /> */}
        </div>
        <div className="m-2">
          <h1 className="text-2xl">{hospitalName}</h1>
          {onRating && (
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
          )}
        </div>
      </InteractiveCard>
    </div>
  );
}

export default Card;
