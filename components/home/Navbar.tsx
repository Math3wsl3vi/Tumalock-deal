"use client"
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { Button } from '../ui/button';
import { Menu, X } from 'lucide-react';
import { useRouter } from 'next/navigation';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const router = useRouter();

  // Scroll handler
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY && window.scrollY > 100) {
        // Scrolling down
        setShowNavbar(false);
      } else {
        // Scrolling up
        setShowNavbar(true);
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 bg-white transition-transform duration-300 shadow-sm ${
        showNavbar ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
      <div className="px-4 md:px-32 py-4 flex items-center justify-between font-poppins">
        {/* Logo */}
        <div className="flex items-center">
          <Image src="/images/newestlogo.png" alt="logo" width={40} height={40} />
        </div>

        {/* Hamburger Button (Mobile Only) */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
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
          <Button 
          onClick={()=>router.push('/auth')}
          className="text-white bg-gradient-to-r from-pink-500 to-blue-500 hover:opacity-90 transition">Register</Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-md p-4 flex flex-col gap-4 md:hidden z-50">
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
