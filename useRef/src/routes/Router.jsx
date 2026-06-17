import { createBrowserRouter } from "react-router";
import Home from "../components/Home";

import MainLayout from "../layout/MainLayout";
import Services from "../components/services";


export const router = createBrowserRouter([
  {
    path:"/",
    element: <MainLayout/>,

    children:[
      {
        path:"",
        element: <Home/>
      },
      {
        path:"home",
        element: <Home/>
      },
      {
        path:"services",
        element: <Services/>
      }
    ]
  },
 
])


