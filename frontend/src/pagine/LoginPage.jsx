import Container from 'react-bootstrap/esm/Container';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Login from '../componenti/LoginForm';
import Register from '../componenti/RegisterForm';
import NavbarMenu from '../componenti/NavbarMenu';
function LoginPage() {
    return(
        <>
        <NavbarMenu/>
        <Container style={{"display":"flex","justifyContent":"center","height":"80vh","alignItems":"center"}} >
            <Container>
            <Tabs style={{"width":"70vh"}} fill justify>
                <Tab eventKey="accedi" title="Accedi">
                    <Container>
                        <Login/>
                    </Container>
                    
                </Tab>
                <Tab eventKey="register"  title="Registrati">
                    <Register/>
                </Tab>
            </Tabs>
            </Container>
            
        </Container>
        
        </>
        

    )
}


export default LoginPage;