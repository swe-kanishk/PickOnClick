import React from "react";
import { FaMoneyBill } from "react-icons/fa";
import { MdLocationPin } from "react-icons/md";
import { RiUserLocationFill } from "react-icons/ri";

function WaitingForDriver() {
  return (
    <div>
      <div className="flex items-center justify-between gap-6">
        <h3 className="text-2xl font-semibold mb-6">Looking for a driver</h3>
        <button className="outline-none hover:bg-[#237875] bg-[#0e5c59] text-white px-5 py-2 font-medium rounded-lg mb-6">
          cancel
        </button>
      </div>
      <div className="flex flex-col gap-3 justify-between items-center">
        <div className="flex justify-between items-center w-full">
          <div className="flex items-center">
            <img className="h-12" src="https://www.transparentpng.com/download/user/gray-user-profile-icon-png-fP8Q1P.png" alt="" />
          <img
            className="h-16 relative right-5"
            src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1555367538/assets/31/ad21b7-595c-42e8-ac53-53966b4a5fee/original/Final_Black.png"
            alt=""
          />
          </div>
          <div className="text-right">
            <h2 className="text-lg font-medium">Sarthak Pandey</h2>
            <h4 className="text-xl font-semibold -mt-2 -mb-1">KA15AK00-0</h4>
            <p className="text-sm text-gray-500">Suzuki maruti alto</p>
          </div>
        </div>
        <div className="w-full mt-5">
          <div className="flex items-center gap-2 border-b-2 p-3">
            <RiUserLocationFill className="text-2xl" />
            <div>
              <h3 className="text-lg font-medium">sector-62, block-c</h3>
              <p className="text-gray-500 -mt-1 text-sm">Noida, UttarPradesh</p>
            </div>
          </div>
          <div className="flex items-center gap-2 border-b-2 p-3">
            <MdLocationPin className="text-2xl" />
            <div>
              <h3 className="text-lg font-medium">sector-62, block-c</h3>
              <p className="text-gray-500 -mt-1 text-sm">Noida, UttarPradesh</p>
            </div>
          </div>
          <div className="flex items-center gap-2 p-3">
            <FaMoneyBill className="text-2xl" />
            <div>
              <h3 className="text-lg font-medium">&#8377; 163.00</h3>
              <p className="text-gray-500 -mt-1 text-sm">Noida, UttarPradesh</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WaitingForDriver;
