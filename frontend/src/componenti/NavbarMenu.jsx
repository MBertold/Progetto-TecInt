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
import Row from 'react-bootstrap/esm/Row';
import OrderButton from './OrderButton';


function NavbarMenu() {
  const [currentUser, setCurrentUser] = useState(undefined);
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [post, setPost] = useState();
  const [total,setTotal] = useState()

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
  useEffect(()=>{
    axios.get(`http://localhost:5000/api/cart/total/`, { params: { username: currentUser?.username } }).then((res)=>{setTotal(res.data)})
  })
  const handleCart = (e) => {
    e.preventDefault();
    handleShow();

  }

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
                    <Link to='/ordini'style={{ textDecoration: 'none', color: 'inherit' }}>
                      Ordini
                    </Link>
                  </Nav.Link>
                  <Nav.Link>
                    <Link style={{ textDecoration: 'none', color: 'inherit' }} onClick={logOut}>
                      Logout
                    </Link>
                  </Nav.Link>
                  <Navbar.Text style={{ marginLeft: "30px", marginRight: '30px' }}>
                    <span>Signed in as : {currentUser.username}</span>
                  </Navbar.Text>

                  <Button onClick={handleCart}>
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
      <Offcanvas show={show} onHide={handleClose} placement={'end'} style={{height:"100%"}}>
        <Offcanvas.Header closeButton style={{height:"10%"}}>
          <Offcanvas.Title >Carrello</Offcanvas.Title>

        </Offcanvas.Header>
        <Offcanvas.Body style={{height:"90%"}}>
          <Container style={{ display: 'flex', flexDirection: 'column' ,maxHeight:"50%",overflow:"auto"}}>
            {
              post?.map(item => (<CartItem
                key={item?.item._id}
                id={item?.item._id}
                nome={item?.item.nome}
                prezzo={item?.item.prezzo}
              />

              ))
            }
          </Container>
          <Container style={{"position":"fixed"}}>
            <Container style={{marginTop:"20px"}}>
              <h4>Totale : {total}</h4>
            </Container>
            <Container>
             <OrderButton
             post ={post} 
             total={total}
             />
            </Container>
          </Container>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default NavbarMenu;