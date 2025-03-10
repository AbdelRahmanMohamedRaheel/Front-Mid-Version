import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { FaComment, FaCog, FaInfoCircle, FaUser, FaSignOutAlt } from 'react-icons/fa';
import { GiMeditation } from "react-icons/gi"; // Meditation icon


function Sidebar() {
    
    return (
        <div className="sidebar flex flex-col h-screen items-center">

            {/* Logo */}
            <div className="logo">
                <img src="/body2.png" alt="Logo" className="w-[273px] h-[183px]" />
            </div>

            {/* Navigation Links */}
            <div className="flex-grow flex flex-col  mt-10">
                <NavLink to="chat" className="flex items-center space-x-2">
                    <li className='font-bold'><FaComment className='text-2xl' /> Chat</li>
                </NavLink>
                <NavLink to="features" className="flex items-center space-x-2">
                    <li className='font-bold'><FaCog className='text-2xl' /> Features</li>
                </NavLink>
                <NavLink to="about" className="flex items-center space-x-2">
                    <li className='font-bold'><FaInfoCircle className='text-2xl' /> About</li>
                </NavLink>
                <NavLink to="profile" className="flex items-center space-x-2">
                    <li className='font-bold'><FaUser className='text-2xl' /> Profile</li>
                </NavLink>
                <NavLink to="meditation" className="flex items-center space-x-2">
                    <li className='font-bold'><GiMeditation className='text-2xl' /> meditation</li>
                </NavLink>
            </div>

            {/* Logout Button at the Bottom */}
            <div className="mt-auto mb-4">
                <NavLink to="/" className="flex items-center space-x-2 cursor-pointer">
                    <li className='font-bold'><FaSignOutAlt className='text-2xl' /> Logout</li>
                </NavLink>
            </div>
        </div>
    );
}

export default Sidebar;
