import Button from "react-bootstrap/esm/Button";
import Container from "react-bootstrap/esm/Container";
import { Link } from "react-router-dom";





function Footer() {
    return (
        <Container fluid style={{ width: "100%", bottom: "0", height: "20vh", backgroundColor: "#212529", margin: "0", padding: "0", position: "fixed", display: "flex" }}>
            <div className="collabora">
                <h2>FooDelivery for Business</h2>
                <span>Entra a far parte della nostra famiglia</span>
                <Button variant="info">
                    <Link to='unisciti' style={{ textDecoration: 'none', color: 'inherit' }}>
                        Unisciti
                    </Link>
                </Button>
            </div>
        </Container>
    )
}
export default Footer;