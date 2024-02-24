import logo from "../../assets/logo.png";

const Header = () => {
  console.log("Header rendered....");
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={logo} />
      </div>
      <div className="navbar">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Cart</li>
          <li>Contact Us</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
