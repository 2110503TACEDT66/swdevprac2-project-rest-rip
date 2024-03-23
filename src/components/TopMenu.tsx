import React from 'react'
import TopMenuItem from './TopMenuItem'

import { getServerSession } from 'next-auth'
import { authOptions } from '@/app/api/auth/[...nextauth]/route'
import { Link } from '@mui/material'
import getUserProfile from '@/libs/getUserProfile'

const TopMenu = async () => {

  const session = await getServerSession(authOptions);
  // if(!session || !session.user.token) return null;
  // console.log(session.user.token);
  if(session && session.user.token){
    var profile = await getUserProfile(session.user.token);
  }

  return (
    <div className='flex justify-between items-center px-8 gap-10 bg-slate-700 rounded-full mt-4 mx-4' style={{height:"7vh"}}>

      <div className='flex justify-center gap-5'> 
        <div className='  '>
        <TopMenuItem title = 'Home' href='/'/>
        </div>

        <TopMenuItem title = 'Booking' href='/booking'/>
        <TopMenuItem title = 'My Booking' href='/mybooking'/>
      </div>
     
       

        {
        session ? 
        <Link href = '/api/auth/signout' className='no-underline'>
          <div className='font-Prompt text-md px-3 py-1 text-white no-underline'>
            Sign-Out   {profile.data.name}
          </div>
        </Link>  : 
        <div className='flex'>
            <Link href = '/api/auth/signin' className='no-underline'>
              <div className='font-Prompt text-lg px-3 py-1 text-white  no-underline'>
                Sign-In
              </div>
            </Link> 
            <Link href = '/api/auth/new-user' className='no-underline'>
              <div className='font-Prompt text-lg px-3 py-1 text-white  no-underline'>
                Sign-Up
              </div>
            </Link> 
        </div>
          
        
        
      }

        {/* <img src='/img/logo.png' className='w-auto h-full p-2'></img> */}
    </div>
  )
}

export default TopMenu
