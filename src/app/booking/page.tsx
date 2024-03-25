// 'use client'
// import DateReserve from '@/components/DateReserve'
// import React, { useState } from 'react'
// import { MenuItem, Select, TextField } from '@mui/material'

// import { Dayjs } from 'dayjs'

// // import { useDispatch } from 'react-redux'
// // import { AppDispatch } from '@/redux/store'

// // import { addBooking } from '@/redux/features/bookSlice'
// // import { BookingItem } from '../../../interface'
// import dayjs from 'dayjs';
// import { finished } from 'stream'

// const page =  () => {

  


//   const [name, setName] = useState<string|null>("");
//   const [surname, setSurname] = useState<string|null>("");
//   const [hospital, setHospital] = useState<string|null>("");
//   const [citizenID, setCitizenID] = useState<string|null>("");
//   const [bookingDate, setBookingDate] = useState<Dayjs|null>(null);

//   // const dispatch = useDispatch<AppDispatch>();  

//   // const makeBooking = () => {
//   //   if( name && surname && hospital && bookingDate && citizenID){
      
//   //     const item:BookingItem = {
//   //       name : name,
//   //       surname : surname,
//   //       id : citizenID,
//   //       hospital : hospital,
//   //       bookDate :  dayjs(bookingDate).format('YYYY/MM/DD'),

//   //     }
//   //     // console.log(item);
//   //     dispatch(addBooking(item));

//   //   }
//   // };
//   return (
//     <div className='m-6 bg-slate-700 rounded-2xl flex flex-col justify-center p-4 items-center'>

        

//         <div className='p-4  flex justify-center w-1/3 flex-col items-center bg-white rounded-lg'>
          
//           <h1 className='font-semibold text-black'>Vaccine Booking</h1>
//           <div className='w-full justify-center'>
//           <div className='my-4'>
//         <div className='space-y-3 flex flex-col text-slate-500 px-4'>
//             <h2>Name</h2>
//             <TextField variant='standard' name='Name' label='Name' onChange={(e) => {setName(e.target.value);}}></TextField>
//             <h2>Surname</h2>
//             <TextField variant='standard' name='Surname' label='Surname' onChange={(e) => {setSurname(e.target.value);}}></TextField>
//             <h2>ID</h2>
//             <TextField variant='standard' name='Citizen ID' label='Citizen ID' onChange={(e) => {setCitizenID(e.target.value);}}></TextField>
//             <h2>Hospital</h2>
//             <Select variant='standard'  id='hospital' value={hospital} onChange={(e) => {setHospital(e.target.value);}} className='text-black'>
//                 <MenuItem value='Chula'>Chulalongkorn Hospital</MenuItem>
//                 <MenuItem value='Rajavithi'>Rajavithi Hospital</MenuItem>
//                 <MenuItem value='Thammasat'>Thammasat University Hospital</MenuItem>
//             </Select>
    
//             <DateReserve onDateChange={(value:Dayjs)=>{setBookingDate(value); }}/>
//             <div className='flex justify-center'>
//                 <button className='text-white bg-slate-500 w-1/3 rounded-full py-2' name='Book Vaccine'>Booking Space</button>
//                 {/* onClick={() => {makeBooking(); alert("Booking Finished")}}>Book Vaccine</button> */}
//             </div>
            
//         </div>
//     </div>
 
//           </div>

//         </div>
//     </div>
//   )
// }

// export default page
