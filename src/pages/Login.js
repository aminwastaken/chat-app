import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { login } from "../utils/firebase";
// import "./styles.css";

const containerStyles = {
  height: "100vh",
  width: "100vw",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

const inputContainer = {
  margin: "20px",
};

const inputStyles = {
  border: "1px solid gray",
};
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
    <div style={containerStyles}>
      <div>
        <div style={inputContainer}>
          <label
            class="block text-gray-700 text-sm font-bold mb-2"
            for="username"
          >
            Username
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Enter email"
            autoCapitalize="none"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </div>
        <div style={inputContainer}>
          <label
            class="block text-gray-700 text-sm font-bold mb-2"
            for="password"
          >
            Password
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Enter password"
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            onClick={onHandleLogin}
            color="#f57c00"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
          >
            Sign In
          </button>
          <button
            className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
            href="#"
            onClick={() => navigate("/signup")}
          >
            Don't have an account?
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
