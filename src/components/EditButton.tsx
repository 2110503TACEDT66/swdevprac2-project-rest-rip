"use client"
import React, { ReactNode, useState } from 'react'
import EditCard from './EditCard';

interface ButtonProps {

    id: string;
    children: ReactNode;
    workingSpaceID: string;
}


const EditButton: React.FC<ButtonProps> = ({ id, children, workingSpaceID }) => {
    const [showEdit, setShowEdit] = useState(false);

    return (
        <div className='bg-yellow-600 px-4 py-1 m-2 rounded-full'>
            <button onClick={() => { setShowEdit(true) }}>
                {children}
            </button>

            {showEdit ?
                <EditCard
                    reservationID={id}
                    workingSpaceID={workingSpaceID}
                    showPopCard={(value: boolean) => {
                        setShowEdit(value);
                    }} />
                : ""
            }

        </div>
    )
}

export default EditButton
