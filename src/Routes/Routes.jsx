import { createBrowserRouter } from "react-router";
import Root from "../Root/Root";
import Home from "../pages/Home/Home";
import AllApps from "../pages/Apps/AllApps";
import axios from "axios";
import AppDetails from "../pages/Apps/AppDetails";
import { getInsApp } from "../hook/LocalStorage";
import Installation from "../pages/Installation/Installation";
import Loader from "../components/Shared/Loader";
import ApiLoader from "../components/Shared/ApiLoader";
export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    hydrateFallbackElement: <Loader />,
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
          const { data, status } = await axios.get("/appData.json");
          return { data, status };
        },
      },
      {
        path: "/app/:id",
        loader: async ({ params }) => {
          const res = await axios.get("/appData.json");
          const appData = res.data.find(
            (apps) => apps.id === parseInt(params.id),
          );
          return appData;
        },
        Component: AppDetails,
      },
      {
        path: "/installation",
        loader: async () => {
          const getStorage = getInsApp("InstalledApps");
          const res = await axios.get("/appData.json");
          const installedAppData = res.data.filter((app) =>
            getStorage.includes(app.id),
          );
          return installedAppData;
        },
        Component: Installation,
      },
    ],
  },
]);
