import { LOGO_URL } from "../utils/constants";

 const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          src={LOGO_URL}
          className="logo"></img>
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact US</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;