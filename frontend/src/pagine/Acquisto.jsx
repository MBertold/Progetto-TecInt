import React from 'react'
import Container from 'react-bootstrap/esm/Container'
import { useLocation } from 'react-router-dom'
import Form from 'react-bootstrap/Form';

export default function Acquisto() {
    const location = useLocation()
    return (
        <Container style={{ "width": "100%", "height": "100%", "display": "flex", "flexDirection": "row", margin: "0" ,"justifyContent":"space-around","alignItems":"center","marginTop":"20vh"}}>
            <Container style={{ "border": "1px solid black", "width": "auto", "marginLeft": "5vw" }}>
                <Container>
                    <h2>Riepilogo ordine</h2>
                </Container>
                <br />

                <Container style={{ "height": "50vh", display: 'flex', flexDirection: 'column', width: "17vw", right: "0", margin: "0", "overflow": "auto" }}>
                    {
                        location.state.cart?.map(item => (
                            <Container style={{ "width": "10vw", "margin": "10px" }}>
                                <h4>{item?.productName}</h4>
                                <p>{item?.productPrice}</p>
                            </Container>

                        ))
                    }
                </Container>

            </Container>



            <Container style={{"width":"30vw"}} >
                <Form>
                    <Form.Group className="mb-3" controlId="formGridAddress1">
                        <Form.Label>Indirizzo di fatturazione</Form.Label>
                        <Form.Control placeholder="1234 Main St" />
                    </Form.Group>
                    <h3>Inserisci i dati di pagamento</h3>
                    <Form.Group>
                        <Form.Label>Numero Carta</Form.Label>
                        <Form.Control placeholder="0000 0000 0000 0000" />
                        <Form.Label>Titola Carta</Form.Label>
                        <Form.Control placeholder="Mario Rossi" />
                        <Form.Label>CVV</Form.Label>
                        <Form.Control placeholder="123" />
                    </Form.Group>

                </Form>
            </Container>
        </Container>
    )
}
