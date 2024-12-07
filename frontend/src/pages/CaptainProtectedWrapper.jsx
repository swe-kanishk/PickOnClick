import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { CaptainDataContext } from "../context/CaptainContext";
import axios from "axios";

function CaptainProtectedWrapper({ children }) {
  const [isLoading, setIsLoading] = useState(true);
  const { setCaptain } = useContext(CaptainDataContext);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCaptainData = async () => {
      const token = localStorage.getItem("token");
      if (!token) {
        navigate("/captain-login");
        return;
      }

      try {
        const response = await axios.get(
          `${import.meta.env.VITE_BASE_URL}/captains/profile`,
          {},
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        if (response.status === 200) {
          setCaptain(response.data.captain);
        }
      } catch (error) {
        console.error("Error fetching captain data:", error);
        localStorage.removeItem("token");
        navigate("/captain-login");
      } finally {
        setIsLoading(false);
      }
    };

    fetchCaptainData();
  }, [navigate, setCaptain]);

  if (isLoading) {
    return <>Loading...</>;
  }

  return <>{children}</>;
}

export default CaptainProtectedWrapper;
