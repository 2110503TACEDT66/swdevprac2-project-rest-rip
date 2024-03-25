"use client";

import React, { useEffect, useState } from "react";
import DateReserve from "./DateReserve";
import { Dayjs } from "dayjs";
import { Button } from "@mui/material";
import { useSession } from "next-auth/react";
import getUserProfile from "@/libs/getUserProfile";
import { addReservation } from "@/redux/features/reservationSlice";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/redux/store";
import postReservation from "@/libs/postReservation";

type PopCardProps = {
  workingSpace: WorkingSpaceItem;
  showPopCard: Function;
};

function PopCard({ workingSpace, showPopCard }: PopCardProps) {
  const [date, setDate] = useState<Dayjs | null>(null);
  const { data: session, status } = useSession();

  const dispatch = useDispatch<AppDispatch>();

  const [user, setUser] = useState<any>(null);
  if (!session || !session.user.token) {
    return null;
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

    const reservationItem: ReservationItem = {
      userId: user.data._id,
      name: user.data.name,
      email: user.data.email,
      workSpace: workingSpace.name,
      workSpaceId: workingSpace._id,
      bookDate: date.format("YYYY-MM-DD"),
    };

    dispatch(addReservation(reservationItem));
    postReservation(reservationItem, session.user.token);
    showPopCard(false);
    alert("Reservation success");
  }

  function handleCancel() {
    showPopCard(false);
  }

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm backdrop-brightness-75">
      <div className="bg-white p-4 rounded-lg w-[400px] h-[400px] relative">
        <h2>Choose Date</h2>
        <DateReserve
          onDateChange={(value: Dayjs) => {
            setDate(value);
          }}
        />

        <div className="flex justify-end mt-4 bottom-0">
          <Button
            variant="contained"
            className="mr-2"
            onClick={() => {
              handleCancel();
            }}
          >
            Cancel
          </Button>
          <Button
            variant="contained"
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