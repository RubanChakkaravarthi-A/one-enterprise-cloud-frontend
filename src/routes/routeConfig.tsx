import LandingPage from "../pages/LandingPage";
import Login from "../pages/Login";
import Register from "../pages/Register";

import Dashboard from "../pages/Dashboard";

import Employees from "../pages/employee/Employees";
import EmployeeDetails from "../pages/employee/EmployeeDetails";

import Attendance from "../pages/attendance/Attendance";

import LeaveManagement from "../pages/leave/LeaveManagement";
import LeaveApproval from "../pages/leave/LeaveApproval";


import DashboardLayout from "../components/layout/DashboardLayout";

import ProtectedRoute from "./ProtectedRoute";




export const routeConfig = [

  {
    path: "/",
    element: <LandingPage />,
  },



  {
    path: "/login",
    element: <Login />,
  },



  {
    path: "/register",
    element: <Register />,
  },





  {
    path: "/dashboard",

    element: (

      <ProtectedRoute>

        <DashboardLayout />

      </ProtectedRoute>

    ),



    children: [


      {
        index: true,
        element: <Dashboard />,
      },



      {
        path: "employees",
        element: <Employees />,
      },



      {
        path: "employee-details/:id",
        element: <EmployeeDetails />,
      },



      {
        path: "attendance",
        element: <Attendance />,
      },



      {
        path: "leave",
        element: <LeaveManagement />,
      },



      {
        path: "leave-approval",
        element: <LeaveApproval />,
      },


    ],

  },


];