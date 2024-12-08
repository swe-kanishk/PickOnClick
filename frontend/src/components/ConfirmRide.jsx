import React from 'react'
import { RiUserLocationFill } from "react-icons/ri";
import { MdLocationPin } from "react-icons/md";
import { FaMoneyBill } from "react-icons/fa";

function ConfirmRide({setVehicleFound, setConfirmRidePannel}) {
  return (
    <div>
      <div
        className='flex items-center justify-between gap-6'
      >
         <h3 className="text-2xl font-semibold mb-6">Confirm your ride</h3>
        <button
        onClick={() => setConfirmRidePannel(false)}
          className="outline-none hover:bg-[#237875] bg-[#0e5c59] text-white px-5 py-2 font-medium rounded-lg mb-6"
        >
          cancel
        </button>
      </div>
      <div className="flex flex-col gap-3 justify-between items-center">
        <img className='h-28' src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1555367538/assets/31/ad21b7-595c-42e8-ac53-53966b4a5fee/original/Final_Black.png" alt="" />
        <div className='w-full mt-5'>
          <div className='flex items-center gap-2 border-b-2 p-3'>
            <RiUserLocationFill className='text-2xl' />
            <div>
              <h3 className='text-lg font-medium'>sector-62, block-c</h3>
              <p className='text-gray-500 -mt-1 text-sm'>Noida, UttarPradesh</p>
            </div>
          </div>
          <div className='flex items-center gap-2 border-b-2 p-3'>
            <MdLocationPin className='text-2xl' />
            <div>
              <h3 className='text-lg font-medium'>sector-62, block-c</h3>
              <p className='text-gray-500 -mt-1 text-sm'>Noida, UttarPradesh</p>
            </div>
          </div>
          <div className='flex items-center gap-2 p-3'>
            <FaMoneyBill className='text-2xl' />
            <div>
              <h3 className='text-lg font-medium'>&#8377; 163.00</h3>
              <p className='text-gray-500 -mt-1 text-sm'>Noida, UttarPradesh</p>
            </div>
          </div>
        </div>
      </div>
      <button onClick={() => {
        setVehicleFound(true),
        setConfirmRidePannel(false)
      }} className='bg-green-600 mt-5 text-white px-6 py-2 w-full rounded-lg'>Confirm</button>
    </div>
  )
}

export default ConfirmRide
