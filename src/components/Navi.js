import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import '../styles/Navi.css';

function Navi() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="light">
      <Container className="navi ms-auto">
        <Navbar.Brand as={Link} to='/'><img src="https://img.icons8.com/ios/50/null/football.png" alt='banner'/>AO</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav"  />
        <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto"></Nav>
          <Nav className="me-auto">
            <Nav.Link as={Link} eventKey='0' to='/about'>About</Nav.Link>
            <Nav.Link as={Link} eventKey='1' to='/contact'>Contact</Nav.Link>
            <NavDropdown title="Media" id="collasible-nav-dropdown">
              <NavDropdown.Item as={Link} eventKey='2' to='/media/videos'>Videos</NavDropdown.Item>
              <NavDropdown.Item as={Link} eventKey='3' to='/media/photos'>Photos</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navi;