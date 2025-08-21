import { NavLink } from "react-router-dom"
import { Button } from "../ui/button"
import React from "react"

interface NavIconType {
  link: string
  icon: React.ReactElement
  filledIcon?: React.ReactElement  // optional filled version
}

export default function NavIcon({ icon, filledIcon, link }: NavIconType) {
  return (
    <NavLink to={link} end>
      {({ isActive }) => (
        <Button
          variant={isActive ? "default" : "ghost"}
          className={isActive ? "bg-primary" : ""}
        >
          {isActive && filledIcon
            ? React.cloneElement(filledIcon, { className: "w-5 h-5 text-blue-600" })
            : React.cloneElement(icon, { className: "w-5 h-5 text-gray-500" })
          }
        </Button>
      )}
    </NavLink>
  )
}

