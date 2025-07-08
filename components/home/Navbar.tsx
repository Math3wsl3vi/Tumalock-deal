"use client"
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { Button } from '../ui/button';
import { Menu, X } from 'lucide-react'; // You can use any icon library or SVG

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="px-4 md:px-32 py-4 flex items-center justify-between relative font-poppins">
      {/* Logo */}
      <div className="flex items-center">
        <Image src="/images/logo.png" alt="logo" width={40} height={40} />
      </div>

      {/* Hamburger Button (Mobile Only) */}
      <button
        className="md:hidden"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {/* Desktop Menu */}
      <div className="hidden md:flex gap-10 items-center">
        <Link href="/">Home</Link>
        <Link href="/">About</Link>
        <Link href="/">FAQ</Link>
        <Link href="/">Blog</Link>
      </div>

      {/* CTA Buttons (Desktop) */}
      <div className="hidden md:flex gap-4 items-center">
        <Button variant="outline">Contact</Button>
        <Button>Register</Button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-[75px] left-0 w-full bg-white shadow-md p-4 flex flex-col gap-4 md:hidden z-50">
          <Link href="/" onClick={() => setIsOpen(false)}>Home</Link>
          <Link href="/" onClick={() => setIsOpen(false)}>About</Link>
          <Link href="/" onClick={() => setIsOpen(false)}>FAQ</Link>
          <Link href="/" onClick={() => setIsOpen(false)}>Blog</Link>
          <Button variant="outline" onClick={() => setIsOpen(false)}>Contact</Button>
          <Button onClick={() => setIsOpen(false)}>Register</Button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
