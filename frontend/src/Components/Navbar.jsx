import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("authToken");
    if (token) {
      setIsLoggedIn(true); // User is logged in
    }
  });

  const handleLogout = () => {
    localStorage.removeItem("authToken"); // Remove the token on logout
    setIsLoggedIn(false);
    navigate("/login"); // Redirect to login page
  };

  return (
    <header className="flex items-center justify-between shadow-xl w-full z-[999] sticky top-0 left-0 right-0 bg-white">
      <div className="rounded-lg">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDRZGNslJo91Vyo9wk_JNgH8osWiP9Egn7bA&s"
          className="h-[5rem] w-50"
          alt="Logo"
        />
      </div>
      <nav>
        <ul className="flex items-center gap-7 my-4 justify-between hover:text-textColor font-medium">
          <li>
            <NavLink to="/" className="text-textColor hover:text-primaryColor">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className="text-textColor hover:text-primaryColor"
            >
              Contact
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className="text-textColor hover:text-primaryColor"
            >
              About
            </NavLink>
          </li>
        </ul>
      </nav>

      {!isLoggedIn ? (
        <NavLink to="/login" className="text-textColor text-lg">
          <button className="rounded-md w-20 h-10 font-medium bg-teal-300 hover:bg-teal-100">
            Login
          </button>
        </NavLink>
      ) : (
        <button
          onClick={handleLogout}
          className="rounded-md w-20 h-10 font-medium bg-emerald-200 hover:bg-emerald-100"
        >
          Logout
        </button>
      )}
    </header>
  );
};

export default Navbar;
