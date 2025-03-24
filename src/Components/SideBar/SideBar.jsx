import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaComment, FaCog, FaInfoCircle, FaUser, FaSignOutAlt, FaLightbulb, FaQuoteLeft } from 'react-icons/fa';
import { GiMeditation } from "react-icons/gi"; // Meditation icon
import { motion } from 'framer-motion';

const sidebarVariants = {
    hidden: { x: -250, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 0.5, ease: "easeOut" } }
};

const linkVariants = {
    hover: { scale: 1.1, transition: { duration: 0.3 } }
};

function Sidebar() {
    return (
        <motion.div
            className="sidebar flex flex-col h-screen items-center bg-gray-900 text-white p-5 w-64 shadow-xl"
            initial="hidden"
            animate="visible"
            variants={sidebarVariants}
        >
            {/* Logo */}
            <motion.div className="logo mb-6" whileHover={{ scale: 1.1 }}>
                <img src="/body2.png" alt="Logo" className="w-[200px] h-auto" />
            </motion.div>
            {/* Navigation Links */}
            <div className="flex-grow flex flex-col space-y-6">
                {[
                    { to: "chat", label: "Chat", icon: <FaComment /> },
                    { to: "awareness", label: "Awareness & Tips", icon: <FaLightbulb /> },
                    { to: "about", label: "About", icon: <FaInfoCircle /> },
                    { to: "profile", label: "Profile", icon: <FaUser /> },
                    { to: "meditation", label: "Meditation", icon: <GiMeditation /> },
                    { to: "quotes", label: "Quotes", icon: <FaQuoteLeft /> } // Updated icon
                ].map(({ to, label, icon }) => (
                    <NavLink to={to} key={to} className="flex items-center space-x-3 p-3 rounded-lg transition-all duration-300 hover:bg-gray-700" >
                        <motion.div variants={linkVariants} whileHover="hover" className="text-xl">{icon}</motion.div>
                        <motion.span variants={linkVariants} whileHover="hover" className="font-semibold">{label}</motion.span>
                    </NavLink>
                ))}
            </div>

            {/* Logout Button */}
            <motion.div className="mt-auto" whileHover={{ scale: 1.1 }}>
                <NavLink to="/" className="flex items-center space-x-3 p-3 rounded-lg transition-all duration-300 hover:bg-red-600">
                    <FaSignOutAlt className='text-xl' />
                    <span className="font-semibold">Logout</span>
                </NavLink>
            </motion.div>
        </motion.div>
    );
}

export default Sidebar;
