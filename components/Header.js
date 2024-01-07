import { LOGO_URL } from "../utils/constant";
const Header = () => {
    return (
      <div className="header">
        <div className="logo-container">
          {/* jsx does not work well with local image*/}
          <img
            className="logo"
            src= {LOGO_URL}
            alt="Image description"
          />
        </div>
        <div className="nav-items">
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
            <li>Cart</li>
          </ul>
        </div>
      </div>
    );
  };

export default Header;