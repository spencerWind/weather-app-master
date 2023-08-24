import React from 'react'

const Navigation = () => {
  return (
    <div className='flex flex-row items-center justify-between h-16'>
        <h1 className='font-black text-xl text-primary'>Weather App</h1>
        <div className='font-bold'>
            <button className='mr-8 underline'>Home</button>
            <button className='underline'>Add</button>
        </div>
    </div>
  )
}

export default Navigation