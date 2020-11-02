import React, { FormEvent, useState } from 'react'
import { FiArrowLeft } from 'react-icons/fi'
import { useHistory } from 'react-router-dom'

import { Background, Wrapper, BackButton } from '../styles/screens/ForgotPassword'

import api from '../services/api'
import Logo from '../images/Logo-taller.svg'

const ForgotPassword:React.FC = () => {

    const [email, setEmail] = useState('')


    const history = useHistory()

    async function handleSubmit(event:FormEvent){
        event.preventDefault()
        
        const data = {
            email
        }

        api.post("user/forgot_password", data)
        
    }

    return( 
        <Background>
            <Wrapper>
                <img src={Logo} />
                <div className="location">
                    <strong>Pernambuco</strong>
                    <span>Olinda</span>
                </div>
            </Wrapper>
            <BackButton>
                <FiArrowLeft onClick={()=> history.goBack() } size={24} color={"#15C3D6"} />
            </BackButton>
            <form onSubmit={handleSubmit}>
                <h2>Esqueci a senha</h2>
                <p>Sua redefinição de senha será enviada para o e-mail cadastrado.</p>
                <label htmlFor="E-mail">E-mail</label>
                <input type="email" name="email" value={email} onChange={(event)=> setEmail(event.target.value)}/>
                <button type="submit">Enviar</button>
            </form>
        </Background>
    )
}

export default ForgotPassword