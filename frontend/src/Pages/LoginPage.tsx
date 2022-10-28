import React from "react";
import { Link } from "react-router-dom";
import { LoginDescr, LoginForm, LoginTitle } from "../Components/LoginBlock";

export const LoginPage = () => {
  return (
    <div className="login_page">
      <Link to="/">Main Page</Link>
      <LoginTitle />
      <LoginDescr />
      <LoginForm />
    </div>
  );
};
