import React from 'react'
import { FooterContainer } from './styles'
import { Title, SubTitle, SubTitleAddress, TextContainer, CreditsContainer } from './styles'

export default function Footer() {
    return (
        <>
            <FooterContainer>
                <TextContainer>
                    <Title>what you get</Title>
                    <SubTitle>is what we do</SubTitle>
                </TextContainer>
                <CreditsContainer>
                    <img src={'https://logospng.org/download/vans/logo-vans-2048.png'} alt="Logo Vans" width={100} style={{ backgroundColor: '#FFF', padding: '1rem', borderRadius: '8px' }} />
                    <div display={{ display: 'flex', flexDirection: 'column' }}>
                        <SubTitleAddress>© Vans, A VF Company. California Transparency in Supply Chain Act of 2010. Modern Slavery Statement</SubTitleAddress>
                        <SubTitleAddress>Project developed by Marcos Vinicius Ferreira for study purposes only. </SubTitleAddress>
                    </div>
                </CreditsContainer>
            </FooterContainer>
        </>
    )
}