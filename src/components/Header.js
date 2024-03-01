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
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={logo} />
      </div>
      <div className="navbar">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>Cart</li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
          <button
            className="login"
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
