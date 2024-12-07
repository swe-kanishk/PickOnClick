import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { CaptainDataContext } from "../context/CaptainContext";
import axios from "axios";

function CaptainSignup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [vehicleType, setVehicleType] = useState("");
  const [vehicleCapacity, setVehicleCapacity] = useState("");
  const [vehicleColor, setVehicleColor] = useState("");
  const [vehiclePlate, setVehiclePlate] = useState("");

  const { setCaptain } = useContext(CaptainDataContext);
  const navigate = useNavigate()

  const signupHandler = async (e) => {
    e.preventDefault();
    const captainData = {
      email,
      password,
      fullname: {
        firstname,
        lastname,
      },
      vehicle: {
        vehicleType: vehicleType,
        capacity: vehicleCapacity,
        color: vehicleColor,
        plate: vehiclePlate,
      },
    };

    try {
      const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/captains/register`, captainData)
      if(response.status === 201) {
        const data = response.data
        const {captain, token} = data
        setCaptain(captain)
        localStorage.setItem("token", token)
        navigate('/captain-home')
      }
    } catch (error) {
      console.log(error)
    } finally {
      setEmail("");
      setPassword("");
      setFirstname("");
      setLastname("");
      setVehicleType("");
      setVehicleCapacity("");
      setVehicleColor("");
      setVehiclePlate("");
    }
  };

  return (
    <div className="py-7 flex flex-col justify-between h-screen">
      <div>
        <div className="pb-10 flex items-center font-bold text-[#197d76] text-lg">
          <img
            className="h-[2.5rem] brightness-150 rounded-full overflow-hidden"
            src="https://banner2.cleanpng.com/20191023/qvu/transparent-logo-hand-circle-symbol-icon-bus-driver-png-picture-1838859-bus-driver-1713869797597.webp"
            alt="logo"
          />
          <span className="relative right-2">PickOnClick !</span>
        </div>
        <form onSubmit={signupHandler} className="px-5">
          <h3 className="text-xl font-medium mb-2">What's your name?</h3>
          <div className="flex items-center gap-3 mb-5">
            <input
              className="bg-[#eeeeee] rounded-lg px-4 border py-2 w-1/2 text-lg placeholder:text-sm"
              type="text"
              required
              value={firstname}
              onChange={(e) => setFirstname(e.target.value.trim())}
              placeholder="First Name"
            />
            <input
              className="bg-[#eeeeee] rounded-lg px-4 border py-2 w-1/2 text-lg placeholder:text-sm"
              type="text"
              required
              value={lastname}
              onChange={(e) => setLastname(e.target.value.trim())}
              placeholder="Last Name"
            />
          </div>
          <h3 className="text-xl font-medium mb-2">What's your email?</h3>
          <input
            className="bg-[#eeeeee] mb-5 rounded-lg px-4 border py-2 w-full text-lg placeholder:text-sm"
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value.trim())}
            placeholder="email@example.com"
          />
          <h3 className="text-xl font-medium mb-2">Enter Password</h3>
          <input
            className="bg-[#eeeeee] mb-5 rounded-lg px-4 border py-2 w-full text-lg placeholder:text-sm"
            type="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value.trim())}
            placeholder="password"
          />

          <h3 className="text-xl font-medium mb-2">Vehicle Information</h3>
          <div className="grid grid-cols-2 gap-4 mb-5">
            <select
              className="bg-[#eeeeee] rounded-lg px-4 border py-2 w-full text-lg"
              required
              value={vehicleType}
              onChange={(e) => setVehicleType(e.target.value)}
            >
              <option value="" disabled>
                Select Vehicle Type
              </option>
              <option value="motorcycle">motorcycle</option>
              <option value="car">car</option>
              <option value="auto">auto</option>
            </select>
            <input
              className="bg-[#eeeeee] rounded-lg px-4 border py-2 w-full text-lg placeholder:text-sm"
              type="number"
              required
              value={vehicleCapacity}
              onChange={(e) => setVehicleCapacity(e.target.value)}
              placeholder="Vehicle Capacity (e.g., 4 passengers)"
            />
            <input
              className="bg-[#eeeeee] rounded-lg px-4 border py-2 w-full text-lg placeholder:text-sm"
              type="text"
              required
              value={vehicleColor}
              onChange={(e) => setVehicleColor(e.target.value)}
              placeholder="Vehicle Color"
            />
            <input
              className="bg-[#eeeeee] rounded-lg px-4 border py-2 w-full text-lg placeholder:text-sm"
              type="text"
              required
              value={vehiclePlate}
              onChange={(e) => setVehiclePlate(e.target.value)}
              placeholder="Vehicle Plate Number"
            />
          </div>
          <button
            type="submit"
            className="bg-[#111] w-full text-white py-2 mb-5 px-4 rounded-lg"
          >
            Create Account
          </button>
          <p className="text-center">
            Already on PickOnClick?{" "}
            <Link
              to="/captain-login"
              className="text-blue-500 underline text-sm underline-offset-2"
            >
              Login
            </Link>
          </p>
          <p className="text-[12px] text-gray-500 py-4 text-center leading-tight">
            Drive your way to success! Earn flexibly, enjoy great support, and
            be part of a community that values your time and effort. Sign up as
            a Captain now!
          </p>
        </form>
      </div>
      <div className="px-5">
        <Link
          to="/signup"
          className="bg-[#188982] flex items-center justify-center w-full text-white py-2 px-4 rounded-lg"
        >
          Signup as User
        </Link>
      </div>
    </div>
  );
}

export default CaptainSignup;
