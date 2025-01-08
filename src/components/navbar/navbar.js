import React from 'react'
import Link from 'next/link';

const Navbar = () => {
  return (
    <>
        <nav className="nav-bar">
        <ul>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/menu">Menu</Link></li>
            <li><Link href="/about">About Us</Link></li>
            <li><Link href="/contact">Contact Us</Link></li>
        </ul>
        </nav>
    </>
  )
}

export default Navbar