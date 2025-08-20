import { NavLink } from "react-router-dom";
import { GrHome, GrHomeRounded } from "react-icons/gr";
import { CgProfile } from "react-icons/cg";
import { LiaUserFriendsSolid } from "react-icons/lia";
import { RiFolderVideoLine } from "react-icons/ri";
import { MdOutlineStorefront } from "react-icons/md";
import { IoNotificationsOutline } from "react-icons/io5";
import NavIcon from "../atoms/NavIcon";

{/* bottom navbar container */ }

export default function BottomNav() {
  return (
    <div className="p-2 flex justify-between absolute bottom-0 left-0 right-0 bg-white border-t border-gray-200 z-50">
      <NavLink to='/'>
        <NavIcon icon={<GrHome />} />
      </NavLink>
      <NavLink to='/profile'>
        <NavIcon icon={<CgProfile />} />
      </NavLink>
      <NavLink to='/friends'>
        <NavIcon icon={<LiaUserFriendsSolid />} />
      </NavLink>
      <NavLink to='/notifications'>
        <NavIcon icon={<IoNotificationsOutline />} />
      </NavLink>
      <NavLink to='/video'>
        <NavIcon icon={<RiFolderVideoLine />} />
      </NavLink>
      <NavLink to='/market'>
        <NavIcon icon={<MdOutlineStorefront />} />
      </NavLink>
    </div>

  )
}

