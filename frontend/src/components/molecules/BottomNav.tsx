import { RiBookOpenFill, RiUserFill, RiUserLine } from "react-icons/ri";
import NavIcon from "../atoms/NavIcon";
import { FiBell, FiBookOpen, FiShoppingCart, FiUser, FiUsers, FiVideo } from "react-icons/fi";
import { HiBell, HiOutlineBell, HiOutlineShoppingCart, HiOutlineUsers, HiOutlineVideoCamera, HiShoppingCart, HiUsers, HiVideoCamera } from 'react-icons/hi2'

{/* bottom navbar container */ }

export default function BottomNav() {
  return (
    <div className="p-2 flex justify-between absolute bottom-0 left-0 right-0 bg-white border border-gray-200 z-50 w-[95%] mx-auto rounded-xl">
      <NavIcon link="/" icon={<FiBookOpen />} filledIcon={<RiBookOpenFill />} />
      <NavIcon link="/profile" icon={<RiUserLine />} filledIcon={<RiUserFill />} />
      <NavIcon link="/friends" icon={<HiOutlineUsers />} filledIcon={<HiUsers />} />
      <NavIcon link="/notifications" icon={<HiOutlineBell />} filledIcon={<HiBell />} />
      <NavIcon link="/video" icon={<HiOutlineVideoCamera />} filledIcon={<HiVideoCamera />} />
      <NavIcon link="/market" icon={<HiOutlineShoppingCart />} filledIcon={<HiShoppingCart} />
    </div>

  )
}

