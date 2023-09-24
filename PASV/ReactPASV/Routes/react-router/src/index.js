import React from "react";
import ReactDOM from "react-dom/client";
import {Link} from "react-router-dom";
import {
    createBrowserRouter,
    RouterProvider,
    Route,
    Outlet,
} from "react-router-dom";
import "./index.css";
import CounterReact from "./components/CounterReact";
import Home from "./components/Home";
import { BrowserRouter } from "react-router-dom";


const router = createBrowserRouter([

    {
        path: '/',
        element: <div>
            <Link to='/' >Home</Link>
            <Link to='/counter'>Counter</Link>
        </div>
    },
    {
        path: '/',
        element: <Home/>
    },
    {
        path: '/counter',
        element: <CounterReact/>
    },


]);

ReactDOM.createRoot(document.getElementById("root")).render(

        <RouterProvider router={router}/>


);
