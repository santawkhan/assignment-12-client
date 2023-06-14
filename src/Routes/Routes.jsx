import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home";
import Classes from "../pages/Home/Classes";
import Instructors from "../pages/Home/Home/Instructors/Instructors";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import Dashboars from "../pages/Home/Dashboars";
import PrivateRoute from "./PrivateRoute";
import ManageUsers from "../pages/DashPages/ManageUsers";
import AddClass from "../pages/DashPages/AddClass";
import MyClasses from "../pages/DashPages/MyClasses";
import ManageClasses from "../pages/DashPages/ManageClasses";
import MySelectedClasses from "../pages/DashPages/MySelectedClasses";
import EnrolledClasses from "../pages/DashPages/EnrolledClasses";
import Payment from "../pages/Payment/Payment";

import Feedback from "../pages/Home/Feedback";





export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/class',
                element: <Classes></Classes>
            },
            {
                path: '/instructor',
                element: <Instructors></Instructors>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/SignUp',
                element: <SignUp></SignUp>
            },
            {
                path: '/dash',
                element: <PrivateRoute><Dashboars></Dashboars></PrivateRoute>,
                children: [

                    {
                        path: 'manageUsers',
                        element: <ManageUsers></ManageUsers>
                    },
                    {
                        path: 'addClass',
                        element: <AddClass></AddClass>
                    },
                    {
                        path: 'myClasses',
                        element: <MyClasses></MyClasses>
                    },
                    {
                        path: 'manageClasses',
                        element: <ManageClasses></ManageClasses>
                    },
                    {
                        path: 'selectedClass',
                        element: <MySelectedClasses></MySelectedClasses>
                    },
                    {
                        path: 'enrolled',
                        element: <EnrolledClasses></EnrolledClasses>
                    },
                    {
                        path: 'pay',
                        element: <Payment></Payment>
                    },
                    {
                        path: 'feedback',
                        element: <Feedback></Feedback>
                    },
                ]
            },

        ]
    },

]);