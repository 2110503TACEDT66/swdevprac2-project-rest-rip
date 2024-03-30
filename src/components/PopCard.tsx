"use client";

import React, { useEffect, useState } from "react";
import DateReserve from "./DateReserve";
import dayjs, { Dayjs } from "dayjs";
import { Button } from "@mui/material";
import { useSession } from "next-auth/react";
import getUserProfile from "@/libs/getUserProfile";
// import { addReservation } from "@/redux/features/reservationSlice";
import { useDispatch } from "react-redux";
// import { AppDispatch } from "@/redux/store";
import postReservation from "@/libs/postReservation";
import ErrorModal from "./ErrorModal";

type PopCardProps = {
  workingSpace: WorkingSpaceItem;
  showPopCard: Function;
};

function PopCard({ workingSpace, showPopCard }: PopCardProps) {
  const [date, setDate] = useState<Dayjs | null>(null);
  const { data: session, status } = useSession();

  // const dispatch = useDispatch<AppDispatch>();

  const [user, setUser] = useState<any>(null);
  if (!session || !session.user.token) {
    return (
      <ErrorModal
        message="Please login to make reservation"
        setModal={showPopCard}
      />
    );
  }

  useEffect(() => {
    const fetchData = async () => {
      if (!session || !session.user.token) return;

      const userProfile = await getUserProfile(session.user.token);
      setUser(userProfile);
    };

    fetchData();
  }, []);

  function handleSubmit() {
    if (!session?.user.token || !date) return;
    if(date.isBefore(dayjs(),'day') ) {
      alert("Please don't select the day before today");
    
      return;
    }


    const reservationItem: ReservationItem = {
      userId: user.data._id,
      name: user.data.name,
      email: user.data.email,
      workSpace: workingSpace.name,
      workSpaceId: workingSpace._id,
      apptDate: date.format("YYYY-MM-DD"),
    };

    // dispatch(addReservation(reservationItem));
    const response = postReservation(reservationItem, session.user.token);
    showPopCard(false);
  }

  function handleCancel() {
    showPopCard(false);
  }

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm backdrop-brightness-75" data-testid="pop-card">
      <div className="bg-white p-10 rounded-lg flex flex-col items-center align-center ">
        <h1 className="text-2xl font-semibold text-slate-800">
          Reserve a {workingSpace.name}
        </h1>
        <h2>Choose Date</h2>
        <DateReserve
          onDateChange={(value: Dayjs) => {
            setDate(value);
          }}
        />

        <div className="flex justify-end mt-4 bottom-0">
          <Button
            variant="contained"
            className="mr-2 bg-slate-700"
            onClick={() => {
              handleCancel();
            }}
          >
            Cancel
          </Button>
          <Button
            variant="contained"
            className="bg-slate-700"
            onClick={() => {
              handleSubmit();
            }}
          >
            Submit
          </Button>
        </div>
      </div>
    </div>
  );
}

export default PopCard;
