import React from 'react'
import { Container, BuyButton } from './styles'

export default function BuyNowSection() {

    const featureNotReadyYet = () => {
        alert("Oopsy Daisy! This feature is not ready yet...")
    }

    return (
        <Container>
            <BuyButton onClick={() => featureNotReadyYet()}>𐃇Buy Now￫ </BuyButton>
        </Container>
    )
}