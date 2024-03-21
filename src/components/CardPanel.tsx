"use client";

import { useReducer } from "react";
import Card from "./Card";
import Link from "next/link";

function CardPanel() {
  type ActionType = {
    type: string;
    hospitalName: string;
    rating: number;
  };

  const reducerRating = (
    hospitalMap: Map<string, number>,
    action: ActionType
  ) => {
    switch (action.type) {
      case "set": {
        hospitalMap.set(action.hospitalName, action.rating);
        return new Map(hospitalMap);
      }
      case "delete": {
        hospitalMap.delete(action.hospitalName);
        return new Map(hospitalMap);
      }
      default: {
        return hospitalMap;
      }
    }
  };

  const initMap = new Map<string, number>();
  initMap.set("Chulalongkorn Hospital", 5);
  initMap.set("Rajavithi Hospital", 5);
  initMap.set("Thammasat University Hospital", 5);
  const [hospitalRatingMap, dispatchHospitalRatingMap] = useReducer(
    reducerRating,
    initMap
  );

  const mockHospital = [
    {
      hid: "001",
      name: "Chulalongkorn Hospital",
      image: "/img/chula.jpg",
    },
    {
      hid: "002",
      name: "Rajavithi Hospital",
      image: "/img/rajavithi.jpg",
    },
    {
      hid: "003",
      name: "Thammasat University Hospital",
      image: "/img/thammasat.jpg",
    },
  ];

  return (
    <div>
      <div className="relative flex my-10 justify-evenly ">
        {mockHospital.map((hospital) => (
          <Link href={"/hospital/" + hospital.hid}>
            <Card
              key={hospital.hid}
              hospitalName={hospital.name}
              imgSrc={hospital.image}
              onRating={(hospitalName: string, rating: number) => {
                dispatchHospitalRatingMap({
                  type: "set",
                  hospitalName: hospitalName,
                  rating: rating,
                });
              }}
            />
          </Link>
        ))}
      </div>
      <div className=" w-[600px] bg-slate-200 rounded-lg overflow-hidden mx-auto my-10">
        {Array.from(hospitalRatingMap.entries()).map(
          ([hospitalName, rating]: [string, number]) => (
            <div
              key={hospitalName}
              className="w-full p-3 hover:bg-slate-300 hover:cursor-pointer"
              data-testid={hospitalName}
              onClick={(
                event: React.MouseEvent<HTMLDivElement, MouseEvent>
              ) => {
                dispatchHospitalRatingMap({
                  type: "delete",
                  hospitalName: hospitalName,
                  rating: 0,
                });
              }}
            >
              <p>{hospitalName + " Rating : " + rating}</p>
            </div>
          )
        )}
      </div>
    </div>
  );
}

export default CardPanel;
