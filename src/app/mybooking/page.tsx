
import BookingList from "@/components/BookingList";
import { Suspense } from "react";

export default function MyBooking() {
  return (
    <main className="my-4 mx-6 p-6 bg-slate-700  rounded-xl">
      <Suspense fallback ={<h1>Loading...</h1>}>
      <BookingList />
      </Suspense>

    </main>
  );
}
