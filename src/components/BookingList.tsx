"use client";

import { removeReservation } from "@/redux/features/reservationSlice";
import { useAppSelector } from "@/redux/store";
import { AppDispatch } from "@/redux/store";
import { useDispatch } from "react-redux";

export default function BookingList() {
  const bookItems = useAppSelector(
    (state) => state.reservationSlice.reservationItems
  );
  const dispatch = useDispatch<AppDispatch>();
  let i = 0;
  return (
    <>
      {bookItems.length > 0 ? (
        bookItems.map((reservationItem) => (
          <div
            className="bg-slate-700 rounded-xl m-4 p-6 flex justify-center flex-col items-center text-white "
            key={i}
          >
            <div className="bg-slate-500 rounded-lg px-4 py-2 text-white w-1/4 items-center flex flex-col justify-center">
              <div className="flex gap-4">
                <h1>{reservationItem.name}</h1>
              </div>

              <h1>{i}</h1>

              <h1>{reservationItem.workSpace}</h1>

              <h1>{reservationItem.bookDate}</h1>

              <button
                className="bg-red-600 px-4 py-2 rounded-xl my-2"
                onClick={() => dispatch(removeReservation(reservationItem))}
              >
                remove from booking
              </button>
            </div>
          </div>
        ))
      ) : (
        <div>No Working Space Reservation</div>
      )}
    </>
  );
}
