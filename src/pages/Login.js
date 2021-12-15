import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { login } from "../utils/firebase";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const onHandleLogin = () => {
    if (email !== "" && password !== "") {
      login(email, password);
      localStorage.setItem("username", email.split("@")[0]);
    }
    navigate("/channels");
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
      <button onClick={onHandleLogin} color="#f57c00">
        login
      </button>
      <button onClick={() => navigate("/signup")}>Go to sign up page</button>
    </div>
  );
};

export default Login;
