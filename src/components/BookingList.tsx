// "use client"

// import { removeBooking } from "@/redux/features/bookSlice";
// import { useAppSelector } from "@/redux/store"
// import { AppDispatch } from "@/redux/store";
// import { useDispatch } from "react-redux"

// export default function BookingList () {
//     const bookItems = useAppSelector((state) => state.bookSlice.bookItems);
//     const dispatch = useDispatch<AppDispatch>();
//     console.log(bookItems);
//     return (
//         <>
//             {bookItems.length > 0?
//                 bookItems.map((reservationItem) => (
//                     <div className="bg-slate-700 rounded-xl m-4 p-6 flex justify-center flex-col items-center text-white " key = {reservationItem.id}>
//                         <div className="bg-slate-500 rounded-lg px-4 py-2 text-white w-1/4 items-center flex flex-col justify-center">

//                             <div className="flex gap-4">
//                                 <h1>{reservationItem.name}</h1>
//                                 <h1>{reservationItem.surname}</h1>
//                             </div>
                            

//                             <h1>{reservationItem.id}</h1>
//                             <h1>{reservationItem.hospital}</h1>
                            
//                             <h1>{reservationItem.bookDate}</h1>

//                             <button className="bg-red-600 px-4 py-2 rounded-xl my-2" 
//                             onClick={() => dispatch(removeBooking(reservationItem.id))}
//                             >
//                                 remove from booking
//                             </button>
//                         </div>
//                     </div>
//                 ) ): <div>No Vaccine Booking</div>
//             }
//         </>
//     )
// }