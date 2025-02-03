import React, { useState } from 'react';
import Logo from '../components/Logo';
import IconButton from '../components/IconButton';
import NavLink from '../components/NavLink';

const Header = () => {
    const [isOpen, setIsOpen]= useState(false);
    const navLinks =[
        {title: "Home", href: "#"},
        {title: "Menu", href: "#"},
        {title: "Service", href: "#"},
        {title: "Offers", href: "#"},
        {title: "Rewards", href: "#"}
    ]
  return (
    <header className={`fixed w-full top-0 z-50 transition-all duration-300`}>
        <div className="max-w-7xl mx-auto px-4">
            <div className="flex items-center justify-between">
                <Logo />

                {/* Desktop Navigation */}
                <div className="hidden lg:flex items-center space-x-1">
                    {navLinks.map(Link=>(
                        <NavLink />
                    ))}
                </div>

                {/* Right Section */}
                <div className='flex items-center gap-6'>
                    <IconButton />
                    <IconButton />
                    <IconButton />
                </div>
            </div>

            {/* Mobile Navigation */}
            <div className={`lg:hidden fixed inset-0 to-[80px] bg-white/80 backdrop-blur-lg transition-all duration-300 ease-in-out ${isOpen ? "translate-x-0" : "translate-x-full"}`}>
                <nav className="bg-white/90 border-t">
                    <div className="max-w-7xl mx-auto px-4 py-2 flex flex-col gap-2">
                        {navLinks.map((Link) => (
                            <NavLink />
                        ))}
                    </div>
                </nav>
            </div>

        </div>
    </header>
  )
}

export default Header