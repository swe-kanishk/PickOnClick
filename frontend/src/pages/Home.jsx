import React from 'react'
import { Link } from 'react-router-dom'
import { FaArrowRight } from "react-icons/fa";

function Home() {
  return (
    <div>
      <div className="h-screen pt-8 flex justify-between flex-col w-full bg-center bg-[#00A89D] bg-no-repeat bg-[url(https://img.freepik.com/free-vector/taxi-online-service-with-map_1150-39389.jpg)]">
        <p className='ml-8 font-semibold'>PickOnClick !</p>
        <div className='bg-white py-4 pb-7 px-4'>
            <h2 className='text-2xl font-bold'>Get started with PickOnClick</h2>
            <Link to="/login" className='flex items-center justify-center w-full py-3 bg-black text-white gap-3 rounded-lg relative px-3 mt-5'><span>Continue</span> <FaArrowRight className='absolute right-6' /></Link>
        </div>
      </div>
    </div>
  )
}

export default Home
