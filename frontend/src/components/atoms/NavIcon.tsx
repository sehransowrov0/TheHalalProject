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
          className={isActive ? "" : ""}
        >
          {isActive && filledIcon
            ? React.cloneElement(filledIcon, { className: "w-5 h-5 text-primary-forground" })
            : React.cloneElement(icon, { className: "w-5 h-5 text-muted-forground" })
          }
        </Button>
      )}
    </NavLink>
  )
}

