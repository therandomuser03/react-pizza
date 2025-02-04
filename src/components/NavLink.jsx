import React from 'react'

const NavLink = ({ title, href, onClick, isMobile }) => {
  return <a className={`group relative px-4${isMobile ? 'px-3' : "py-2"} rounded-xl text-gray-700 font-medium transition-colors duration-200`} onClick={onClick} >
    <span>{title}</span>

    {!isMobile && <div></div>}
  </a>
};

export default NavLink