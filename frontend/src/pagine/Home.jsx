import Container from "react-bootstrap/esm/Container";
import Footer from "../componenti/Footer";
import Carousel from 'react-bootstrap/Carousel';
import img5 from "../immagini/img5.jpg";
import img6 from "../immagini/img6.jpg";
import img7 from "../immagini/img7.png";

function Home() {
    return (
        <>
            <Container style={{ "display": "flex", "justifyContent": "center", "height": "80vh", "alignItems": "center" }}>
                <Carousel variant="light" style={{"marginTop":"50px"}}>
                    <Carousel.Item>
                        <img
                            className="d-block"
                            src={img7}
                            alt="First slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block "
                            src={img5}
                            alt="Second slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block "
                            src={img6}
                            alt="Third slide"
                        />
                    </Carousel.Item>
                </Carousel>
            </Container>
            <Footer />
        </>

    )
}
export default Home;