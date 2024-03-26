
import BookingList from "@/components/BookingList";
import { CircularProgress } from "@mui/material";
import { Suspense } from "react";

export default function MyBooking() {
  return (
    <main className="my-4 mx-6 p-6 bg-slate-700  flex justify-center items-center rounded-xl">
      <Suspense fallback ={<CircularProgress/>}>
      <BookingList />
      </Suspense>

    </main>
  );
}
