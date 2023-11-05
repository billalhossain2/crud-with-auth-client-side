import { NavLink } from "react-router-dom";
import "./Navbar.css";
import { useState } from "react";
import { FaBars } from "react-icons/fa";
import { RxCross1 } from "react-icons/rx";
const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const handleShowMenu = () => {
    setShowMenu(!showMenu);
  };

  const navList = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/add-job">Add Job</NavLink>
      </li>
      <li>
        <NavLink to="/my-posted-jobs">My Posted Jobs</NavLink>
      </li>
      <li>
        <NavLink to="/my-bids">My Bids</NavLink>
      </li>
      <li>
        <NavLink to="/bid-requests">Bid Requests</NavLink>
      </li>
    </>
  );
  const userNavList = (
    <>
      <li>
        <NavLink to="/user">User</NavLink>
      </li>
      <li>
        <NavLink to="/login">Login</NavLink>
      </li>
    </>
  );
  return (
    <div className="relative">
      <nav className="flex items-center shadow-lg">
        <div className="flex items-center md:gap-3 gap-1 border-r-[1px] border-r-solid border-r-gray-400 md:p-5 p-2">
          <img
            src="https://i.ibb.co/JvYPn2V/fusion-logo.png"
            alt="Job Fusion Logo"
          />
          <h3 className="font-bold md:text-3xl">JobFusion</h3>
        </div>

        <ul className="desktop lg:flex lg:flex-row flex-col gap-10 font-semibold p-5 flex-1 hidden">
          {navList}
        </ul>

        <ul className="flex md:gap-10 md:p-5 gap-2 p-2 font-bold lg:flex-none flex-1">
          {userNavList}
        </ul>

        <div className="lg:hidden">
          <FaBars
            onClick={handleShowMenu}
            className="me-2 text-2xl cursor-pointer"
          ></FaBars>
        </div>

        {/* Mobile Menu  */}
        <div className={`absolute top-0 right-0 w-full ${showMenu ? '' : 'hidden'}`}>
          <ul className="mobile flex lg:flex-row flex-col font-semibold flex-1 lg:hidden bg-[#2A2A2A] text-white">
            <p className="flex justify-end p-1"><RxCross1 onClick={handleShowMenu} className="font-bold text-3xl cursor-pointer border-2 border-solid border-white"></RxCross1></p>
            <div className="flex items-center md:gap-3 gap-1 border-r-[1px] border-r-solid border-r-gray-400 md:p-5 p-2">
              <img
                src="https://i.ibb.co/JvYPn2V/fusion-logo.png"
                alt="Job Fusion Logo"
              />
              <h3 className="font-bold md:text-3xl">JobFusion</h3>
              <ul className="flex md:gap-10 md:p-5 gap-2 p-2 font-bold">
                {userNavList}
              </ul>
            </div>
            {navList}
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
