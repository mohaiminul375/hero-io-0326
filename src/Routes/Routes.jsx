import { createBrowserRouter } from "react-router";
import Root from "../Root/Root";
import Home from "../pages/Home/Home";
import AllApps from "../pages/Apps/AllApps";
import axios from "axios";
import AppDetails from "../pages/Apps/AppDetails";
import { getInsApp } from "../hook/LocalStorage";
import Installation from "../pages/Installation/Installation";
import Loader from "../components/Shared/Loader";
import ErrorPage from "../pages/ErrorPage";
export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    hydrateFallbackElement: <Loader />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        path: "/",
        Component: Home,
        loader: async () => {
          const { data, status } = await axios.get("/appData.json");
          return { data, status };
        },
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
          const { data, status } = await axios.get("/appData.json");
          const appData = data?.find((apps) => apps.id === parseInt(params.id));
          console.log(appData);
          return { appData, status };
        },
        Component: AppDetails,
      },
      {
        path: "/installation",
        loader: async () => {
          const getStorage = getInsApp("InstalledApps");
          const { data, status } = await axios.get("/appData.json");
          if (status !== 200) return <Loader />;
          const installedAppData = await data.filter((app) =>
            getStorage.includes(app.id),
          );
          return { installedAppData, status };
        },
        Component: Installation,
      },
    ],
  },
]);
