import React, { useEffect, useState } from "react";
import { SlArrowLeft } from "react-icons/sl";
import { FaCamera } from "react-icons/fa";
import { Link } from "react-router-dom";

function Profile() {
  const [profileImage, setProfileImage] = useState(null);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setProfileImage(imageUrl);
    }
  };
useEffect(() => {
      document.title='Profile'
    }, [])
    
  return (
    <div className="h-screen w-screen bg-[url('/bg-image.jpg')] bg-cover bg-center flex items-center justify-center overflow-hidden fixed top-0 left-0">
      <div className="absolute top-0 left-0 p-4 mt-5 ms-5">
        <Link to={"/chat"}>
          <SlArrowLeft className="text-[#000000] text-2xl font-bold cursor-pointer" />
        </Link>
      </div>
      <div className="profile-container bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-xl font-semibold mb-4">Edit Profile</h2>
        <div className="profile-picture relative w-32 h-32 mx-auto">
          <label htmlFor="profileImageInput" className="cursor-pointer">
            <div className="avatar-placeholder w-32 h-32 rounded-full overflow-hidden border-2 border-gray-300 flex items-center justify-center">
              {profileImage ? (
                <img
                  src={profileImage}
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              ) : (
                <FaCamera className="text-gray-500 text-4xl" />
              )}
            </div>
          </label>
          <input
            type="file"
            id="profileImageInput"
            accept="image/*"
            className="hidden"
            onChange={handleImageChange}
          />
        </div>
        <form className="mt-4">
          <label className="block text-sm font-medium">Name</label>
          <input
            type="text"
            defaultValue="Melissa Peters"
            className="border p-2 w-full rounded-md mb-2"
          />
          <label className="block text-sm font-medium">Email</label>
          <input
            type="email"
            defaultValue="melpeters@gmail.com"
            className="border p-2 w-full rounded-md mb-2"
          />
          <label className="block text-sm font-medium">Country/Region</label>
          <select
            defaultValue="Nigeria"
            className="border p-2 w-full rounded-md mb-2"
          >
            <option value="Afghanistan">Afghanistan</option>
            <option value="Albania">Albania</option>
            <option value="Algeria">Algeria</option>
            <option value="Argentina">Argentina</option>
            <option value="Australia">Australia</option>
            <option value="Brazil">Brazil</option>
            <option value="Canada">Canada</option>
            <option value="China">China</option>
            <option value="Egypt">Egypt</option>
            <option value="France">France</option>
            <option value="Germany">Germany</option>
            <option value="India">India</option>
            <option value="Indonesia">Indonesia</option>
            <option value="Italy">Italy</option>
            <option value="Japan">Japan</option>
            <option value="Mexico">Mexico</option>
            <option value="Netherlands">Netherlands</option>
            <option value="Nigeria">Nigeria</option>
            <option value="Pakistan">Pakistan</option>
            <option value="Russia">Russia</option>
            <option value="Saudi Arabia">Saudi Arabia</option>
            <option value="South Africa">South Africa</option>
            <option value="South Korea">South Korea</option>
            <option value="Spain">Spain</option>
            <option value="Sweden">Sweden</option>
            <option value="Turkey">Turkey</option>
            <option value="United Arab Emirates">United Arab Emirates</option>
            <option value="United Kingdom">United Kingdom</option>
            <option value="United States of America">
              United States of America
            </option>
          </select>
          <label className="block text-sm font-medium">Date of Birth</label>
          <input
            type="date"
            defaultValue="1999-03-13"
            className="border p-2 w-full rounded-md mb-2"
          />
          <button
            type="submit"
            className="bg-blue-500 text-white p-2 rounded-md w-full"
          >
            Save changes
          </button>
        </form>
      </div>
    </div>
  );
}

export default Profile;
