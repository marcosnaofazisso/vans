import React from 'react'
import { Container, Logo, ContainerIcons, Icons, Option } from './styles'
import { BsSearch, BsBag } from 'react-icons/bs'


export default function Header() {

    const featureNotReadyYet = () => {
        alert("Oopsy Daisy! This feature is not ready yet...")
    }

    return (
        <Container>
            <Logo src="https://i.pinimg.com/originals/08/a1/f7/08a1f7e68c1804749579a1329078f6c4.jpg" style={{ cursor: 'pointer' }} onClick={() => featureNotReadyYet()}/>
            <ContainerIcons>
                <Option onClick={() => featureNotReadyYet()}>Produtos</Option>
                <Option onClick={() => featureNotReadyYet()}>Campanhas</Option>
                <Icons>
                    <BsSearch size={window.innerWidth > 800 ? 25 : 15} onClick={() => featureNotReadyYet()} />
                </Icons>
                <Icons>
                    <BsBag size={window.innerWidth > 800 ? 25 : 15} onClick={() => featureNotReadyYet()} />
                </Icons>
            </ContainerIcons>
        </Container>
    )
}