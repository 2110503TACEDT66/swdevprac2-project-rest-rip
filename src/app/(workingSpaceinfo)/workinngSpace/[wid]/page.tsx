"use client";

import PopCard from "@/components/PopCard";
import getWorkingSpace from "@/libs/getWorkingSpace";
import { Button } from "@mui/material";
import Image from "next/image";
import React, { useState, useEffect } from "react";

function page({ params }: { params: { wid: string } }) {
  const [workingSpaceData, setWorkingSpaceData] = useState<WorkingSpaceItem>(
    {} as WorkingSpaceItem
  );

  useEffect(() => {
    const fetchData = async () => {
      const response = await getWorkingSpace(params.wid);
      setWorkingSpaceData(response.data);
    };

    fetchData();
  }, [params.wid]);

  const [showPopCard, setShowPopCard] = useState(false);

  const handleButtonClick = () => {
    setShowPopCard(true);
  };

  return (
    <div className="bg-slate-700 flex flex-col align-center m-6 items-center px-6 py-[24px] rounded-xl shadow-xl gap-5">
      <img
        src={workingSpaceData.picture}
        className="h-auto w-3/5 rounded-lg border-4 border-slate-600 drop-shadow-2xl"
        // alt="Working Space Image"
      />
      <div className=" flex flex-col text-center bg-slate-600 rounded-lg p-5">
        <h1 className="mx-auto my-2 text-2xl w-full font-semibold">
          {workingSpaceData.name}
        </h1>
        <h1 className="mx-5 my-2 text-xl w-auto  text-slate-200">
          {workingSpaceData.address +
            " " +
            workingSpaceData.district +
            " " +
            workingSpaceData.province +
            " " +
            workingSpaceData.postalcode}
        </h1>
        <h1 className="mx-5 my-2 text-xl w-auto text-slate-200">
          {workingSpaceData.tel}
        </h1>

        <div className="flex flex-row justify-center gap-5 px-5 py-2.5 me-2 mb-0 mt-5">
          <Button variant="contained" onClick={handleButtonClick}>
            Make Reservation
          </Button>
        </div>
      </div>

      {showPopCard && (
        <PopCard
          workingSpace={workingSpaceData}
          showPopCard={(value: boolean) => {
            setShowPopCard(value);
          }}
        />
      )}
    </div>
  );
}

export default page;
