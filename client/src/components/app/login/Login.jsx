import React from "react";

const Login = () => {
  return (
    <div className="login_panel">
      <form className="login_form">
        <label>Username</label>
        <input type="text" required />
        <br />
        <label>Password</label>
        <input type="text" required />
        <br />
        <button>Login</button>
        <button>Register</button>
      </form>
    </div>
  );
};

export default Login;
