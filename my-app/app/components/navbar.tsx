"use client";

import Link from "next/link";
import {usePathname} from "next/navigation";
import React, { use } from "react";
import { useState, useEffect } from "react";
import "./nav.css";

export default function Menu() {
    const pathname = usePathname();
    const [darkMode, setdarkMode] = React.useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        if (darkMode) {
            document.body.classList.add("dark");
            document.body.classList.remove("light");
        } else {
            document.body.classList.add("light");
            document.body.classList.remove("dark");
        }
    }, [darkMode]);
//rikigit
    let bg_color;

return (
    <div className="navbar">
        
        <div className="navleft">
            <span className="text">SIPMO</span>
        </div>
        <div className={`navright ${menuOpen ? "open" : ""}`}>
            <Link href="/" className={`navlink ${pathname === "/" ? "active" : ""}`}>
                Home
            </Link>
            <Link href="/about" className={`navlink ${pathname === "/about" ? "active" : ""}`}>
                About
            </Link>
        </div>
        <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? "X" : "☰"}
        </button>
        <button onClick={() => setdarkMode(!darkMode)} className="toggle-btn">
                {darkMode ? "Light Mode" : "Dark Mode"}
        </button>
    </div>
)
}