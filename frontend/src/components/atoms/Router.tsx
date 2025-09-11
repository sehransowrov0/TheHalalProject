import { createBrowserRouter } from "react-router-dom"
import Home from '@/pages/Home'
import Profile from '@/pages/Profile'
import Friends from '@/pages/Friends'
import Notifications from '@/pages/Notifications'
import Videoes from '@/pages/Videoes'
import Market from '@/pages/Market'
import Setting from '@/pages/Setting'
import Navbar from '@/components/organisms/Navbar'
import Login from "@/pages/Login"
import Register from '@/pages/Register'
import PrivateRoute from "./PrivateRouter"


export default createBrowserRouter([
  {
    path: "/register",
    element: <Register />
  },
  {
    path: "/login",
    element: <Login />
  },
  {
    path: "/home",
    element: (
      <PrivateRoute>
        <Navbar />
        <Home />
      </PrivateRoute>
    ),
  },
  {
    path: "/",
    element: (
      <PrivateRoute>
        <Navbar />
        <Home />
      </PrivateRoute>
    ),
  },
  {
    path: "/profile",
    element: (
      <PrivateRoute>
        <Profile />
      </PrivateRoute>
    ),
  },
  {
    path: "/Friends",
    element: (
      <PrivateRoute>
        <Navbar />
        <Friends />
      </PrivateRoute>
    ),
  },
  {
    path: "/notifications",
    element: (
      <PrivateRoute>
        <Navbar />
        <Notifications />
      </PrivateRoute>
    )
  },
  {
    path: "/video",
    element: (
      <PrivateRoute>
        <Navbar />
        <Videoes />
      </PrivateRoute>
    )
  },
  {
    path: "/market",
    element: (
      <PrivateRoute>
        <Navbar />
        <Market />
      </PrivateRoute>
    )
  },
  {
    path: "/setting",
    element: (
      <PrivateRoute>
        <Navbar />
        <Setting />
      </PrivateRoute>
    )
  }
])


