import TopNav from "@/components/molecules/TopNav";
import BottomNav from "../molecules/BottomNav";


export default function Navbar() {
  return (
    <nav>
      <TopNav />
      {/* i will include theme changer inside top of the menue latter */}
      <BottomNav />
    </nav>
  )
}

