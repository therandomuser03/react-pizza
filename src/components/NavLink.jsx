import React from 'react'

const NavLink = ({ title, href, onClick, isMobile }) => {
  return <a href={href} className={`group relative px-4 ${isMobile ? 'px-3' : 'py-2'} rounded-xl text-gray-700 font-medium transition-colors duration-200 cursor-pointer`} onClick={onClick} >
    <span className="relative z-10 group-hover:text-red-500 transition-colors duration-300">{title}</span>

    {!isMobile && <div className="absolute inset-0 bg-red-50 rounded-xl scale-90 opacity-0 group-hover:opacity-100 group-hover:scale-100 translate-all duration-300"></div>}
  </a>
};

export default NavLink