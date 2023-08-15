import {
    createBrowserRouter,
  } from "react-router-dom";
import Home from "../Home/Home/Home";
import About from "../About/About";
import Main from "../Layout/Main";

  const router = createBrowserRouter([
    {
      path: "/",
      element:  <Main></Main> ,
      children: [
        {
          path: "/",
          element: <Home></Home>
        },
        {
        path: "about",
        element: <About></About>        }
      ]
    }
    
  ]);
  export default router;