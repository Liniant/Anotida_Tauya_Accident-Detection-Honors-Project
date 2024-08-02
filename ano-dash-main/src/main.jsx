import React from 'react'
import ReactDOM from 'react-dom/client'
import "./index.css"
import {NextUIProvider} from '@nextui-org/react'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Dashboard from "./Dashboard.jsx";
import SignUp from "./SignUp.jsx";
import SignIn from "./SignIn.jsx";
import Messages from "./Messages.jsx";
import UserManagement from "./UserManagement.jsx";


const route= createBrowserRouter([
    {
        path: "/",
        element: <SignIn/>
    },
    {
        path:"/dashboard" ,
        element: <Dashboard/>
    },
    {
        path: "/signup",
        element: <SignUp/>
    },
    {
        path:"/signin",
        element: <SignIn/>
    },
    {
        path:"/messages",
        element: <Messages/>
    },
    {
        path:"/users",
        element: <UserManagement/>
    }
    ])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <NextUIProvider>
          <RouterProvider router={route} />
      </NextUIProvider>
  </React.StrictMode>,
)
