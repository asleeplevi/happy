import React, { FormEvent, useState } from 'react'
import { FiArrowLeft } from 'react-icons/fi'
import { Link } from 'react-router-dom' 

import { Wrapper, Background, Form, Cover, Back } from '../styles/screens/Login'
import { SubTitle} from '../styles/'
import { useAuth } from '../contexts/auth'

import logoImg from '../images/Logo-taller.svg'    

function Login(){

    const { signIn } = useAuth()

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [remember, setRemember] = useState(Boolean)

    async function handleSubmit(event:FormEvent){
        event.preventDefault()

        const formData = {email, password, remember}
        
        await signIn(formData)
    
    }

    return(
        <Background>
            <Wrapper>
                <Cover>
                    <img src={logoImg} alt="Happy"/>
                    <div className="location">
                        <strong>Pernambuco</strong>
                        <span>Olinda</span>
                    </div>
                </Cover>
                <Form onSubmit={handleSubmit} >
                    <Back>
                        <Link to="/">
                            <FiArrowLeft size={26} />
                        </Link>
                    </Back>

                    <SubTitle>Fazer login</SubTitle>
                    <label htmlFor="email">E-mail</label>
                        <input type="email" name="email" onChange={ event => setEmail(event.target.value)} value={email} />
                    <label htmlFor="password">Senha</label>
                        <input type="password" name="password" onChange={ event => setPassword(event.target.value)} value={password} />
                    <div className="input-actions">
                        <label htmlFor="remember">
                            <input 
                                type="checkbox"
                                id="remember" 
                                name="remember"
                                onChange={ event => setRemember(event.target.checked)}
                            />
                            <span className="checkmark"></span>
                            <span className="text">Lembrar-me</span>
                        </label>
                        <Link to="reset">Esqueci minha senha</Link>
                    </div>
                    <button type="submit" >Entrar</button>
                </Form>
            </Wrapper>
        </Background>
    )
}

export default Login