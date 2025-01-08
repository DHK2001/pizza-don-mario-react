"use client";

import React from 'react'
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Navbar = () => {
  const pathname = usePathname();

  return (
    <>
        <nav className="nav-bar">
          <ul>
              <li 
              className={pathname == "/" ? "nav-element-selected" : "nav-element"}>
                <Link href="/">Home</Link>
              </li>
              <li 
              className={pathname == "/menu"  ? "nav-element-selected" : "nav-element"}>
                <Link href="/menu">Menu</Link>
              </li>
              <li 
              className={pathname == "/about"  ? "nav-element-selected" : "nav-element"}>
                <Link href="/about">About Us</Link>
              </li>
              <li 
              className={pathname == "/contact"  ? "nav-element-selected" : "nav-element"}>
                <Link href="/contact">Contact Us</Link>
              </li>
          </ul>
        </nav>
    </>
  )
}

export default Navbar