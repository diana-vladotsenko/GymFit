import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';

function Header() {
    return (
        <>
            <Navbar collapseOnSelect expand="lg" bg="#ECEBFA" variant="light" className="header">
                <Container fluid style={{ flexDirection: "column" }}>
                    <Navbar.Brand as={Link} to="/" className="logo">Logo</Navbar.Brand>
                    <div className="subheader">
                        <div style={{ flex: 1 }}>
                            <button className="primary-button primary-button--s" style={{ marginRight: "20px" }}>Login</button>
                            <button className="secondary-button">Register</button>
                        </div>
                        <div>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        </div>                   
                    </div>
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto ps-2">
                            <Nav.Link as={Link} to="/home" className="text-dark" >Home
                            </Nav.Link>
                            <Nav.Link as={Link} to="/" className="text-dark">About
                            </Nav.Link>
                            <Nav.Link as={Link} to="/" className="text-dark">Services
                            </Nav.Link>
                            <Nav.Link as={Link} to="/" className="text-dark">Smth lese
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
}

export default Header;
