import React from "react";
import { Link } from "react-router-dom";
import { SignUp } from "../components/SignUp";
import "./RegisterPage.css";
import flixua from "../image/FLIXUA.png";

const RegisterPage = () => {
  return (
    <div className="register-page-container">
      <img className="img" src={flixua} alt=""></img>
      <SignUp />

      <Link className="sign-in-link" to="/login">Sign In</Link>
    </div>
  );
};

export default RegisterPage;
