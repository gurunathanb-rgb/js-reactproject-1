import { createBrowserRouter, RouterProvider } from "react-router";
import HomeWrappers from "./wrappers/HomeWrappers";
import Register from "./Page/Register";
import Login from "./Page/Login";
import Home from "./Page/Home";

const router = createBrowserRouter([
  {
      path: '/',
      element: <HomeWrappers />,
      children:[
        {
          path:"",
          element: <Home/>

        },
        {
          path:"register",
          element: <Register/>
        },
        {
          path:"login",
          element: <Login/>
        }
        
      ]
    }
  ]);  




export const App = () => {
  return (
    <RouterProvider router={router}/>
  )
}

export default App;
