import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";

const Header = () => {
  console.log("Header rendered....");
  const [btnNameReact, setBtnNameReact] = useState("Login");
  useEffect(() => {
    console.log("useEffect called in header");
  }, []);
  return (
    <div className="flex justify-between border border-black">
      <div>
        <img className="w-20 h-20" src={logo} />
      </div>
      <div className="flex list-none text-lg items-center">
        <ul className="flex list-none">
          <li className="px-4 py-4">
            <Link className="hover:text-gray-500" to="/">
              Home
            </Link>
          </li>
          <li className="px-4 py-4">
            <Link className="hover:text-gray-500" to="/about">
              About
            </Link>
          </li>
          <li className="px-4 py-4">
            <Link className="hover:text-gray-500" to="/cart">
              Cart
            </Link>
          </li>
          <li className="px-4 py-4">
            <Link className="hover:text-gray-500" to="/contact">
              Contact Us
            </Link>
          </li>
          <button
            className="bg-white text-gray-700 border border-gray-700 rounded-md px-2 py-1 mr-4 cursor-pointer hover:bg-gray-700 hover:text-white"
            onClick={() => {
              btnNameReact === "Login"
                ? setBtnNameReact("Logout")
                : setBtnNameReact("Login");
            }}
          >
            {btnNameReact}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
