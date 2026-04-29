"use client";

import Link from "next/link";
import {usePathname} from "next/navigation";
import React, { use } from "react";
import { useState, useEffect } from "react";

export default function Menu() {
    const pathname = usePathname();
    const [darkMode, setdarkMode] = React.useState(false);

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

    if (pathname === "/") {
        bg_color = "bg-blue-700";
} else {
        bg_color = "bg-white";
}
return (
    <nav className="mt-5 mx-10 flex flex-col sm:flex-row justify-start text-center">
        <Link
            href="/"
            className={`${bg_color} hover:bg-red-700 text-red-700 hover:text-white px-10 py-2.5 rounded-full cursor-pointer border-red-700 border sm:w-40 w-full`}>
            Home
        </Link>
        <Link
             href="/profil"
             className={
            "bg-white hover:bg-red-700 text-red-700 hover:text-white px-10 py-2.5 rounded-full cursor-pointer border-red-700 border sm:w-40 w-full"}>
        Profil
      </Link>
      <button
        onClick={() => setdarkMode(!darkMode)}
        className="px-5 py-2 rounded-full border mt-2 sm:mt-0"></button>
    </nav>
)
}