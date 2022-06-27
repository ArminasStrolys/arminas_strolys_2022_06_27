import React from "react";

const Register = () => {
  return (
    <div className="register_panel">
      <form className="register_form">
      <label>Username</label>
        <input type="text" required />
        <br />
        <label>Password</label>
        <input type="password" required />
        <br />
        <label>Repeat password</label>
        <input type="password" required />
        <br />
        <button>Confirm</button>
        <button><a href="/login">Back to login</a></button>
      </form>
    </div>
  );
};

export default Register;
