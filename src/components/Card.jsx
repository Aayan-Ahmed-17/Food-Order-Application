import React from 'react'
import { CDN_URL } from '../utilis/constants'

const Card = ({src}) => {
  return (
    <div className='bg-red-600'>
      <img src={CDN_URL + src} alt="img" />
    </div>
  )
}

export default Card
