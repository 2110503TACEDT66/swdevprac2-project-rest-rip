import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import getReservation from '@/libs/getReservation'
import { getServerSession } from 'next-auth';

import React from 'react'

const BookingList = async () => {
  const session = await getServerSession(authOptions) ;


  if (!session) {
    return (
      <div className=''>
        <h1>You are not logged in yet...</h1>
      </div>
    )
  }


  const reservations:ReservationJson = await getReservation(session.user.token);
  // console.log(reservations);

  return (

    <div className='flex flex-col items-center align-center'>
      {reservations.count > 0?  

        reservations.data.map((reservation:ReservationItem)=>(


          <div key={reservation._id} className='my-5 bg-slate-500 rounded-xl p-6 flex flex-col justify-center items-center w-2/5 drop-shadow-2xl'>
            {/* <h1>{reservation.workSpace.constructor.name}</h1> */}
            {session.user.role === 'admin' ?
              <h1>{reservation.user}</h1> :
              ""
            } 

            <h1 className='text-xl font-semibold'>{reservation.workingSpace?.name}</h1> 
            <h1 className='text-sm text-slate-200'>{reservation.workingSpace?.province}</h1> 
            <h1 className='text-sm text-slate-200'>{reservation.workingSpace?.tel}</h1> 
            <h1>Date : {new Date(reservation.apptDate).toLocaleDateString('en-US')}</h1>


            <div className='flex'>
              <button className='bg-yellow-600 px-4 py-1 m-2 rounded-full'>Edit</button>
              <button className='bg-red-600  px-4 py-1 m-2 rounded-full'>Remove</button>
            </div>
            
            
          </div>

        ))

      : "No Reservations"

      }  
    </div>
  )
}

export default BookingList
