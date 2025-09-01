"use client";

import { useState } from "react";
import axios from "axios";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function RegisterForm() {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      const res = await axios.post("http://127.0.0.1:5000/register", form);
        setMessage(res.data.message || "Registered successfully ✅");
      } catch (err: any) {
        setMessage(err.response?.data?.message || "Something went wrong ❌");
      } finally {
      setLoading(false);
    }
  };

  return (
    <Card className="w-full max-w-sm mx-auto mt-10 shadow-lg">
      <CardHeader>
        <CardTitle className="text-xl">Register</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <Input
            type="email"
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            required
          />
          <Input
            type="password"
            name="password"
            placeholder="Password"
            value={form.password}
            onChange={handleChange}
            required
          />
          <Button type="submit" disabled={loading}>
            {loading ? "Registering..." : "Register"}
          </Button>
        </form>
        {message && (
          <p className="text-sm mt-3 text-center text-gray-600">{message}</p>
        )}
      </CardContent>
    </Card>
  );
}

