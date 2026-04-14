import { useState } from "react";
import {  Link, NavLink } from "react-router";


function Header() {
  // toggle menu for mobile view
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };
    const [menuOpen, setMenuOpen] = useState(false)
    const barMenu = () => {
        setMenuOpen(!menuOpen)
    };

  return (
    <section className="w-full fixed top-0 z-50 ">
      <div className="flex  justify-between p-4 bg-sky-600 text-white  items-center text-2xl h-full">
        <h2>Light Shop</h2>
        <button className="lg:hidden" onClick={toggleMenu}>
          &#8801;
        </button>

        {/* Desktop Menu start */}

        <ul className=" justify-around gap-6 hidden lg:flex ">
          <li className="hover:text-black">
            <Link to="/" onClick={toggleMenu}>Home</Link>
          </li>


          {/* Shop Menu start */}
          <li className="hover:text-black">
            <button className={`${menuOpen ? "text-sky-400" : "hover:text-sky-400"}`} onClick={barMenu}>
              Shop&#129171;
            </button>
            <div className="fixed top-14 ">
              <div
                className={`flex flex-col justify-center items-center text-black text-2xl border-2 rounded-md w-40 border-black  ${menuOpen ? "block" : "hidden"}  border-t border-black  w-full`}
              >
                <NavLink
                  to="/outdoors"
                  className="border-b p-2 border-black w-full text-center hover:text-sky-400"
                  onClick={() => {
                    barMenu();
                  }}
                >
                  Outdoors
                </NavLink>
                <NavLink
                  to="/indoor"
                  className="border-b border-black w-full text-center p-2 hover:text-sky-400"
                  onClick={() => {
                    barMenu();
                  }}
                >
                  Indoor
                </NavLink>
                <NavLink
                  to="/nightlamp"
                  className="hover:text-sky-400 p-2"
                  onClick={() => {
                    barMenu();
                  }}
                >
                  Nightlamp
                </NavLink>
              </div>
            </div>
          </li>

          {/* Shop menu end */}


          <li className="hover:text-black" >
            <Link to="/services">Services</Link>
          </li>
          <li className="hover:text-black">
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
        {/* Desktop Menu end */}
      </div>
      {/* Mobile Menu  start*/}

      <div
        className={`fixed z-50 bg-gray-400 top-14 min-h-fit inset-0  transform ${isOpen ? "translate-x-0" : "-translate-x-full"} duration-400 ease-in-out lg:hidden`}
      >
        <div className="flex flex-col border-2  border-black text-xl  h-full m-4  justify-left items-center rounded-2xl">
          <Link
            to="/"
            className="border-b-2 border-black hover:text-sky-400 w-full text-left p-2"
            onClick={toggleMenu}
          >
            Home
          </Link>
          {/* Shop Menu */}

          <div className="border-b-2 border-black w-full text-left p-2">
            <button className={` w-full text-left ${menuOpen ? "text-sky-400" : "hover:text-sky-400"}`} onClick={barMenu}>
              Shop&#129171;
            </button>
            <div
              className={`flex flex-col justify-center items-center  ${menuOpen ? "block" : "hidden"} border-t border-black  w-full`}
            >
              <NavLink
                to="/outdoors"
                className="border-b border-black w-full text-center hover:text-sky-400"
                onClick={() => {
                  toggleMenu();
                  barMenu();
                }}
              >
                Outdoors
              </NavLink>
              <NavLink
                to="/indoor"
                className="border-b border-black w-full text-center hover:text-sky-400"
                onClick={() => {
                  toggleMenu();
                  barMenu();
                }}
              >
                Indoor
              </NavLink>
              <NavLink
                to="/nightlamp"
                className="hover:text-sky-400"
                onClick={() => {
                  toggleMenu();
                  barMenu();
                }}
              >
                Nightlamp
              </NavLink>
            </div>
          </div>

          <Link
            to="/services"
            className="border-b-2 border-black hover:text-sky-400 w-full text-left p-2"
            onClick={toggleMenu}
          >
            Services
          </Link>
          <Link
            to="/contact"
            className="  hover:text-sky-400 w-full text-left p-2"
            onClick={toggleMenu}
          >
            Contact
          </Link>
        </div>
      </div>
      {/* Mobile Menu  end*/}
    </section>
  );
}
export default Header