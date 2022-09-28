import Container from "react-bootstrap/esm/Container";
import NavbarMenu from "../componenti/NavbarMenu";
import WelcomeSearch from "../componenti/WelcomeSearch";

function Home(){
    return(
        <>
        <NavbarMenu />
        <Container style={{"display":"flex","justifyContent":"center","height":"80vh","alignItems":"center"}}>
            <WelcomeSearch/>
        </Container>
            
        </>
        
    )
}
export default Home;