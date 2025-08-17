import { IoIosSearch } from "react-icons/io"
import { BsChatDots } from "react-icons/bs"
import { RiMenu4Fill } from "react-icons/ri"

{/* top nav bar container */ }


export default function TopNav() {
  return (
    < div className="bg-blue-900 text-white text-xl p-2 font-edu flex justify-between" >
      <span>Projecthalal</span>
      <div className="flex gap-2">
        <span><IoIosSearch className="h-6 w-6 " /></span>
        <span><BsChatDots className="h-5 w-5" /></span>
        <span><RiMenu4Fill className="h-6 w-6 " /></span>
      </div>
    </div >

  )
}

