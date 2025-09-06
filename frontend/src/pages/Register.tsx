import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import axios from "axios";
import { useState } from "react";


export default function SighnUp() {


  const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const [response, setResponse] = useState("");

async function registerSubmit(e) {
  try {
    const res = await axios.post("http://127.0.0.1:5000/api/register", {
      email: email,
      password: password
    });
    setResponse(res.data);
  } catch (err) {
    if (err.response) {
      setResponse(err.response.data);
    } else {
      setResponse({ error: err.message });
    }
  }
}


  return (
    <div>
      <form>
        <div>
          <label>Email address</label>
          <input
            value={email}
            type="email"
            required={true}
            placeholder="abc@abc.com"
            onChange={e => setEmail(e.target.value)}
          />
          <label>Password</label>
          <input
            type="password"
            required={true}
            placeholder="********"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
          <Button
            onSubmit={registerSubmit}
            type="submit"
            size="lg"
            variant="default"
          >
            Submit
          </Button>
        </div>
      </form>
    </div>
  );
}
