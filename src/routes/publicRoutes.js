import { Navigate } from "react-router-dom";
import LoginComponent from "../component/pages/login";
import LoginLayout from "../layout/loginLayout";
import { ROUTE_DEFINATION } from "../utils/routesCostant";

export const PUBLIC_ROUTES = {
  element: <LoginLayout />,
  children: [
    {
      path: ROUTE_DEFINATION.BASE,
      title: ROUTE_DEFINATION.BASE,
      element: <LoginComponent />,
    },
    {
      path: "*",
      title: "*",
      element: <Navigate to={ROUTE_DEFINATION.BASE} />,
    },
  ],
};
