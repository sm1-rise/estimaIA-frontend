import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Home from "../pages/Home/Index";



export default function Routes(){
    const routes = createBrowserRouter([
        {
            path: "/home",
            element: <Home/>
        }

        
    ]);

    return <RouterProvider router={routes}/>
}
