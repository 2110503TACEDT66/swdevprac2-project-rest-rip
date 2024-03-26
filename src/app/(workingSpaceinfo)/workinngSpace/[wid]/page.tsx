"use client";

import PopCard from "@/components/PopCard";
import RatingModal from "@/components/RatingModal";
import getRating from "@/libs/getRating";
import getWorkingSpace from "@/libs/getWorkingSpace";
import { Button, CircularProgress, Rating, TextField } from "@mui/material";
import Image from "next/image";
import React, { useState, useEffect, Suspense } from "react";

function page({ params }: { params: { wid: string } }) {
  const [workingSpaceData, setWorkingSpaceData] = useState<WorkingSpaceItem>(
    {} as WorkingSpaceItem
  );

  useEffect(() => {
    const fetchData = async () => {
      const response = await getWorkingSpace(params.wid);
      setWorkingSpaceData(response.data);

      const rating = await getRating(params.wid);
      setAvgRating(rating.data[0]?.averageRating || 0);
    };

    fetchData();
  }, [params.wid]);

  const [showPopCard, setShowPopCard] = useState(false);
  const [showRatingModal, setShowRatingModal] = useState(false);

  const handleButtonClick = () => {
    setShowPopCard(true);
  };

  const [avgRating, setAvgRating] = useState(0);

  return (
    <Suspense fallback={<CircularProgress />}>
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

          <div className="flex flex-row items-center w-full justify-center gap-4 my-4 center">
            <Rating
              size="large"
              value={avgRating}
              readOnly={true}
              precision={0.5}
            />
            <Button
              variant="contained"
              onClick={() => {
                setShowRatingModal(true);
              }}
              className="bg-slate-800"
            >
              Rate this Workspace
            </Button>
          </div>

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

        {showRatingModal && (
          <RatingModal
            workingSpace={workingSpaceData}
            showModal={(value: boolean) => {
              setShowRatingModal(value);
            }}
          />
        )}
      </div>
    </Suspense>
  );
}

export default page;
