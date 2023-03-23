import React from 'react'
import { Container, Logo, ContainerIcons, Icons, Option } from './styles'
import { BsSearch, BsBag } from 'react-icons/bs'


export default function Header() {

    return (
        <Container>
            <Logo src="https://i.pinimg.com/originals/08/a1/f7/08a1f7e68c1804749579a1329078f6c4.jpg" />
            <ContainerIcons>
                <Option>Produtos</Option>
                <Option>Campanhas</Option>
                <Icons>
                    <BsSearch size={25} />
                </Icons>
                <Icons>
                    <BsBag size={25} />
                </Icons>
            </ContainerIcons>
        </Container>
    )
}