import { createBrowserRouter, RouterProvider } from "react-router";

const router = createBrowserRouter([

     {
      path: '/',
      element: <h1>Welcome to React Page</h1>
     },

     {
      path:'/contact-us',
      element: <h1> Contact Us</h1>
     },

     {
      path:'/AboutUs',
      element: <h1>List of Customer</h1>
     }

]);



export const App = () => {
  return (
    <RouterProvider router={router}/>
  )
}

export default App;
