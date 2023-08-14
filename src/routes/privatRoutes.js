import Profile from "../component/pages/Profile";
import AllServiceList from "../component/pages/allServiceList";
import AllServiceRequest from "../component/pages/allServiceRequest";
import AllUserList from "../component/pages/allUserList";
import CreateCategory from "../component/pages/createCategory";
import CreateService from "../component/pages/createService";
import CreateSubCategory from "../component/pages/createSubCategory";
import DashBoard from "../component/pages/dashboard";
import Service from "../component/pages/service";

import ServiceProviderList from "../component/pages/serviceProviderList";
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
      path: ROUTE_DEFINATION.ALL_SERVICE_LIST,
      title: ROUTE_DEFINATION.ALL_SERVICE_LIST,
      element: <AllServiceList />,
    },
    {
      path: ROUTE_DEFINATION.ALL_USER_LIST,
      title: ROUTE_DEFINATION.ALL_USER_LIST,
      element: <AllUserList />,
    },
    {
      path: ROUTE_DEFINATION.ALL_SERVICE_REQUEST,
      title: ROUTE_DEFINATION.ALL_SERVICE_REQUEST,
      element: <AllServiceRequest />,
    },
    {
      path: ROUTE_DEFINATION.CREATE_CATEGORY,
      title: ROUTE_DEFINATION.CREATE_CATEGORY,
      element: <CreateCategory />,
    },
    {
      path: ROUTE_DEFINATION.CREATE_SUB_CATEGORY,
      title: ROUTE_DEFINATION.CREATE_SUB_CATEGORY,
      element: <CreateSubCategory />,
    },
    {
      path: ROUTE_DEFINATION.CREATE_SERVICE,
      title: ROUTE_DEFINATION.CREATE_SERVICE,
      element: <CreateService />,
    },
    {
      path: ROUTE_DEFINATION.SERVICE_PROVIDER_LIST,
      title: ROUTE_DEFINATION.SERVICE_PROVIDER_LIST,
      element: <ServiceProviderList />,
    },
    {
      path: ROUTE_DEFINATION.PROFILE,
      title: ROUTE_DEFINATION.PROFILE,
      element: <Profile />,
    },
    {
      path: ROUTE_DEFINATION.SERVICE,
      title: ROUTE_DEFINATION.SERVICE,
      element: <Service />,
    },
  ],
};
