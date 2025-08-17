import TopNav from "@/components/molecules/TopNav";
import BottomNav from "../molecules/BottomNav";

{/* All Styles */ }
const nav = "flex gap-2 flex-col border border-t-0 border-l-0 border-r-0 border-gray-200"

export default function Navbar() {
  return (
    <nav className={nav}>
      <TopNav />
      {/* i will include theme changer inside top of the menue latter */}
      <BottomNav />
    </nav>
  )
}

