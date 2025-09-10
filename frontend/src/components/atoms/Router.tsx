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
import ProfilePage from "@/pages/ProfilePage"


export default createBrowserRouter([
  {
    path: "/home",
    element: <><Navbar /><Home /></>
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
        <ProfilePage />
      </PrivateRoute>
    ),
  },
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
    element: <><Navbar /><Home /> </>
  },
  {
    path: "/profile",
    element: <><Navbar /><Profile /></>
  },
  {
    path: "/Friends",
    element: <><Navbar /><Friends /></>
  },
  {
    path: "/notifications",
    element: <><Navbar /><Notifications /></>
  },
  {
    path: "/video",
    element: <><Navbar /><Videoes /></>
  },
  {
    path: "/market",
    element: <><Navbar /><Market /></>
  },
  {
    path: "/setting",
    element: <><Navbar /><Setting /></>
  }
])


