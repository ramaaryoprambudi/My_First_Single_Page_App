import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../Layouts/Rootlayout";

import Blogs from"../pages/blogs";
import Mysetup from "../pages/mysetup";
import Home from '../pages/index';
import Post from '../pages/blogs/_id';
import About from '../pages/about';
import { posts,postsById } from "../apis/loader";
import ErrorPage from "../pages/ErrorPage";


export const router =createBrowserRouter([
    {
        path:'/',
        element:<RootLayout/>,
        errorElement:<ErrorPage />,
        children:[{
            path:'/',
            element:<Home />,
        },
        {
            path:"/blog",
            element:<Blogs />,
            loader:posts
        },
        {
            path:"/blog/:id",
            element:<Post />,
            loader:postsById
        },
    {
        path:'/about',
        element:<About />
    },
    {
        path:'/mySetup',
        element:<Mysetup />
    }
    ]
    }

])