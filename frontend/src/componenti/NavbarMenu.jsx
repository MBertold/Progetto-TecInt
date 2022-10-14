import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/esm/Button';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Outlet, Link, useNavigate } from "react-router-dom";
import authService from './servizi';
import Offcanvas from 'react-bootstrap/Offcanvas';
import CartItem from './CartItem';
import axios from 'axios';
import Container from "react-bootstrap/esm/Container";

function NavbarMenu() {
  const [currentUser, setCurrentUser] = useState(undefined);
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [post, setPost] = useState();

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
  useEffect(() => {

    axios.get("http://localhost:5000/api/cart/show/", { params: { username: currentUser?.username } })
      .then((res) => {
        setPost(res.data)

      })
  })

  return (
    <>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Navbar.Brand href="#home" style={{ marginLeft: "10px" }}>FooDelivery</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto" >
            <Nav.Link >
              <Link to='/' style={{ textDecoration: 'none', color: 'inherit' }}>
                Home
              </Link>
            </Nav.Link>
            <Nav.Link ><Link to='/ristoranti' style={{ textDecoration: 'none', color: 'inherit' }}>Ristoranti</Link></Nav.Link>
          </Nav>
          <Nav style={{ marginRight: '40px' }}>
            {currentUser ? (
              <>
                <Nav >
                  <Nav.Link>
                    <Link style={{ textDecoration: 'none', color: 'inherit' }} onClick={logOut}>
                      Logout
                    </Link>
                  </Nav.Link>
                  <Navbar.Text style={{ marginLeft: "30px", marginRight: '30px' }}>
                    <span>Signed in as : {currentUser.username}</span>
                  </Navbar.Text>

                  <Button onClick={handleShow}>
                    Carrello
                  </Button>
                </Nav>
              </>
            ) : (
              <Nav>
                <Nav.Link>
                  <Link to='/login' style={{ textDecoration: 'none', color: 'inherit' }}>
                    Login
                  </Link>
                </Nav.Link>
              </Nav>
            )}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Outlet />
      <Offcanvas show={show} onHide={handleClose} placement={'end'}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Carrello</Offcanvas.Title>
          
        </Offcanvas.Header>
        <Offcanvas.Body>
        <Container style={{display:'flex',flexDirection:'column'}}>
              {
                post?.map(item =>(<CartItem 
                  key={item?._id}
                  id={item?.productId}
                  nome={item?.productName}
                  prezzo={item?.productPrice}
                />

                ))
              }
              </Container>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default NavbarMenu;