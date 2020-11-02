import React, { FormEvent, useState } from 'react'
import { FiArrowLeft } from 'react-icons/fi'
import { useHistory } from 'react-router-dom'

import { Background, Wrapper, BackButton } from '../styles/screens/ForgotPassword'

import Logo from '../images/Logo-taller.svg'
import api from '../services/api'

const ResetPassword: React.FC = ({match}:any) => {
    
    const [password, setPassword] = useState('')
    const [password2, setPassword2] = useState('')

    const history = useHistory()

    async function handleSubmit(event:FormEvent){
        event.preventDefault()

        const {email, token} = match.params

        const data = {
            password,
            email, 
            token

        }

        const response = await api.post('/user/reset_password', data)

        console.log(response)
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
                <FiArrowLeft onClick={()=> history.push('/') } size={24} color={"#15C3D6"} />
            </BackButton>
            <form onSubmit={handleSubmit}>
                <h2>Redefinição de senha</h2>
                <p>Escolha uma nova senha para você acessar o dashboard do Happy</p>
                
                <label htmlFor="password">Nova senha</label>
                <input type="password" name="password" value={password} onChange={(event) => setPassword(event.target.value)}/> 
                
                <label htmlFor="password2">Repetir senha</label>
                <input type="password" name="password" value={password2} onChange={(event) => setPassword2(event.target.value)}/>
                <button type="submit">Enviar</button>
            </form>
        </Background>
    )
}

export default ResetPassword