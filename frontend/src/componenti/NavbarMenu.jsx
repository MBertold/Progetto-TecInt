import { useEffect, useState } from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Outlet, Link, useNavigate} from "react-router-dom";
import authService from './servizi';

function NavbarMenu() {
  const [currentUser, setCurrentUser] = useState(undefined);
  const navigate = useNavigate();
  useEffect(() => {
    const user = authService.getCurrentUser();
    if (user) {
      setCurrentUser(user);
    }
  }, []);
  const logOut = () => {
    
    authService.logout();
    navigate('/')
    window.location.reload();
    
  };


  return (
    <>
    <Navbar bg="dark" variant="dark" expand="lg">
      <Navbar.Brand href="#home" style={{ marginLeft: "10px" }}>FooDelivery</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto" >
          <Nav.Link >
            <Link to='/' style={{ textDecoration: 'none', color: 'inherit' }}>
              Home
            </Link>
          </Nav.Link>
          <Nav.Link ><Link to='/ristoranti' style={{ textDecoration: 'none', color: 'inherit' }}>Ristoranti</Link></Nav.Link>
          <Nav>
          {currentUser ? (
            <>
              <Nav.Link>
                <Link  style={{ textDecoration: 'none', color: 'inherit' }} onClick={logOut}>
                  Logout
                </Link>
              </Nav.Link>
              <Navbar.Text style={{ marginLeft: "30px" }}>
                <span>Signed in as : {currentUser.username}</span>
              </Navbar.Text>
            </>
          ) : (<Nav.Link>
            <Link to='/login' style={{ textDecoration: 'none', color: 'inherit' }}>
              Login
            </Link>
          </Nav.Link>
          )}
          </Nav>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
    <Outlet/>
    </>
  );
}

export default NavbarMenu;