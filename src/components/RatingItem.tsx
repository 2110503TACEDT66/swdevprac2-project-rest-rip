import getRating from '@/libs/getRating'
import { Rating } from '@mui/material'
import React from 'react'


const RatingItem = ({id} :{id:string}) => {
    const score = getRating(id);
  return (
    <div>
        <Rating>

        </Rating>
      
    </div>
  )
}

export default RatingItem
