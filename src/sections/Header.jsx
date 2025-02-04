import React, { useEffect, useState } from 'react';
import Logo from '../components/Logo';
import IconButton from '../components/IconButton';
import NavLink from '../components/NavLink';
import { Menu, ShoppingCart, User, X } from 'lucide-react';

const Header = () => {
    const [isOpen, setIsOpen]= useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(()=>{
        const handleScroll = ()=> setScrolled(window.scrollY>20);
        window.addEventListener('scroll', handleScroll);

        return ()=> window.removeEventListener("scroll", handleScroll);
    }, []);


    const navLinks =[
        {title: "Home", href: "#"},
        {title: "Menu", href: "#"},
        {title: "Service", href: "#"},
        {title: "Offers", href: "#"},
        {title: "Rewards", href: "#"}
    ]
  return (
    <header className={`fixed w-full top-0 z-50 transition-all duration-300 ${scrolled ? "py-4 bg-white/80 backdrop-blur-lg shadow-[0_8px_30px_rgb(0,0,0.12)]" : "py-6 bg-transparent"}`}>
        <div className="max-w-7xl mx-auto px-4">
            <div className="flex items-center justify-between">
                <Logo />

                {/* Desktop Navigation */}
                <div className="hidden lg:flex items-center space-x-1">
                    {navLinks.map(link=>(
                        <NavLink key={link.title} {...link}/>
                    ))}
                </div>

                {/* Right Section */}
                <div className='flex items-center gap-6'>
                    <IconButton icon={ShoppingCart} count={3} />
                    <IconButton icon={User} className="hidden md:block" />
                    <IconButton icon={isOpen ? X : Menu} className="lg:hidden" onClick={()=> setIsOpen(!isOpen)} />
                </div>
            </div>

            {/* Mobile Navigation */}
            <div className={`lg:hidden fixed inset-0 top-[80px] bg-white/80 backdrop-blur-lg transition-all duration-300 ease-in-out ${isOpen ? "translate-x-0" : "translate-x-full"}`}>
                <nav className="bg-white/90 border-t">
                    <div className="max-w-7xl mx-auto px-4 py-2 flex flex-col gap-2">
                        {navLinks.map((link) => (
                            <NavLink key={link.title} {...link} isMobile onClick={()=> setIsOpen(false)} />
                        ))}
                    </div>
                </nav>
            </div>

        </div>
    </header>
  )
}

export default Header