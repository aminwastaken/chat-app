import { useState } from "react";
import { signup } from "../utils/firebase";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const onHandleSignup = () => {
    if (email !== "" && password !== "") {
      signup(email, password);
      localStorage.setItem("username", email.split("@")[0]);
    }

    navigate("/chat");
  };

  return (
    <div>
      <input
        placeholder="Enter email"
        autoCapitalize="none"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
      />
      <input
        placeholder="Enter password"
        type="password"
        value={password}
        onChange={(event) => setPassword(event.target.value)}
      />
      <button onClick={onHandleSignup} color="#f57c00">
        Sign up
      </button>
      <button onClick={() => navigate("/signup")}>Go to login page</button>
    </div>
  );
};

export default Signup;
