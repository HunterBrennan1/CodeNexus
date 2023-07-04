import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import ProfileIcon from '../assets/imgs/profile-icon.svg';
import Daymode from '../assets/imgs/daymode-icon.svg';

function Navbartop() {
  return (
    <section>
      <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary navbar_container">
        <Container>
          <Navbar.Brand href="#home">Web Dev Buddy</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto nav_btn_icon_container">
              <Nav.Link href="#features">Home</Nav.Link>
              <Nav.Link href="#pricing">About us</Nav.Link>
              {/* <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown> */}
            </Nav>
            <Nav>
              <Nav.Link className='sign_in_btn' href="#deets">Sign In</Nav.Link>
              <Nav.Link className='profile_icon_container' eventKey={2} href="#">
                Sign Up
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <p className='top_banner_text'>A tool library made for developers, by developers.</p>
    </section>
  );
}

export default Navbartop;