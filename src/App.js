import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Main from "./pages/Main";
import Home from "./pages/Home";
import About from "./pages/About";
import Service from "./pages/Service";
import Project from "./pages/Project";
import Contact from "./pages/Contact";



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
          },
          {
            path:'about',
            element:<About/>
          },
          {
            path:'service',
            element:<Service/>
          },
          {
            path:'project',
            element:<Project/>
          },
          {
            path:'contact',
            element:<Contact/>
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
