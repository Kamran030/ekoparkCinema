import React from "react";

// import { useTranslation } from 'react-i18next'
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import logo from "../images/zirecinemalogo.png";

const Navigationbar = () => {
  const langs = [
    {
      id: 1,
      name: "AZ",
    },
    {
      id: 2,
      name: "RU",
    },
  ];
  return (
    <div>
      <Navbar
        collapseOnSelect
        expand="lg"
        variant="dark"
        className="navigationBar"
      >
        <Container>
          <Navbar.Brand href="/">
            <img src={logo} alt="" srcset="" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="justify-content-end flex-grow-1 pe-3 navlinks">
              <Nav.Link href="/#features">FİLMLƏR</Nav.Link>
              <Nav.Link href="/#pricing">CƏDVƏL</Nav.Link>
              <Nav.Link href="/#pricing">KİNOTEATR</Nav.Link>
              <a className="nav-link call" href="tel:+994704048869">
                <ion-icon
                  name="call"
                  role="img"
                  className="md hydrated"
                  aria-label="call"
                ></ion-icon>{" "}
                070 404 88 69
              </a>

              <select className="lang">
                {langs.map((lang) => (
                  <option key={lang.id} value={lang.id}>
                    {lang.name}
                  </option>
                ))}
              </select>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Navigationbar;
