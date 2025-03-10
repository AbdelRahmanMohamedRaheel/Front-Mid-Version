import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

function Register() {
    useEffect(() => {
          document.title='Register'
        }, [])
        
    return (
        <div className="h-screen w-screen bg-[url('/bg-image.jpg')] bg-cover bg-center flex items-center justify-center overflow-hidden fixed top-0 left-0">
            <div>
                <h2 className="text-2xl font-bold text-center mb-4 text-[#598DEB] border-b-2 border-[#598DEB] pb-2">
                    Calm Sphere
                </h2>
                <form className="flex flex-col gap-4">
                    {/* Username Input with Icon */}
                    <div className="relative">
                        <i className="fa fa-user absolute left-3 top-1/2 transform -translate-y-1/2 text-[#598DEB] border-e-2 pe-2 text-xl"></i>
                        <input
                            type="text"
                            placeholder="Username"
                            required
                            className="border p-2 pl-10 bg-[#598DEB40] rounded w-full placeholder-[#598DEB] border-[#598DEB] focus:ring-2 focus:ring-[#598DEB] focus:border-[#598DEB] outline-none"
                        />
                    </div>

                    {/* Password Input with Icon */}
                    <div className="relative">
                        <i className="fa fa-lock absolute left-3 top-1/2 transform -translate-y-1/2 text-[#598DEB] border-e-2 pe-2 text-xl"></i>
                        <input
                            type="password"
                            placeholder="Password"
                            required
                            className="border p-2 pl-10 bg-[#598DEB40]  rounded w-full placeholder-[#598DEB] border-[#598DEB] focus:ring-2 focus:ring-[#598DEB] focus:border-[#598DEB] outline-none"
                        />
                    </div>

                    {/* Confirm Password Input with Icon */}
                    <div className="relative">
                        <i className="fa fa-lock absolute left-3 top-1/2 transform -translate-y-1/2 text-[#598DEB] border-e-2 pe-2 text-xl"></i>
                        <input
                            type="password"
                            placeholder="Re-enter Password"
                            required
                            className="border p-2 pl-10 bg-[#598DEB40]  rounded w-full placeholder-[#598DEB] border-[#598DEB] focus:ring-2 focus:ring-[#598DEB] focus:border-[#598DEB] outline-none"
                        />
                    </div>

                    <button type="submit" className="bg-[#598DEB] text-white py-2 rounded w-full cursor-pointer hover:bg-[#3A6BCF]">
                        Register
                    </button>
                </form>
                <p className="text-center mt-4 text-[#598DEB] cursor-pointer">
                    <span className='hover:underline'>Already have an account?</span> <Link to="/login" className="text-[#598DEB] font-bold hover:underline">Login</Link>
                </p>
            </div>
        </div>
    );
}

export default Register;
