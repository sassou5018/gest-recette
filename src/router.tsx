import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/home";
import RootRoute from "./pages/rootRoute";
import { Children } from "react";
import Search from "./pages/search";
import Recette from "./pages/recette";


const router = createBrowserRouter([
    {
        path: "/",
        element:<RootRoute/>,
        children:[
            {
                path: "/",
                element: <Home/>
            },
            {
                path: "/search/:search",
                element: <Search/>
            },
            {
                path: "/recette/:id",
                element: <Recette/>
            }
        ]
    }
])

export default router;