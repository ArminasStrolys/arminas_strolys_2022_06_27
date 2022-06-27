import React from "react";

const Navbar = () => {
  return (
    <div className="navbar_class">
      <ul className="nav_list">
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/login">Admin panel</a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
