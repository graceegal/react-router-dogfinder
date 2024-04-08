import { NavLink, Link } from "react-router-dom";
import "./NavBar.css";


/** NavBar for all pages.
 *
 * Props: dogs [ {name: , age: , src: , facts: [fact1, fact2, ...]}, ...  ]
 * State: none
 *
 * App -> NavBar
*/
function NavBar({ dogs }) {
    return (
        <nav className="Nav-Link">
            <NavLink to="/dogs" end>All Dogs</NavLink>
            {dogs.map(dog =>
                <NavLink key={dog.name} to={`/dogs/${dog.name}`}>{dog.name}</NavLink>
            )}
        </nav>
    );
}

export default NavBar;