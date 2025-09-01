import Story from "@/components/organisms/Story";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";


export default function Home() {

  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token"); // remove JWT
    navigate("/login"); // redirect to login
  };

  return (
    <main className="bg-background pt-1 flex flex-col gap-1 ">
      <Story />
      <Button className="mt-4" onClick={handleLogout}>
        Logout
      </Button>
    </main>
  )
}

