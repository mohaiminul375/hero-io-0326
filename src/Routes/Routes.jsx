import { createBrowserRouter } from "react-router";
import Root from "../Root/Root";
import Home from "../pages/Home/Home";
export const router = createBrowserRouter([
  {
    path: "/",
    Component:Root,
    errorElement:<p></p>,
    children:[
        {
            index:true,
            path:'/',
            Component:Home
        }
    ]
  },
]);
