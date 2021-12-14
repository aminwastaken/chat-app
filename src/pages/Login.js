import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { login } from "../utils/firebase";
import { Navigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onHandleLogin = () => {
    if (email !== "" && password !== "") {
      //   signInWithEmailAndPassword(auth, email, password)
      //     .then((user) => console.log(user))
      //     .catch((err) => console.log(`Login err: ${err}`));
      login(email, password);
    }
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
      <button onClick={() => Navigate("sign up")}>go to sign up</button>
    </div>
  );
};

export default Login;
