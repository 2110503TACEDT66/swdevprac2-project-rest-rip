import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import deleteReservation from '@/libs/deleteReservation';
import getReservation from '@/libs/getReservation'
import { getServerSession } from 'next-auth';

import React, { useState } from 'react'
import ButtonComponent from './ButtonComponent';
import getUserProfile from '@/libs/getUserProfile';
import EditButton from './EditButton';

const BookingList = async () => {
  const session = await getServerSession(authOptions) ;


  if (!session) {
    return (
      <div className=''>
        <h1>You are not logged in yet...</h1>
      </div>
    )
  }

  const user = await getUserProfile(session.user.token);
  //
  const reservations:ReservationJson = await getReservation(session.user.token);

  return (

    <div className='flex flex-col justify-center items-center align-center w-full h-full'>
      {reservations.count > 0?  

        reservations.data.map((reservation:ReservationItem)=>(


          <div key={reservation._id} className='my-4 bg-slate-500 rounded-xl px-4 py-2 flex flex-col justify-center items-center h-[40vh] w-2/5 drop-shadow-2xl'>
            {/* <h1>{reservation.workSpace.constructor.name}</h1> */}
            {user.data.role === 'admin' ?
              <h1>User ID : {reservation.user}</h1>
              :
              ""
            } 
            <h1 className='mb-4'>Reservation ID : {reservation._id}</h1>
            <h1 className='text-xl font-semibold'>{reservation.workingSpace?.name}</h1> 
            <h1 className='text-sm text-slate-200'>{reservation.workingSpace?.province}</h1> 
            <h1 className='text-sm text-slate-200'>{reservation.workingSpace?.tel}</h1> 
            <h1>Date : {new Date(reservation.apptDate).toLocaleDateString('en-US')}</h1>


            <div className='flex mt-4'>
              <EditButton key={reservation._id} id={reservation._id||""}  workingSpaceID={reservation.workingSpace?._id||""} >
                EDIT
              </EditButton>
              <ButtonComponent key={reservation._id} id={reservation._id||""} token={session.user.token}>
                DELETE
              </ButtonComponent>
            </div>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      
            
            
          </div>

        ))

      :
      <div className='flex flex-col justify-center items-center h-full w-full'>
        No Reservations ...
      </div>


      }  
    </div>
  )
}

export default BookingList
