import React from 'react'
import { CDN_URL } from '../utilis/constants'

const Card = ({src}) => {
  return (
    <div className='bg-red-600 relative aspect-[3/2] sm:w-auto mx-auto'>
      <img src={CDN_URL + src} alt="img" className='absolute inset-0 w-full h-full object-cover rounded-lg border border-black'/>
    </div>
  )
}

export default Card
