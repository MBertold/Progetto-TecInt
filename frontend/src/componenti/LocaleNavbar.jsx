import React from 'react'
import authService from './servizi';
import { useEffect, useState } from 'react';
import Container from 'react-bootstrap/esm/Container';

export default function LocaleNavbar() {
    onst[currentShop, setCurrentShop] = useState(undefined);
    useEffect(() => {
        const shop = authService.getCurrentUser();
        if (shop) {
            setCurrentShop(shop);
        }
    }, []);
    const logOut = () => {
        authService.shoplogout();
    };
    return (

        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <NavBar.Text>
                            {currentShop.name}
                        </NavBar.Text>
                        <Nav.Link>Ordini</Nav.Link>
                    </Nav>
                    <Nav>
                        <Nav.Link>
                            <Link to='/' style={{ textDecoration: 'none', color: 'inherit' }} onClick={logOut}>
                                Logout
                            </Link>
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>

    )
}
