import React from 'react'
import { useHistory } from 'react-router-dom'

import { Background, Wrapper, Button } from '../styles/screens/SubmittedOrphanage'

export default function SubmittedOrphanage(){

    const history = useHistory()

    return (
        <Background>
            <Wrapper>
                <div>
                    <h1>Ebaaa!</h1>
                    <p>O cadastro deu certo e foi enviado ao administrador para ser aprovado. Agora é só esperar :)</p>
                    <Button onClick={()=> history.push("/app")}>Voltar para o mapa</Button>
                </div>
            </Wrapper>
        </Background>
    )
}