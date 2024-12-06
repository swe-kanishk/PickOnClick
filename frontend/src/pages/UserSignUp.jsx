import React, { useState } from "react";
import { Link } from "react-router-dom";

function UserSignup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [userData, setUserData] = useState({})

  const signupHandler = async(e) => {
    e.preventDefault()
    setUserData({
        email: email,
        password: password,
        fullname: {
            firstname: firstname,
            lastname: lastname
        }
    })
    setEmail('')
    setPassword('')
    setFirstname('')
    setLastname('')
  }

  return (
    <div className="py-7 flex flex-col justify-between h-screen">
      <div>
        <div className="pb-5 flex items-center font-bold text-[#197d76] text-lg">
          <img
            className="h-[4rem] object-cover overflow-hidden"
            src="https://png.pngtree.com/png-clipart/20230924/original/pngtree-vector-icon-of-a-taxi-ride-booking-service-on-a-white-png-image_12748389.png"
            alt="logo"
          />{" "}
           <span className="relative right-2">PickOnClick !</span>
        </div>
        <form onSubmit={(e) => signupHandler(e)} className="px-5">
          <h3 className="text-xl font-medium mb-2">What's your name ?</h3>
          <div className=" flex items-center gap-3 mb-5">
          <input
            className="bg-[#eeeeee] rounded-lg px-4 border py-2 w-1/2 text-lg placeholder:text-sm"
            type="text"
            required
            value={firstname}
            onChange={(e) => setFirstname(e.target.value.trim())}
            placeholder="FirstName"
          />
          <input
            className="bg-[#eeeeee] rounded-lg px-4 border py-2 w-1/2 text-lg placeholder:text-sm"
            type="text"
            required
            value={lastname}
            onChange={(e) => setLastname(e.target.value.trim())}
            placeholder="LastName"
          />
          </div>
          <h3 className="text-xl font-medium mb-2">What's your email ?</h3>
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
          <button type="submit" className="bg-[#111] w-full text-white py-2 mb-5 px-4 rounded-lg">
            Signup
          </button>
          <p className="text-center">
            Already on PickOnClick?{" "}
            <Link
              to="/login"
              className="text-blue-500 underline text-sm underline-offset-2"
            >
              Login
            </Link>
          </p>
          <p className="text-[12px] text-gray-500 py-4 text-center leading-tight">Join us today to drive or ride with ease! Captains earn flexibly with great support, and riders enjoy seamless, affordable travel. Be part of the movement shaping the future of transportation!</p>
        </form>
      </div>
      <div className="px-5">
        <Link to="/captain-signup" className="bg-[#188982] flex items-center justify-center w-full text-white py-2 px-4 rounded-lg">
          Singup as Captain
        </Link>
      </div>
    </div>
  );
}

export default UserSignup;