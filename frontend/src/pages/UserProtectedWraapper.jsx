import React, { useContext, useEffect } from "react";
import { UserDataContext } from "../context/UserContext";
import { useNavigate } from "react-router-dom";

function UserProtectedWraapper({ children }) {
    const token = localStorage.getItem('token')
  const { user } = useContext(UserDataContext);
  const navigate = useNavigate();

    useEffect(() => {
        if (!token) {
            navigate("/login");
          }
    }, [token])
  return <>{children}</>;
}

export default UserProtectedWraapper;
