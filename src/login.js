import React, { useState } from "react";
import "./login.css";
import { Link, useHistory } from "react-router-dom";
import { auth } from "./firebase";
import { Password } from "@mui/icons-material";

function Login() {
  const history = useHistory();
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const signIn = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => history.push("/"))
      .catch((error) => alert(error.message));
  };
  const register = (e) => {
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        console.log(auth);
        if (auth) {
          history.push("/");
        }
      })
      .catch((error) => alert(error.message));
  };
  return (
    <div className="login">
      <Link to="/">
        <img src="https://pngimg.com/uploads/amazon/amazon_PNG1.png" alt="" />
      </Link>
      <div className="sign_in">
        <h1>Sign in</h1>
        <p>
          {" "}
          <b>Email or mobile phone number</b>{" "}
        </p>
        <form action="">
          <input
            type="text"
            value={email}
            onChange={(e) => setemail(e.target.value)}
          />
          <br />
          <label htmlFor="">password</label>
          <input
            type="text"
            value={password}
            onChange={(e) => setpassword(e.target.value)}
          />
          <button type="submit" onClick={signIn}>
            continue
          </button>
        </form>
        <p>
          By continuing, you agree to Amazon's Conditions of Use and Privacy
          Notice.
        </p>
        <br />
        Need help
      </div>
      <p className="line">
        <span>NEW TO AMAZON?</span>
      </p>
      <button onClick={register}>Create your Amazon account</button>
    </div>
  );
}

export default Login;
