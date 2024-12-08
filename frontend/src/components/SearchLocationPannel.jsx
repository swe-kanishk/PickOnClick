import React from 'react'
import locations from './locations';

function SearchLocationPannel({setVehiclePannel, setPannelOpen}) {
  return (
    <div className='flex flex-col'>
        {
            locations.map((location) => {
                return (
                    <div key={location.name} onClick={() => {setVehiclePannel(true), setPannelOpen(false)}} className='flex items-center border-2 active:border-black p-2 rounded-xl border-gray-100 justify-start my-2 gap-2'>
                    <h2 className='p-2 bg-[#eee] text-lg rounded-full'>{location.icon}</h2>
                    <h4 className='font-medium'>{location.address}</h4>
                </div>
                )
            })
        }
    </div>
  )
}

export default SearchLocationPannel
