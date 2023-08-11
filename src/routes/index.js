import { useEffect, useState } from "react";
import { PRIVATE_ROUTES } from "./privatRoutes";
import { PUBLIC_ROUTES } from "./publicRoutes";
import { useRoutes } from "react-router-dom";

export const Routes = ({ isLoggedIn }) => {
  const [currentRoutes, setCurrentRoutes] = useState([]);
  useEffect(() => {
    if (isLoggedIn) {
      setCurrentRoutes([PRIVATE_ROUTES]);
    } else {
      setCurrentRoutes([PUBLIC_ROUTES]);
    }
  }, [isLoggedIn]);
  return useRoutes(currentRoutes);
};
