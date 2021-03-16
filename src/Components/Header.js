import {Nav, Navbar} from 'react-bootstrap';
import Phoenix from '../logo/server.webp';
import {Component} from "react";
import {NavLink} from "react-router-dom";

class Header extends Component{
    render() {
        return (
            <>
                <Navbar className="position-fixed w-100 nav z-index-2 black"  variant="dark">
                    <Navbar.Brand className="LogoText font-weight-lighter" href="#home">
                        <img
                            alt=""
                            src={Phoenix}
                            width="35"
                            height="35"
                            className="d-inline-block align-top mr-1"
                        />{' '}
                        Phoenix Project - Проект игровых серверов
                    </Navbar.Brand>
                </Navbar>
                <Navbar  className="w-100 nav-1 text-center"  variant="dark" expand="lg">
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav" className="mt-auto">
                    <Nav className="ml-auto mr-auto mt-auto text-white pb-1" >
                            <NavLink className="nav-link text-white h5 font-weight-light NavButton mb-0" activeClassName="bottom-border" to="/classic">КЛАССИК</NavLink>
                            <NavLink className="nav-link text-white h5 font-weight-light NavButton ml-4 mb-0 mr-4" activeClassName="bottom-border" to="/creative">КРЕАТИВ</NavLink>
                            <NavLink className="nav-link text-white h5 font-weight-light NavButton mb-0" activeClassName="bottom-border" to="/anarchy">АНАРХИЯ</NavLink>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </>
        );
    }
}
export default Header;