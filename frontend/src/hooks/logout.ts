import { useNavigate } from "react-router-dom";

export function handleLogout() {
  const navigate = useNavigate();
  localStorage.removeItem("token") // to remove JWT
  navigate('/login')
}
