import React from "react";
import { FaUser } from "react-icons/fa";

function VehiclePannel({ setVehiclePannel, setConfirmRidePannel }) {
  return (
    <>
      <div className="flex items-center justify-between gap-6">
        <h3 className="text-2xl font-semibold mb-6">Choose a Vehicle</h3>
        <button
          onClick={() => setVehiclePannel(false)}
          className="outline-none hover:bg-[#237875] bg-[#0e5c59] text-white px-5 py-2 font-medium rounded-lg mb-6"
        >
          cancel
        </button>
      </div>
      <div
        onClick={() => {
          setConfirmRidePannel(true), setVehiclePannel(false);
        }}
        className="flex w-full p-3 mb-2 border-2 cursor-pointer rounded-xl bg-gray-100 active:border-black items-center justify-between gap-3"
      >
        <img
          className="w-24"
          src="https://www.uber-assets.com/image/upload/v1699622871/assets/50/b5e341-5426-42fd-acfe-037d63333de5/original/UberBlackXL.png"
          alt=""
        />
        <div className="flex flex-col w-1/2 justify-center items-start">
          <h4 className="flex gap-3 font-medium text-base">
            PickCar{" "}
            <span className="flex items-center gap-1">
              <FaUser />4
            </span>
          </h4>
          <h5 className="text-sm font-medium">2 mins away</h5>
          <p className="text-xs text-gray-500">
            Group travel: comfort, time, and money saved!
          </p>
        </div>
        <h2 className="text-xl font-semibold">&#8377; 262</h2>
      </div>
      <div
        onClick={() => {
          setConfirmRidePannel(true), setVehiclePannel(false);
        }}
        className="flex w-full p-3 mb-2 border-2 cursor-pointer rounded-xl bg-gray-100 active:border-black items-center justify-between gap-3"
      >
        <img
          className="h-14"
          src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1648431773/assets/1d/db8c56-0204-4ce4-81ce-56a11a07fe98/original/Uber_Auto_558x372_pixels_Desktop.png"
          alt=""
        />
        <div className="flex flex-col w-1/2 justify-center items-start">
          <h4 className="flex gap-3 font-medium text-base">
            TukTuk{" "}
            <span className="flex items-center gap-1">
              <FaUser />2
            </span>
          </h4>
          <h5 className="text-sm font-medium">6 mins away</h5>
          <p className="text-xs text-gray-500">
            Affordable rides for city streets!
          </p>
        </div>
        <h2 className="text-xl font-semibold">&#8377; 183</h2>
      </div>
      <div
        onClick={() => {
          setConfirmRidePannel(true), setVehiclePannel(false);
        }}
        className="flex w-full p-3 mb-2 border-2 cursor-pointer rounded-xl bg-gray-100 active:border-black items-center justify-between gap-3"
      >
        <img
          className="h-14"
          src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1649231091/assets/2c/7fa194-c954-49b2-9c6d-a3b8601370f5/original/Uber_Moto_Orange_312x208_pixels_Mobile.png"
          alt=""
        />
        <div className="flex flex-col w-1/2 justify-center items-start">
          <h4 className="flex gap-3 font-medium text-base">
            RideOnMoto{" "}
            <span className="flex items-center gap-1">
              <FaUser />1
            </span>
          </h4>
          <h5 className="text-sm font-medium">just a few, mins away</h5>
          <p className="text-xs text-gray-500">
            Fast & Cheap, solo rides made easy!
          </p>
        </div>
        <h2 className="text-xl font-semibold">&#8377; 92</h2>
      </div>
    </>
  );
}

export default VehiclePannel;
