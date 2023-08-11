import Profile from "../component/pages/Profile";
import Customers from "../component/pages/customers";
import DashBoard from "../component/pages/dashboard";
import Reports from "../component/pages/reports";
import ServiceCategories from "../component/pages/serviceCategories";
import ServiceProvider from "../component/pages/serviceProvider";
import ServiceRequest from "../component/pages/serviceRequest";
import Services from "../component/pages/services";
import MainLayout from "../layout/mainLayout";
import { ROUTE_DEFINATION } from "../utils/routesCostant";

export const PRIVATE_ROUTES = {
  element: <MainLayout />,
  children: [
    {
      path: ROUTE_DEFINATION.BASE,
      title: ROUTE_DEFINATION.BASE,
      element: <DashBoard />,
    },
    {
      path: ROUTE_DEFINATION.CUSTOMER,
      title: ROUTE_DEFINATION.CUSTOMER,
      element: <Customers />,
    },
    {
      path: ROUTE_DEFINATION.SERVICE_REQUEST,
      title: ROUTE_DEFINATION.SERVICE_REQUEST,
      element: <ServiceRequest />,
    },
    {
      path: ROUTE_DEFINATION.SERVICE_PROVIDER,
      title: ROUTE_DEFINATION.SERVICE_PROVIDER,
      element: <ServiceProvider />,
    },
    {
      path: ROUTE_DEFINATION.SERVICE_CATEGORIES,
      title: ROUTE_DEFINATION.SERVICE_CATEGORIES,
      element: <ServiceCategories />,
    },
    {
      path: ROUTE_DEFINATION.SERVICE,
      title: ROUTE_DEFINATION.SERVICE,
      element: <Services />,
    },
    {
      path: ROUTE_DEFINATION.PROFILE,
      title: ROUTE_DEFINATION.PROFILE,
      element: <Profile />,
    },
    {
      path: ROUTE_DEFINATION.REPORTS,
      title: ROUTE_DEFINATION.REPORTS,
      element: <Reports />,
    },
  ],
};
