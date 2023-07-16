import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import ProfileIcon from '../assets/imgs/profile-icon.svg';
import Daymode from '../assets/imgs/daymode-icon.svg';
import UpArrow from '../assets/imgs/up-arrow-4.png';
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';

function Navbartop() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <section>
      <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary navbar_container">
        <Container>
          <Navbar.Brand href="/">Code Nexus</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto nav_btn_icon_container">
              <Nav.Link href="/">Home</Nav.Link>
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
              <Nav.Link className='Tools_btn_nav' href="/tools">Tools</Nav.Link>
              <Nav.Link className='pro_btn' onClick={handleShow}>Go Pro</Nav.Link>
              <Modal className='pro_modal' show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                  <Modal.Title className='pro_modal_title'>Go Pro to unlock all the features</Modal.Title>
                </Modal.Header>
                <div>
                  <p className='pro_modal_desc'>Get all the power of Code Nexus without any limitations!</p>
                </div>
                <Modal.Body>
                  <ul>
                    <li className='pro_benefits'><strong>Remove ads</strong> and popups to enter our library of tools</li>
                    <li className='pro_benefits'><strong>Create Custom</strong> cards to fit personal accessories saved to your account forever!</li>
                    <li className='pro_benefits'><strong>First Dibs</strong> on exclusive content and rewards given to our users!</li>
                    <li className='pro_benefits'><strong>A Chance</strong> to have your very own projects listed on our app for others to use</li>
                  </ul>
                </Modal.Body>
                <Modal.Footer>
                  <Button className='pro_btn_price' href="/pro" variant="primary" onClick={handleClose}>
                    Upgrade for just $3/mo
                  </Button>
                </Modal.Footer>
              </Modal>
              <span className='divider'></span>
              <Nav.Link className='sign_in_btn' href="#deets">Sign In</Nav.Link>
              <Nav.Link className='profile_icon_container' eventKey={2} href="#">
                Sign Up
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <p className='top_banner_text'>A tool library made for developers, by developers.</p>
      <a className="back_to_top_btn" href="#"><img className="gotopbtn" src={UpArrow}></img></a>
    </section>
  );
}

export default Navbartop;