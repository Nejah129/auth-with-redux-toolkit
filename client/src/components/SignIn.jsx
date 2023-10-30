import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userLogin } from "../redux/slice/user";
import { Link, Navigate } from "react-router-dom";

const SignIn = () => {
    const {user,token,loading}=useSelector(state=>state)
    // console.log(token)
  const [email, setEmail] = useState("email");
  const [password, setPassword] = useState("12345");

  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    const user = {
      email,
      password,
    };
    dispatch(userLogin(user));
  };
  return (
    <div className="App">
        {
            loading?<h1>Loading ...</h1>:
            localStorage.getItem("token") ? (
                <Navigate to={`/user/${user.id}`} />
              ) :
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
        
        <div>
          <button type="submit">Login</button>
        </div>
      </form>
        }

      <p>you don't have a acount ?</p>
      <Link to="/">
        <p>go to SignUp</p>
      </Link>
    </div>
  );
};

export default SignIn;
