import React, { useState } from 'react'
import Container from 'react-bootstrap/esm/Container'
import { useLocation } from 'react-router-dom'
import Form from 'react-bootstrap/Form';
import { PaymentInputsWrapper, usePaymentInputs } from 'react-payment-inputs';
import images from 'react-payment-inputs/images';
export default function Acquisto() {
    const location = useLocation()
    const [cardNumber, setCardNumber] = useState()
    const [cardED, setCardED] = useState()
    const [cardCVC, setCardCVC] = useState()
    const {
        wrapperProps,
        getCardImageProps,
        getCardNumberProps,
        getExpiryDateProps,
        getCVCProps
    } = usePaymentInputs();
    const handleCardNumber = (e) => {
        e.preventDefault();
        setCardNumber(e.target.value)
    }
    const handleCardED = (e) => {
        e.preventDefault();

        setCardED(e.target.value)
    }
    const handleCardCVC = (e) => {
        e.preventDefault();

        setCardCVC(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.warn(cardNumber,cardED,cardCVC)
    }
    return (
        <Container style={{ "width": "100%", "height": "100%", "display": "flex", "flexDirection": "row", margin: "0", "justifyContent": "space-around", "alignItems": "center", "marginTop": "20vh" }}>
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



            <Container style={{ "width": "30vw" }} >
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="formGridAddress1">
                        <Form.Label>Indirizzo di fatturazione</Form.Label>
                        <Form.Control placeholder="1234 Main St" />
                    </Form.Group>
                    <h3>Inserisci i dati di pagamento</h3>
                    <Container>
                        <PaymentInputsWrapper {...wrapperProps}>
                            <svg {...getCardImageProps({ images })} />
                            <input {...getCardNumberProps({ onChange: handleCardNumber })} value={cardNumber} />
                            <input {...getExpiryDateProps({ onChange: handleCardED })} value={cardED} />
                            <input {...getCVCProps({ onChange: handleCardCVC })} value={cardCVC} />
                        </PaymentInputsWrapper>
                        <button className='btn btn-primary' type='submit'>Paga</button>
                    </Container>
                </Form>
            </Container>
        </Container>
    )
}
