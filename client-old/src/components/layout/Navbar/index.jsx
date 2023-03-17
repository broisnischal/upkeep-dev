import './navbar.scss';
import React from 'react';
import { Link } from 'react-router-dom';
import { CONF } from '../../../assets';

const Navbar = () => {
    return (
        <nav>
            <div className="left">
                <div className="logo">
                    <img
                        style={{ width: '20%' }}
                        src={CONF.logoLight}
                        alt="Upkeep"
                    />
                </div>
                {/* <button>Become a Vendor?</button> */}
            </div>

            <div className="right">
                <ul>
                    <Link className="link" to="/services">
                        Service
                    </Link>
                    <Link className="link" to="/help">
                        Help
                    </Link>
                    <Link className="link" to="/blog">
                        Blog
                    </Link>

                    <Link className="link" to="/auth/login">
                        Login
                    </Link>
                    <Link className="link signup" to="/auth/signup">
                        Sign Up
                    </Link>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
