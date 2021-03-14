import {Nav, Navbar} from 'react-bootstrap';
import Pheonix from '../logo/server.webp';
function Header() {
    return (
        <>
            <Navbar className="position-fixed w-100 nav black"  variant="dark">
            <Navbar.Brand className="LogoText font-weight-lighter" href="#home">
                <img
                    alt=""
                    src={Pheonix}
                    width="35"
                    height="35"
                    className="d-inline-block align-top mr-1"
                />{' '}
                Phoenix Project - Проект игровых серверов
            </Navbar.Brand>
        </Navbar>
            <Navbar className="w-100 nav-1 text-center"  variant="dark">
                    <Nav className="ml-auto mr-auto mt-auto text-white pb-1">
                        <Nav.Link className="text-white h5 font-weight-light NavButton mb-0" href="#home">КЛАССИК</Nav.Link>
                        <Nav.Link className="text-white h5 font-weight-light NavButton ml-4 mr-4 mb-0" href="#features">КРЕАТИВ</Nav.Link>
                        <Nav.Link className="text-white h5 font-weight-light NavButton mb-0" href="#pricing">АНАРХИЯ</Nav.Link>
                    </Nav>
            </Navbar>
        </>
    );
}
export default Header;