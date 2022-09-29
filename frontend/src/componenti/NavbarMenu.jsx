import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from "react-router-dom";


function NavbarMenu() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
        <Navbar.Brand href="#home" style={{marginLeft:"10px"}}>FooDelivery</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto" >
            <Nav.Link >
              <Link  to='/' style={{ textDecoration: 'none',color:'inherit' }}>
                Home
              </Link>
            </Nav.Link>
            <Nav.Link ><Link  to='' style={{ textDecoration: 'none',color:'inherit' }}>Ristoranti</Link></Nav.Link>
            <Nav.Link>
              <Link to='login'style={{ textDecoration: 'none' ,color:'inherit'}}>
                Login
              </Link>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
    </Navbar>
  );
}

export default NavbarMenu;