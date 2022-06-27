import React from 'react';

const Navbar = () => {
    return (
        <div className='navbar_class'>
            <ul className='nav_list'>
                <li><a href="/">Home</a></li>
                <li><a href="/login">Login</a></li>
                <li><a href="/register">Register</a></li>
            </ul>
        </div>
    );
}

export default Navbar;
