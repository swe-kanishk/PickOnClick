import React, { useState } from "react";
import { Link } from "react-router-dom";

function CaptainLogin() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [captainData, setCaptainData] = useState({})
  
    const loginHandler = async(e) => {
      e.preventDefault()
      setCaptainData({
          email: email,
          password: password
      })
      setEmail('')
      setPassword('')
    }
  
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
        <form onSubmit={(e) => loginHandler(e)} className="px-5">
          <h3 className="text-xl font-medium mb-2">What's our email ?</h3>
          <input
            className="bg-[#eeeeee] mb-7 rounded-lg px-4 border py-2 w-full text-lg placeholder:text-base"
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value.trim())}
            placeholder="email@example.com"
          />
          <h3 className="text-xl font-medium mb-2">Enter Password</h3>
          <input
            className="bg-[#eeeeee] mb-7 rounded-lg px-4 border py-2 w-full text-lg placeholder:text-base"
            type="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value.trim())}
            placeholder="password"
          />
          <button type="submit" className="bg-[#111] w-full text-white py-2 mb-7 px-4 rounded-lg">
            Login
          </button>
          <p className="text-center">
            Drive with us?{" "}
            <Link
              to="/signup"
              className="text-blue-500 underline text-sm underline-offset-2"
            >
             sign up as Captain!
            </Link>
          </p>
        </form>
      </div>
      <div className="px-5">
        <Link to="/login" className="bg-[#ffbd17] flex items-center justify-center w-full text-black font-medium py-2 px-4 rounded-lg">
          Login as User
        </Link>
      </div>
    </div>
  )
}

export default CaptainLogin
