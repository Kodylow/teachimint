import { useState } from "react";
//import { useNavigate } from "react-router-dom";
import { TextInput } from "../inputs/TextInput";
import { Button } from "../inputs/Button";

export function TeacherLogin() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  //const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    window.alert(`TODO: Send request to login
    username: ${username}
    password: ${password}`);

    // const response = await fetch("http://localhost:3000/login", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify({ username, password }),
    // });

    // if (response.ok) {
    //   const { token } = await response.json();
    //   localStorage.setItem("token", token);
    //   navigate("/teacher");
    // } else {
    //   // Handle error
    //   console.error("Login failed");
    // }
  };

  const formValid = username && password;
  const credentialsValid = true;

  const labelClassName = "block text-gray-700 text-sm font-bold -mb-3";

  return (
    <form onSubmit={handleLogin} className="flex flex-col gap-4">
      <label className={labelClassName} htmlFor="username">
        Username
      </label>
      <TextInput
        placeholder="Username"
        value={username}
        id="username"
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setUsername(e.target.value)}
      />

      <label className={labelClassName} htmlFor="password">
        Password
      </label>
      <TextInput
        placeholder="Password"
        type="password"
        value={password}
        id="password"
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
      />
      {!credentialsValid && (
        <p className="text-red-500 text-xs italic">Invalid Username or Password.</p>
      )}
      <Button type="submit" text="Login" disabled={!formValid} />
      {/* TODO: add functionality to reset password */}
      <a className="font-bold text-sm text-blue-500 hover:text-blue-800" href="#">
        Forgot Password?
      </a>
    </form>
  );
}
