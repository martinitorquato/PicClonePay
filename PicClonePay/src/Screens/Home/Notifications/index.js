import React from 'react'
import { Wrapper, Header, Title, Container, CardNotification, CardBodyNotification, CardDetailsNotification, CardInfoNotification } from './styles'

export default function Notifications() {
    return(
        <Wrapper>
            <Container>
            <Header>
                <Title>Notificações</Title>
            </Header>
            <CardNotification>
                <CardBodyNotification>
                    <CardDetailsNotification>
                        Você não possui notificações.
                        <CardInfoNotification>
                        </CardInfoNotification>
                    </CardDetailsNotification>
                </CardBodyNotification>
            </CardNotification>
            </Container>
        </Wrapper>
    )
}