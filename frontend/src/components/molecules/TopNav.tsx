import { IoIosSearch } from "react-icons/io"
import { BsChatDots } from "react-icons/bs"
import { RiMenu4Fill } from "react-icons/ri"
import { Button } from "../ui/button"
import { Input } from "../ui/input"
import { useState } from "react"

{/* top nav bar container */ }


export default function TopNav() {
  const [isSeachActive, setIsSearchActive] = useState(true)


  return (
    < div className="bg-primary h-12 text-primary-foreground text-xl p-2 font-edu flex justify-between items-center w-[95%] mx-auto rounded-xl" >
      <span>Projecthalal</span>
      <div className="flex gap-2">
        <Button size="icon" variant="ghost"><IoIosSearch className="h-6 w-6 " /></Button>
        <Button size="icon" variant="ghost"><BsChatDots className="h-5 w-5" /></Button>
        <Button size="icon" variant="ghost"><RiMenu4Fill className="h-6 w-6 " /></Button>
      </div>
    </div >

  )
}

