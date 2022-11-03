import React, { useState, useEffect } from 'react'
import Container from 'react-bootstrap/esm/Container'
import { useLocation, useNavigate } from 'react-router-dom'
import Form from 'react-bootstrap/Form';
import authService from '../componenti/servizi';
import { PaymentInputsWrapper, usePaymentInputs } from 'react-payment-inputs';
import images from 'react-payment-inputs/images';
import axios from 'axios';
export default function Acquisto() {
    const navigate = useNavigate()
    const location = useLocation()
    const [currentUser, setCurrentUser] = useState(undefined);
    const [cardNumber, setCardNumber] = useState()
    const [cardED, setCardED] = useState()
    const [cardCVC, setCardCVC] = useState()
    useEffect(() => {
        const user = authService.getCurrentUser();
        if (user) {
            setCurrentUser(user);
        }
    }, []);

    const {
        wrapperProps,
        getCardImageProps,
        getCardNumberProps,
        getExpiryDateProps,
        getCVCProps,
        meta
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
        if (meta.error === undefined) {
            axios.post("http://localhost:5000/api/order/add", {
                cart: location.state.cart,

                nomeUtente: currentUser.username,
                ncard: cardNumber


            })
            navigate('/')

        }
    }
    return (
        <Container style={{ "width": "100%", "height": "100%", "display": "flex", "flexDirection": "row", "margin": "0", "justifyContent": "space-around", "alignItems": "center", "marginTop": "20vh" }}>
            <Container style={{ "border": "1px solid black", "width": "auto", "marginLeft": "5vw" }}>
                <Container>
                    <h2>Riepilogo ordine</h2>
                    <p>Totale : {location.state.total}</p>
                </Container>
                <br />

                <Container style={{ "height": "50vh", display: 'flex', flexDirection: 'column', width: "17vw", right: "0", margin: "0", "overflow": "auto" }}>
                    {
                        location.state.cart?.map(item => (
                            <Container style={{ "width": "10vw", "margin": "10px" }}>
                                <h4>{item.item?.nome}</h4>
                                <p>{item.item?.prezzo}</p>
                            </Container>

                        ))
                    }
                </Container>
            </Container>



            <Container style={{ "width": "30vw", "display": "flex", "flexDirection": "column" }} >
                <Form onSubmit={handleSubmit}>
                    <h3>Inserisci i dati di pagamento</h3>
                    <Container>
                        <PaymentInputsWrapper {...wrapperProps}>
                            <svg {...getCardImageProps({ images })} />
                            <input {...getCardNumberProps({ onChange: handleCardNumber })} value={cardNumber} />
                            <input {...getExpiryDateProps({ onChange: handleCardED })} value={cardED} />
                            <input {...getCVCProps({ onChange: handleCardCVC })} value={cardCVC} />
                        </PaymentInputsWrapper>
                        
                    </Container>
                    <button className='btn btn-primary' type='submit' style={{ "width": "90px", "marginTop": "10px" }}>Paga</button>
                </Form>
            </Container>
        </Container>
    )
}
