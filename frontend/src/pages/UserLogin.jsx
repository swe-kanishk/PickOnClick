import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserDataContext } from "../context/UserContext";
import axios from "axios";

function UserLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const { user, setUser } = React.useContext(UserDataContext)

  const loginHandler = async(e) => {
    e.preventDefault()
    const userData = {
        email: email,
        password: password
    }
    try {
        const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/users/login`, userData);
        if(response.status === 200 ) {
          const data = response.data
          setUser(data.user)
          localStorage.setItem('token', data.token)
          navigate('/home')
        }
      } catch (error) {
          console.log(error)
      } finally {
        setEmail("");
        setPassword("");
      }
  }

  return (
    <div className="py-7 flex flex-col justify-between h-screen">
      <div>
        <div className="pb-12 flex items-center font-bold text-[#197d76] text-lg">
          <img
            className="h-[4rem] object-cover overflow-hidden"
            src="https://png.pngtree.com/png-clipart/20230924/original/pngtree-vector-icon-of-a-taxi-ride-booking-service-on-a-white-png-image_12748389.png"
            alt="logo"
          />{" "}
           <span className="relative right-2">PickOnClick !</span>
        </div>
        <form onSubmit={(e) => loginHandler(e)} className="px-5">
          <h3 className="text-xl font-medium mb-2">What's your email ?</h3>
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
            New here?{" "}
            <Link
              to="/signup"
              className="text-blue-500 underline text-sm underline-offset-2"
            >
              Create new Account
            </Link>
          </p>
        </form>
      </div>
      <div className="px-5">
        <Link to="/captain-login" className="bg-[#188982] flex items-center justify-center w-full text-white py-2 px-4 rounded-lg">
          Login as Captain
        </Link>
      </div>
    </div>
  );
}

export default UserLogin;