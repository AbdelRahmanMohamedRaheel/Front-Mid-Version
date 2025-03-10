import React, { useEffect } from "react";
import { Link } from "react-router-dom";

function Home() {
  useEffect(() => {
        document.title='Welcome'
      }, [])
      
  return (
    <div className="h-screen w-screen bg-[url('/bg-image.jpg')] bg-cover bg-center flex items-center justify-center overflow-hidden fixed top-0 left-0">
      <div className="flex flex-col items-center">
        {/* Import Image */}
        <img src="/body.png" alt="Logo" className="w-[359px] h-[393px] " />

        <div className="w-[200px] flex flex-col space-y-2">
          {" "}
          {/* Set a fixed width */}
          <Link to="/login">
            <button className="w-full mb-5  py-2 bg-[#598DEB] text-white rounded cursor-pointer hover:bg-[#3A6BCF]">
              Login
            </button>
          </Link>
          <Link to="/register">
            <button className="w-full mb-5 py-2 bg-[#598DEB] text-white rounded cursor-pointer hover:bg-[#3A6BCF]">
              Register
            </button>
          </Link>
          <Link to='/about'>
            {" "}
            <p className="text-center text-[#598DEB] cursor-pointer font-bold hover:underline">
              About Us
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
