import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { userSignUp } from "../redux/slice/user";
import { Link } from "react-router-dom";

const SingUp = () => {
  const [email, setEmail] = useState("email");
  const [fullName, setFullName] = useState("fukk");
  const [password, setPassword] = useState("12345");
  const [adresse, setAdresse] = useState("test");
  const [telephone, setTelephone] = useState(1234565);
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    const newUser = {
      email,
      password,
      fullName,
      adresse,
      telephone,
    };
    dispatch(userSignUp(newUser));
  };
  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="text"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <input
          type="text"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
        />
        <input
          type="text"
          value={adresse}
          onChange={(e) => setAdresse(e.target.value)}
        />
        <input
          type="text"
          value={telephone}
          onChange={(e) => setTelephone(e.target.value)}
        />
        <div>
          <button type="submit">SingUp</button>
        </div>
      </form>
      <p>do you have a count ?</p>
      <Link to="/login">
        <p>go to login</p>
      </Link>
    </div>
  );
};

export default SingUp;
