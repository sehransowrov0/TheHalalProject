"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

export default function ProfilePage() {
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProfile = async () => {
      const token = localStorage.getItem("token");
      if (!token) return navigate("/login"); // redirect if no token

      try {
        const res = await axios.get("http://127.0.0.1:5000/profile", {
          headers: { Authorization: `Bearer ${token}` },
        });
        setUser(res.data.user);
      } catch (err) {
        navigate("/login"); // redirect if token invalid
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  if (loading) return <p>Loading...</p>;

  return (
    <div className="p-8 text-center">
      <h1 className="text-2xl font-bold">Profile ✅</h1>
      {user && (
        <div className="mt-4">
          <p>Email: {user.email}</p>
          <p>ID: {user._id}</p>
        </div>
      )}
      <Button className="mt-4" onClick={handleLogout}>
        Logout
      </Button>
    </div>
  );
}

