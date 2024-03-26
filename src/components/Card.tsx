"use client";
import InteractiveCard from "./InteractiveCard";
import { useState } from "react";
import Image from "next/image";
import getRating from "@/libs/getRating";
import { Rating } from "@mui/material";

type CardProps = {
  id:string
  hospitalName: string;
  imgSrc: string;
  address : string;
  onRating?: Function;
};

function Card({id, hospitalName, imgSrc,address }: CardProps) {
  const [rating, setRating] = useState(0);

  getRating(id).then(async (data) => {
    if(data.data[0]?.averageRating){
      await setRating(data.data[0].averageRating)
    }
    
  }).catch(err=>{
    console.error("no rating", err);
  });
  
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
              <Rating name="read-only" defaultValue={0} value={rating}  precision={0.5} readOnly />
            </div>  
            
          </div>
        </div>

      </InteractiveCard>
      </div>
  );
}

export default Card;
