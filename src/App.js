import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Main from "./pages/Main";
import Home from "./pages/Home";



function App() {

  const router = createBrowserRouter(
    [
      {
        path:'/',
        element:<Main/>,
        children:[
          {
            path:'',
            element:<Home/>
          }
        ]
      }
    ] 
  )

  return (
    <RouterProvider router={router}></RouterProvider>
  );
}

export default App;
