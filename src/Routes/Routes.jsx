import { createBrowserRouter } from "react-router";
import Root from "../Root/Root";
import Home from "../pages/Home/Home";
import AllApps from "../pages/Apps/AllApps";
import axios from "axios";
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
        index: true,
        path: "/all-apps",
        Component: AllApps,
        loader: async () => {
          const res = await axios.get("/appData.json");
          return res.data;
        },
      },
    ],
  },
]);
