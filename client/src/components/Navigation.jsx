import React from 'react'
import {useNavigate } from 'react-router-dom'

const Navigation = () => {
  const navigate = useNavigate()

  return (
    <div className='flex flex-row items-center justify-between h-16 p-4'>
        <h1 className='font-black text-xl text-primary'>Weather App</h1>
        <div className='font-bold'>
            <button onClick={() => {navigate("/")}} className='mr-8 underline'>Home</button>
            <button onClick={() => {navigate("/add")}} className='underline'>Add</button>
        </div>
    </div>
  )
}

export default Navigation