import React, { useRef, useState } from "react";
import { RiArrowDownWideFill } from "react-icons/ri";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import SearchLocationPannel from "../components/SearchLocationPannel";
import { FaUser } from "react-icons/fa";
import VehiclePannel from "../components/VehiclePannel";
import ConfirmRide from "../components/ConfirmRide";
import LookingForDriver from "../components/LookingForDriver";
import WaitingForDriver from "../components/WaitingForDriver";

function Home() {
  const [pickup, setPickup] = useState("");
  const [destination, setDestination] = useState("");
  const [pannelOpen, setPannelOpen] = useState(false);
  const [vehiclePannel, setVehiclePannel] = useState(false);
  const [confirmRidePannel, setConfirmRidePannel] = useState(false)
  const [vehicleFound, setVehicleFound] = useState(false)
  const [driverWaitingPannel, setDriverWaitingPannel] = useState(true)

  const pannelRef = useRef(null);
  const vehiclePannelRef = useRef(null);
  const confirmRideRef = useRef(null)
  const pannelCloseRef = useRef(null);
  const vehicleFoundRef = useRef(null);
  const driverWaitingRef = useRef(null)

  const submitHandler = (e) => {
    e.preventDefault();
  };

  useGSAP(
    function () {
      if (pannelOpen) {
        gsap.to(pannelRef.current, {
          height: "80%",
          padding: 24,
        });
        gsap.to(pannelCloseRef.current, {
          rotate: "0",
        });
      } else {
        gsap.to(pannelRef.current, {
          height: "0%",
          padding: 0,
        });
        gsap.to(pannelCloseRef.current, {
          rotate: "180",
        });
      }
    },
    [pannelOpen]
  );

  useGSAP(
    function () {
      if (vehiclePannel) {
        gsap.to(vehiclePannelRef.current, {
          y: "0",
        });
      } else {
        gsap.to(vehiclePannelRef.current, {
          y: "100%",
        });
      }
    },
    [vehiclePannel]
  );

  useGSAP(
    function () {
      if (confirmRidePannel) {
        gsap.to(confirmRideRef.current, {
          y: "0",
        });
      } else {
        gsap.to(confirmRideRef.current, {
          y: "100%",
        });
      }
    },
    [confirmRidePannel]
  );

  useGSAP(
    function () {
      if (vehicleFound) {
        gsap.to(vehicleFoundRef.current, {
          y: "0",
        });
      } else {
        gsap.to(vehicleFoundRef.current, {
          y: "100%",
        });
      }
    },
    [vehicleFound]
  );

  useGSAP(
    function () {
      if (driverWaitingPannel) {
        gsap.to(driverWaitingRef.current, {
          y: "0",
        });
      } else {
        gsap.to(driverWaitingRef.current, {
          y: "100%",
        });
      }
    },
    [driverWaitingPannel]
  );

  return (
    <div className="h-screen relative overflow-hidden">
      <div className="bg-black px-6 rounded-3xl py-2 justify-center flex absolute items-center font-bold text-[#22aea0] text-sm top-3 left-3">
        <span>PickOnClick !</span>
      </div>
      <div className="h-screen w-full">
        <img
          className="h-full w-full object-cover"
          src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif"
        />
      </div>
      <div className="absolute flex flex-col top-0 justify-end h-screen w-full">
        <div className="h-[20%] p-5 bg-white relative">
          <button
            ref={pannelCloseRef}
            onClick={() => setPannelOpen(!pannelOpen)}
            className="text-3xl absolute top-1 outline-none left-0 w-full justify-center flex items-center"
          >
            <RiArrowDownWideFill />
          </button>
          <h4 className="text-2xl mt-2 font-semibold">Find a trip</h4>
          <form onSubmit={(e) => submitHandler(e)}>
            <div className="line h-16 w-1 absolute top-[5.4rem] left-[2.5rem] bg-gray-800 rounded-full"></div>
            <input
              onClick={() => setPannelOpen(true)}
              value={pickup}
              onChange={(e) => setPickup(e.target.value.trim())}
              type="text"
              className="bg-[#eee] w-full px-12 py-2 text-base rounded-lg mt-5"
              placeholder="Add a pick-up location"
            />
            <input
              onClick={() => setPannelOpen(true)}
              value={destination}
              onChange={(e) => setDestination(e.target.value.trim())}
              type="text"
              className="bg-[#eee] w-full px-12 py-2 text-base rounded-lg mt-3"
              placeholder="Add a pick-up location"
            />
          </form>
        </div>
        <div
          ref={pannelRef}
          className={`bg-white h-0 overflow-y-scroll scrollbar-none`}
        >
          <SearchLocationPannel setVehiclePannel={setVehiclePannel} setPannelOpen={setPannelOpen} />
        </div>
      </div>
      <div
        ref={vehiclePannelRef}
        className="fixed z-10 translate-y-full rounded-t-xl border-t px-3 py-6 left-0 w-full pt-8 bg-white bottom-0"
      >
       <VehiclePannel setConfirmRidePannel={setConfirmRidePannel} setVehiclePannel={setVehiclePannel} />
      </div>
      <div
        ref={confirmRideRef}
        className="fixed z-10 translate-y-full rounded-t-xl border-t px-3 py-6 left-0 w-full pt-8 bg-white bottom-0"
      >
       <ConfirmRide setConfirmRidePannel={setConfirmRidePannel} setVehicleFound={setVehicleFound} />
      </div>
      <div
      ref={vehicleFoundRef}
        className="fixed z-10 translate-y-full rounded-t-xl border-t px-3 py-6 left-0 w-full pt-8 bg-white bottom-0"
      >
       <LookingForDriver setDriverWaitingPannel={setDriverWaitingPannel} setVehicleFound={setVehicleFound} />
      </div>
      <div
      ref={driverWaitingRef}
        className="fixed z-10 rounded-t-xl border-t px-3 py-6 left-0 w-full pt-8 bg-white bottom-0"
      >
       <WaitingForDriver setDriverWaitingPannel={setDriverWaitingPannel} />
      </div>
    </div>
  );
}

export default Home;
