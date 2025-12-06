import { createBrowserRouter } from "react-router";
import RootLayout from "../root/RootLayout";
import Home from "../pages/Home";
import Services from "../pages/Services";
import Login from "../pages/Login";
import Register from "../pages/Register";
import PrivateRoute from "./PrivateRoute";
import ServiceDetails from "../pages/ServiceDetails";
import ForgetPass from "../pages/ForgetPass";
import ErrorPage from "../pages/ErrorPage";
import AddListing from "../pages/AddListing";
import MyListings from "../pages/MyListings";
import UpdateService from "../pages/UpdateService";
import MyOrders from "../pages/MyOrders";


const router = createBrowserRouter([
    {
        path: "/",
        errorElement:<ErrorPage></ErrorPage>,
        element: <RootLayout></RootLayout>,
        children:[
            {
                index: true,
                element : <Home></Home>
            },
            {
                path:'/all-services',
                element:<Services></Services>
            },
            {
                path: '/add-services',
                element:<PrivateRoute><AddListing></AddListing></PrivateRoute>
            },
            {
                path: '/my-services',
                element:<PrivateRoute><MyListings></MyListings></PrivateRoute>
            },
            {
                path: '/my-orders',
                element:<PrivateRoute><MyOrders></MyOrders></PrivateRoute>
            },
            {
                path: '/update-services/:id',
                element:<PrivateRoute><UpdateService></UpdateService></PrivateRoute>
            },
            {
                path: '/details/:id',
                element:<PrivateRoute><ServiceDetails></ServiceDetails></PrivateRoute>
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/register',
                element:<Register></Register>
            },         
            {
                path: '/forget/:email?',
                element: <ForgetPass></ForgetPass>
            }
            

        ]
    }
]);
export default router