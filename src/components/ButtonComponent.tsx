"use client"
import deleteReservation from '@/libs/deleteReservation';
import React, { ReactNode, MouseEventHandler } from 'react';

interface ButtonProps {
  // onClick: MouseEventHandler<HTMLButtonElement>;
  id : string;
  token : string
  children: ReactNode;
}

const ButtonComponent: React.FC<ButtonProps> = ({id,token,children }) => {

  const handleDelete = (id:string , token:string) => {
    console.log(`id : ${id} \ntoken : ${token}`);
    deleteReservation(id,token);
    
  }

  return (
    <button className='bg-red-600 px-4 py-1 m-2 rounded-full' onClick={() => handleDelete(id,token)}>
      {children}
    </button>
  );
};

export default ButtonComponent;
