import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Form from 'react-bootstrap/Form';
import { useEffect, useState } from 'react';
import React from 'react'
import axios from "axios";
import ShopCard from "../componenti/ShopCard";
import ElencoTag from "../componenti/ElencoTag";
import Button from "react-bootstrap/esm/Button";
function ElencoRistoranti() {
    const [post, setPost] = useState();
    useEffect(() => {
        axios.get("http://localhost:5000/api/shop/show")
            .then((res) => {
                setPost(res.data)
            })
    })
    return (
        <Container>
            <Container >
                <Row>
                    <Form style={{margin:"40px"}}>
                        <ElencoTag />
                        <Button>
                            Cerca
                        </Button>
                    </Form>
                </Row>
            </Container>
            <Container className='album py-5 bg-light'>
                <Container>
                    <Row>
                        {
                            post?.map(card => (<ShopCard
                                key={card._id}
                                id={card._id}
                                nome={card.nome}
                                tags={card.tags}
                                address={card.address}
                                descrizione={card.descrizione}

                            />))
                        }
                    </Row>
                </Container>
            </Container>
        </Container>
    )
}

export default ElencoRistoranti;