import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Form from 'react-bootstrap/Form';
import { useEffect, useState } from 'react';
import React from 'react'
import axios from "axios";
import ShopCard from "../componenti/ShopCard";
import ElencoTag from "../componenti/ElencoTag";
function ElencoRistoranti() {
    const [tags, setTags] = useState('')

    const [post, setPost] = useState();

    useEffect(() => {
        axios.get("http://localhost:5000/api/shop/show", { params: { tags: tags } })
            .then((res) => {
                setPost(res.data)
            })
    })
    const handleTags = (e) => {
        setTags(e.target.value)
    }
    return (
        <Container>
            <Container style={{ "marginTop": "10vh", "marginBottom": "10vh" }}>
                <Row>
                    <Form>
                        <ElencoTag onChange={handleTags} />
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