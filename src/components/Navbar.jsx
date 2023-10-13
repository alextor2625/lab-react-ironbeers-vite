import { NavLink } from "react-router-dom";
import homeIcon from "../assets/home-icon.png";

function Navbar() {
  return (
    <nav className="navbar">

      <NavLink to="/">
        <img src={homeIcon} alt="navbar" />
      </NavLink>
    </nav>
  );
}

export default Navbar;
