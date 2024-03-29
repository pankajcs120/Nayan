import "./app.scss";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import React, { useEffect, useState } from "react";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Home from "./pages/home/Home";
import Gigs from "./pages/gigs/Gigs";
import Gig from "./pages/gig/Gig";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Add from "./pages/add/Add";
import Orders from "./pages/orders/Orders";
import Messages from "./pages/messages/Messages";
import Message from "./pages/message/Message";
import MyGigs from "./pages/myGigs/MyGigs";
import Profile from "./pages/Profile/Profile";
import AllProperty from "./pages/ManyProperties/ManyProperty";
import About from "./pages/About/about";
import BookingPage from "./pages/BookingPage/BookingPage";
import Appointment from "./pages/Appointment/Appointment";
import {
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import Pay from "./pages/pay/Pay";
import Success from "./pages/success/Success";



function App() {
  const queryClient = new QueryClient();

 

  const Layout = () => {
    return (
      <div className="app">
        <QueryClientProvider client={queryClient}>
          <Navbar />
          <Outlet />
          <Footer />
        </QueryClientProvider> 
        
        
      </div>
    );
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/gigs",
          element: <Gigs />,
        },
        {
          path: "/myGigs",
          element: <MyGigs />,
        },
        {
          path: "/orders",
          element: <Orders />,
        },
        {
          path: "/messages",
          element: <Messages />,
        },
        {
          path: "/message/:id",
          element: <Message />,
        },
        {
          path: "/add",
          element: <Add />,
        },
        {
          path: "/gig/:id",
          element: <Gig />,
        },
        {
          path: "/register",
          element: <Register />,
        },
        {
          path: "/login",
          element: <Login />,
        },
        {
          path: "/pay/:id",
          element: <Pay />,
        },
        {
          path: "/success",
          element: <Success />,
        },
        {
          path: "/profile",
          element: <Profile/> ,
        },
        {
          path: "/allproperty",
          element: <AllProperty/> ,
        },
        {
          path: "/about",
          element: <About/> ,
        },
        // {
        //   path:"/book/:id",
        //   element:<BookingPage/>,
        // },
        // {
        //   path: "/BookingPage/:id",
        //   element: <BookingPage/> ,
        // },
        {
          path:"/book/:id",
          element:<BookingPage/>,
        },
        {
          path: "/appointment",
          element: <Appointment/> ,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
