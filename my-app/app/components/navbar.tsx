"use client";

import Link from "next/link";
import {usePathname} from "next/navigation";
import React from "react";

export default function Menu() {
    const pathname = usePathname();

    let bg_color;
    if (pathname === "/") {
}
}