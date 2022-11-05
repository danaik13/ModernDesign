import { NavLink } from '../../types';
import { Link } from "react-scroll";

interface PropsNavLinks {
  navLinks: NavLink[];
}

const NavLinks = ({navLinks}: PropsNavLinks) =>  (
  <>
    {navLinks.map((navLink: NavLink) => (
        <Link key={navLink.id} to={navLink.id} spy={true} className="nav-link">
          {navLink.title}
        </Link>
    ))}
  </>
)
  
export default NavLinks;