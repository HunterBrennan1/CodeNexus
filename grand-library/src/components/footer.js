import { Container, Row, Col } from "react-bootstrap";
import React from 'react';
import PhoneIcon from "../assets/imgs/iconmonstr-phone-1.svg"
import MailIcon from "../assets/imgs/iconmonstr-email-3.svg"

export const Footer = () => {
  return (
    <section className="footer-section">
      <Container>
        <Row>
          <Col>
            <div className="footer-wrapper">
              <div className="footer-info-container">
                <h2 className="footer-title"><span className="footer-title-span">Developer</span> Buddy</h2>
                <p>We designed the application to be used by new and seasoned developers to find new and exciting technologies</p>
                <p className="footer-text-email"><img src={MailIcon} className="footer-icon"></img>Hunterbrennandev@gmail.com</p>
              </div>
              <div className="footer-info-container">
                <h2 className="footer-title">Technologies</h2>
                <p className="footer-text">Css</p>
                <p className="footer-text">Javascript</p>
                <p className="footer-text">React</p>
                <p className="footer-text">Figma</p>
                <p className="footer-text">Node</p>
              </div>
              <div className="footer-info-container">
                <h2 className="footer-title">Our Goals</h2>
                <p className="footer-text">Help New Developers</p>
                <p className="footer-text">Organize multiple tools in one place</p>
                <p className="footer-text">Learn from others</p>
              </div>
              <div className="footer-info-container">
                <h2 className="footer-title">SUBSCRIPTION</h2>
                <p className="footer-text">Apply with your Email adress for latest news & updates.</p>
                <input className="footer-input" type="email" placeholder="Enter Email Adress"></input>
                <button className="footer-submit-btn">Submit</button>
              </div>
            </div>

          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Footer;