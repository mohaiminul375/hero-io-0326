import { createBrowserRouter } from "react-router";
import Root from "../Root/Root";
import Home from "../pages/Home/Home";
import AllApps from "../pages/Apps/AllApps";
import axios from "axios";
import AppDetails from "../pages/Apps/AppDetails";
export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <p></p>,
    children: [
      {
        index: true,
        path: "/",
        Component: Home,
      },
      {
        path: "/all-apps",
        Component: AllApps,
        loader: async () => {
          const res = await axios.get("/appData.json");
          return res.data;
        },
      },
      {
        path: "/app/:id",
        loader: async ({ params }) => {
          const res = await axios.get("/appData.json");
          const appData = res.data.find((apps) => apps.id === parseInt(params.id));
          return appData;
        },
        Component: AppDetails,
      },
    ],
  },
]);
