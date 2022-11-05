import { useRef } from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';
import { useToggle, useOutsideClick } from '../../hooks';
import { logo, menu, close } from '../../assets/icons';
import classes from './header.module.scss';
import NavLinks from '../UI/NavLinks';
import { navLinks } from '../../constants';


const Header = () => {
  const refToggle: any = useRef(null);
  const [isShowMenu, toogleMenu, closeMenu] = useToggle()
  useOutsideClick(refToggle, closeMenu, isShowMenu);

  return (
    <header>
      <Container>
        <Navbar variant="dark" expand="md" className="d-flex justify-content-between">
          <Navbar.Brand href="/">
            <img
                src={logo}
                width="124"
                height="32"
                className="d-inline-block align-top"
                alt="logo"
            />
          </Navbar.Brand>

          <Navbar.Toggle className="border-0">
            <img
              ref={refToggle}
              src={isShowMenu ? close : menu}
              alt="menu"
              width={28}
              height={28}
              onClick={() => {
                toogleMenu()
              }}
            />
          </Navbar.Toggle>
          <div className={`d-md-none ${classes.sidebar} ${!isShowMenu ? "d-none" : "d-md-none"}`}>
            <Nav className="justify-content-end flex-column flex-1 fade-in-up">
              <NavLinks navLinks={navLinks} />
            </Nav>
          </div>
          <div className="d-none d-md-block">
            <Nav className="justify-content-end flex-1">
              <NavLinks navLinks={navLinks}/>
            </Nav>
          </div>
        </Navbar>
      </Container>
    </header>
  );
} 
  
export default Header;