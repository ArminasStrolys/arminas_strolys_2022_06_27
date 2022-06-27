import React from "react";

const Login = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="login_panel">
      <form className="login_form" onSubmit={(e) => handleSubmit(e)}>
        <label>Username</label>
        <input type="text" required />
        <br />
        <label>Password</label>
        <input type="password" required />
        <br />
        <button type="submit">
          <a href="/admin_panel">Login</a>
        </button>
        <button>
          <a href="/register">Register</a>
        </button>
      </form>
    </div>
  );
};

export default Login;
