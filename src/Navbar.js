import React, { useState } from 'react';
import './Navbar.css';

export default function Navbar() {
    const [isNavExpanded, setIsNavExpanded] = useState(false);

    return (
            <nav className="navigation">
                
                <a href="/" className="brand-name">
                <img className='logo' alt='brandname' src="./hLogo.ico" />
                </a>
                <button className="hamburger" onClick={() => {
                    setIsNavExpanded(!isNavExpanded);
                }}>
                    {/* icon from heroicons.com */}
                    <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="white"
                    >
                    <path
                        strokeLinecap="round"
                        d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                        strokeLinejoin="round"
                    />
                    </svg>
                    

                </button>
                <div className={
                        isNavExpanded ? "navigation-menu expanded" : "navigation-menu"
                    }
                >
                    <ul>
                    <li>
                        <a href="/home">Home</a>
                    </li>
                    <li>
                        <a href="/projects">Projects</a>
                    </li>
                    <li>
                        <a href="/contact">Contact</a>
                    </li>
                    </ul>
                </div>
            </nav>
        );
    }