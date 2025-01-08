"use client";

import React from 'react'
import Link from 'next/link';
import { useState } from "react";

const Navbar = () => {
  const [home, setHome] = useState(true);
  const [menu, setMenu] = useState(false);
  const [about, setAbout] = useState(false);
  const [contact, setContact] = useState(false);  

  return (
    <>
        <nav className="nav-bar">
          <ul>
              <li 
              className={home ? "nav-element-selected" : "nav-element"} 
              onClick={() => {
                setHome(true);
                setMenu(false);
                setAbout(false);
                setContact(false);
              }}>
                <Link href="/">Home</Link>
              </li>
              <li 
              className={menu ? "nav-element-selected" : "nav-element"}
              onClick={() => {
                setHome(false);
                setMenu(true);
                setAbout(false);
                setContact(false);
              }}>
                <Link href="/menu">Menu</Link>
              </li>
              <li 
              className={about ? "nav-element-selected" : "nav-element"}
              onClick={() => {
                setHome(false);
                setMenu(false);
                setAbout(true);
                setContact(false);
              }}>
                <Link href="/about">About Us</Link>
              </li>
              <li 
              className={contact ? "nav-element-selected" : "nav-element"}
              onClick={() => {
                setHome(false);
                setMenu(false);
                setAbout(false);
                setContact(true);
              }}>
                <Link href="/contact">Contact Us</Link>
              </li>
          </ul>
        </nav>
    </>
  )
}

export default Navbar