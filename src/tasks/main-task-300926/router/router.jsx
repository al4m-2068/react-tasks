import { createBrowserRouter } from "react-router";
import AccountTheme from "../layout/AccountTheme";
import Dashboard from "../pages/Dashboard";
import AuthTheme from "../layout/AuthTheme";
import SignIn from "../pages/auth/SignIn";
import SignUp from "../pages/auth/SignUp";

export const routes = createBrowserRouter([
  {
    path: '/',
    element: <AuthTheme/>,
    children: [
      { path: 'sign-in', element: <SignIn/> },
      { path: 'sign-up', element: <SignUp/> },
    ]
  },
  {
    path: '/',
    element: <AccountTheme/>,
    children: [
      { index: true, element: <Dashboard/> },
    ],
  },
])