"use client"
import React from 'react'
import Image from 'next/image'
import { Bell } from 'lucide-react'
import { Input } from '../ui/input'

const DashNav = () => {
  return (
    <nav className="flex items-center justify-between px-6 md:px-10 h-[60px] bg-white border-b shadow-sm font-poppins">
      {/* Left: Logo + Search */}
      <div className="flex items-center gap-6">
        {/* Logo */}
        <Image src="/images/newestlogo.png" alt="Logo" width={40} height={40} />

        {/* Search */}
        <div className="hidden md:block ml-36 ">
          <Input
            type="text"
            placeholder="Search..."
            className="w-[250px] md:w-[300px]"
          />
        </div>
      </div>

      {/* Right: Notification + Profile */}
      <div className="flex items-center gap-6">
        {/* Notification Icon */}
        <button className="relative p-2 rounded-full hover:bg-gray-100 transition">
          <Bell className="w-5 h-5 text-gray-600" />
          <span className="absolute -top-1 -right-1 h-2 w-2 rounded-full bg-red-500"></span>
        </button>

        {/* Profile Image */}
        <Image
          src="/images/user.png"
          alt="Profile"
          width={36}
          height={36}
          className="rounded-full object-cover border"
        />
      </div>
    </nav>
  )
}

export default DashNav
