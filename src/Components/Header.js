import { Navbar } from 'react-bootstrap';
import Pheonix from '../logo/server.webp';
function Header() {
    return (
        <Navbar className="position-fixed w-100 nav" bg="dark" variant="dark">
            <Navbar.Brand href="#home">
                <img
                    alt=""
                    src={Pheonix}
                    width="30"
                    height="30"
                    className="d-inline-block align-top"
                />{' '}
                Донат Phoenix Project
            </Navbar.Brand>
        </Navbar>
    );
}
export default Header;