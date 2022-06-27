import React from "react";

const Register = () => {
  return (
    <div>
      <form>
      <label>Username</label>
        <input type="text" required />
        <br />
        <label>Password</label>
        <input type="password" required />
        <br />
        <label>Repeat password</label>
        <input type="password" required />
        <br />
        <button>Login</button>
        <button>Register</button>
      </form>
    </div>
  );
};

export default Register;
