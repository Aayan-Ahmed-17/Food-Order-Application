import React from 'react'
import useFetchAllData from '../../hooks/useFetchAllData'
import useFetchRestaurants from '../../hooks/useFetchRestaurants'

const Temp = () => {
    const res = useFetchAllData()
    const filtermenu = useFetchRestaurants()
    console.log(res)
    console.log(filtermenu)
  return (
    <div>
      
    </div>
  )
}

export default Temp
