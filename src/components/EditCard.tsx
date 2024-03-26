"use client";

import React, { useEffect, useState } from "react";
import DateReserve from "./DateReserve";
import { Dayjs } from "dayjs";
import { Button } from "@mui/material";
import { useSession } from "next-auth/react";
import getUserProfile from "@/libs/getUserProfile";

import updateReservation from "@/libs/updateReservation";

type PopCardProps = {
    reservationID: string;

    showPopCard: Function;
    workingSpaceID: string;
};

function EditCard({ reservationID, showPopCard, workingSpaceID }: PopCardProps) {
    const [date, setDate] = useState<Dayjs | null>(null);
    const { data: session, status } = useSession();

    // const dispatch = useDispatch<AppDispatch>();

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
            _id: reservationID,
            userId: user.data._id,
            name: user.data.name,
            email: user.data.email,
            workSpace: "",
            workSpaceId: workingSpaceID,
            apptDate: date.format("YYYY-MM-DD"),
        };

        // dispatch(addReservation(reservationItem));
        updateReservation(reservationItem, session.user.token);
        showPopCard(false);


    }

    function handleCancel() {
        showPopCard(false);
    }

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm backdrop-brightness-75 rounded-xl">
            <div className="bg-white p-10 rounded-lg flex flex-col items-center align-center ">

                <h2 className="text-slate-700 mb-4 text-lg">Choose Your New Date</h2>

                <DateReserve
                    onDateChange={(value: Dayjs) => {
                        setDate(value);
                    }}
                />

                <div className="flex justify-end mt-4 bottom-0">
                    <Button
                        variant="contained"
                        className="mr-2 bg-slate-400 "
                        onClick={() => {
                            handleCancel();
                        }}
                    >
                        Cancel
                    </Button>
                    <Button
                        variant="contained"
                        className="bg-slate-400 "
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

export default EditCard;
