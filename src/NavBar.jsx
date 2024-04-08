import { NavLink } from "react-router-dom";
import "./NavBar.css"

function NavBar({ dogs }) {
    return (
      <nav className="Nav-Link">
        <NavLink to="/dogs">All Dogs</NavLink>
        {dogs.map(dog =>
            <NavLink to={`/dogs/${dog.name}`}>{dog.name}</NavLink>
        )}
      </nav>
    );
  }

  export default NavBar;