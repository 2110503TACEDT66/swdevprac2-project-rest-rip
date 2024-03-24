import { createSlice, PayloadAction } from "@reduxjs/toolkit";

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
          item.id !== action.payload.id &&
          item.workSpace !== action.payload.workSpace &&
          item.workSpaceId !== action.payload.workSpaceId &&
          item.bookDate !== action.payload.bookDate
        );
      });
    },
  },
});

export const { addReservation, removeReservation } = reservationSlice.actions;
export default reservationSlice.reducer;
