import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return(
        <>
        <nav>
            <h1>30before30</h1>
            <button>
                <Link to="/Login">Login</Link>
            </button>
            <button>
                <Link to="/Signup">Don't have an account? Signup</Link>
            </button>
        </nav>
        </>
    )
}

export default NavBar;