import { LuGraduationCap } from "react-icons/lu";

import React from 'react'
import Link from "next/link";

const Navbar = () => {
  const navigation = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Subjects", href: "/subjects" },
    { name: "How It Works", href: "/how-it-works" },
  ]

  return (
    <header className="backdrop-blur-md border border-b border-foreground/30 sticky">
      <nav className='flex items-center justify-between px-6 py-3'>
        <div className='flex items-center gap-2 text-xl font-medium text-black'>
          <LuGraduationCap className='text-blue-400 text-3xl' />
          <span>Brand Logo</span>
        </div>

        <div className='flex gap-8 items-center'>
          {navigation.map(item => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm hover:text-primary hover:text-shadow-sm"
            >
              {item.name}
            </Link>
          ))}
          {/* <ul className='flex items-center gap-8 text-sm'>
            <li className='hover:text-primary hover:font-semibold cursor-pointer'>Home</li>
            <li className='hover:text-primary hover:font-semibold cursor-pointer'>About us</li>
            <li className='hover:text-primary hover:font-semibold cursor-pointer'>Services</li>
            <li className='hover:text-primary hover:font-semibold cursor-pointer'>Subjects</li>
            <li className='hover:text-primary hover:font-semibold cursor-pointer'>How It Works</li>
          </ul> */}

          <Link href={'/contact'} className='bg-black text-background text-sm font-medium rounded-md px-4 py-2 shadow-sm cursor-pointer hover:bg-foreground'>Contact</Link>
        </div>
      </nav>
    </header>
  )
}

export default Navbar
