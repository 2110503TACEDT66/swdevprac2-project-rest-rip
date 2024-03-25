import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import postReservation from "@/libs/postReservation";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getServerSession } from "next-auth";

type ReservationState = {
  reservationItems: ReservationItem[];
};

const initialState: ReservationState = { reservationItems: [] };

export const reservationSlice = createSlice({
  name: "Book",
  initialState,
  reducers: {
    addReservation: (state, action: PayloadAction<ReservationItem>) => {
      state.reservationItems.push(action.payload);
    },
    removeReservation: (state, action: PayloadAction<ReservationItem>) => {
      // Should remove one
      // Now it removes all
      state.reservationItems = state.reservationItems.filter((item) => {
        return (
          // item._id !== action.payload.id &&
          item.workSpace !== action.payload.workSpace &&
          item.workSpaceId !== action.payload.workSpaceId &&
          item.apptDate !== action.payload.apptDate
        );
      });
    },
  },
});

export const { addReservation, removeReservation } = reservationSlice.actions;
export default reservationSlice.reducer;
