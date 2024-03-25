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
    <div className="bg-slate-700 flex m-6 h-[100vh] items-center px-6 py-[24px] rounded-xl shadow-xl gap-5">
      <img
        src={workingSpaceData.picture}
        className="h-full w-auto rounded-lg"
      />
      <div className="relative flex flex-col ">
        <h1 className="mx-auto my-2 text-2xl w-full">
          {workingSpaceData.name}
        </h1>
        <h1 className="mx-auto my-2 text-xl w-full ml-2">
          {workingSpaceData.address +
            " " +
            workingSpaceData.district +
            " " +
            workingSpaceData.province +
            " " +
            workingSpaceData.postalcode}
        </h1>
        <h1 className="mx-auto my-2 text-xl w-full ml-2">
          {workingSpaceData.tel}
        </h1>

        <Button variant="contained" onClick={handleButtonClick}>
          Make Reservation
        </Button>
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
