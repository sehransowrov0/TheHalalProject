import { NavLink } from "react-router-dom";
import { GrHomeRounded } from "react-icons/gr";
import { CgProfile } from "react-icons/cg";
import { LiaUserFriendsSolid } from "react-icons/lia";
import { RiFolderVideoLine } from "react-icons/ri";
import { MdOutlineStorefront } from "react-icons/md";
import { IoNotificationsOutline } from "react-icons/io5";

{/* bottom navbar container */ }

export default function BottomNav() {
  return (
    <div className="p-2 flex justify-between">
      <NavLink to='/'>
        <GrHomeRounded />
      </NavLink>
      <NavLink to='/profile'>
        <CgProfile />
      </NavLink>
      <NavLink to='/friends'>
        <LiaUserFriendsSolid />
      </NavLink>
      <NavLink to='/notifications'>
        <IoNotificationsOutline />
      </NavLink>
      <NavLink to='/video'>
        <RiFolderVideoLine />
      </NavLink>
      <NavLink to='/market'>
        <MdOutlineStorefront />
      </NavLink>
    </div>

  )
}

