"use client";
import DateReserve from "@/components/DateReserve";
import React, { useEffect, useState } from "react";
import { MenuItem, Select, TextField } from "@mui/material";

import { Dayjs } from "dayjs";

import { useDispatch } from "react-redux";
import { AppDispatch } from "@/redux/store";

import dayjs from "dayjs";
import { addReservation } from "@/redux/features/reservationSlice";
import getUserProfile from "@/libs/getUserProfile";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { useSession } from "next-auth/react";
import getWorkingSpaces from "@/libs/getWorkingSpaces";
import postReservation from "@/libs/postReservation";

const page = () => {
  const session = useSession();
  const [user, setUser] = useState<any>(null);
  const [workingSpaces, setWorkingSpaces] = useState<WorkingSpaceItem[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      if (!session || !session.data?.user.token) return;

      const userProfile = await getUserProfile(session.data.user.token);
      setUser(userProfile);

      const workingSpaceJson: WorkingSpaceJson = await getWorkingSpaces();
      setWorkingSpaces(workingSpaceJson.data);
    };
    fetchData();
  }, []);

  const [selectedWorkingSpace, setSelectedWorkingSpace] = useState<string>("");
  const [selectedWorkingSpaceID, setSelectedWorkingSpaceID] =
    useState<string>("");
  const [date, setDate] = useState<Dayjs | null>(null);

  const dispatch = useDispatch<AppDispatch>();

  const makeReservation = async () => {
    if (
      !selectedWorkingSpace ||
      !selectedWorkingSpaceID ||
      !date ||
      !session ||
      !session.data?.user.token
    ) {
      return;
    }

    const reservationItem: ReservationItem = {
      id: user.data.id,
      name: user.data.name,
      email: user.data.email,
      workSpace: selectedWorkingSpace,
      workSpaceId: selectedWorkingSpaceID,
      bookDate: date.format("YYYY-MM-DD"),
    };

    dispatch(addReservation(reservationItem));

    console.log(reservationItem.workSpaceId);

    try {
      // status: 400 msg: "User add reservation to another user"
      await postReservation(reservationItem, session.data.user.token);
    } catch (err) {
      console.log(err);
    }

    setSelectedWorkingSpace("");
    setSelectedWorkingSpaceID("");
    setDate(null);
  };

  return (
    <div className="m-6 bg-slate-700 rounded-2xl flex flex-col justify-center p-4 items-center">
      <div className="p-4  flex justify-center w-1/3 flex-col items-center bg-white rounded-lg">
        <h1 className="font-semibold text-black">Vaccine Booking</h1>
        <div className="w-full justify-center">
          <div className="my-4">
            <div className="space-y-3 flex flex-col text-slate-500 px-4">
              <h2>Choose WorkingSpace</h2>
              <Select
                variant="standard"
                id="workingSpace"
                value={selectedWorkingSpace}
                onChange={(e) => {
                  setSelectedWorkingSpace(e.target.value);
                  const foundWorkingSpace = workingSpaces.find((ws) => {
                    return ws.name === e.target.value;
                  });
                  setSelectedWorkingSpaceID(foundWorkingSpace?._id || "");
                  // setSelectedWorkingSpaceID(e.target.value);
                  // const foundWorkingSpace = workingSpaces.find((ws) => {
                  //   return ws._id === e.target.value;
                  // });
                  // setSelectedWorkingSpace(foundWorkingSpace?.name || "");
                }}
                className="text-black"
              >
                {/* <MenuItem value="Chula">Chulalongkorn Hospital</MenuItem>
                <MenuItem value="Rajavithi">Rajavithi Hospital</MenuItem>
                <MenuItem value="Thammasat">
                  Thammasat University Hospital
                </MenuItem> */}
                {workingSpaces.map((workingSpace) => (
                  <MenuItem value={workingSpace.name} key={workingSpace._id}>
                    {workingSpace.name}
                  </MenuItem>
                ))}
              </Select>

              <DateReserve
                onDateChange={(value: Dayjs) => {
                  setDate(value);
                }}
              />
              <div className="flex justify-center">
                <button
                  className="text-white bg-slate-500 w-1/2 rounded-full py-2"
                  name="Reserve Working Space"
                  onClick={() => {
                    makeReservation();
                  }}
                >
                  Booking Space
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
