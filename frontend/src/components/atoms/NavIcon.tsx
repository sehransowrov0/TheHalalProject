import { NavLink } from "react-router-dom";
import { Button } from "../ui/button";


export default function NavIcon({ icon }: { icon: React.ReactNode }) {
  return (
    <NavLink to='/' >
      <Button size="icon">
        {icon}
      </Button>
    </NavLink >
  )
}

