import { useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../../context/AuthContext";
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav'
import "./Navbar.css"


export default function NavbarComp() {
  const { user, logoutUser } = useContext(AuthContext);
  return (
    <>
    {user? (
      <Navbar className="Navbar" collapseOnSelect expand="lg">
        <Container>
          {/* <Navbar.Brand href="#home">Legacy Fantasy Football</Navbar.Brand> */}
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
          </Nav>
          <Nav>
            <Nav.Link className="navlink" href="#">{user.username}</Nav.Link>
            <Nav.Link className="navlink" onClick={logoutUser} href="/">
              Logout
            </Nav.Link>
          </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    ):
      <></>
  }
  </>
  );
}



