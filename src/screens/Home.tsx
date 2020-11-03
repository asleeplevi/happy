import React, { useEffect, useState } from 'react'
import { FiArrowRight } from 'react-icons/fi'
import { Link } from 'react-router-dom' 

import { SquareButton, LargeButton } from '../styles/'
import { Wrapper, Background, Header, Main } from '../styles/screens/Home'

import GetLocation from '../services/location'

import logoImg from '../images/Logo.svg'

interface UserAddress{
    city: string,
    state: string
}

function Landing(){

    const [userAddres, setUserAddress] = useState<UserAddress>({} as UserAddress)


    async function getCurrentCity(latitude:number, longitude: number){
        
        const address = await GetLocation(latitude, longitude)

        setUserAddress(address)

    }

    useEffect(()=>{
        navigator.geolocation.getCurrentPosition( location => {
            const { latitude, longitude } = location.coords

            getCurrentCity(latitude, longitude)
        })   
    },[])

    return(
        <Background>
            <Wrapper>
                <Header>
                    <div className="logo">
                        <img src={logoImg} alt="Happy"/>
                        <div className="location">
                            <strong>{userAddres.state}</strong>
                            <span>{userAddres.city}</span>
                        </div>
                    </div>
                    <LargeButton>
                        <Link to="/admin">
                            Acesso restrito
                        </Link>
                    </LargeButton>
                </Header>
                <Main>
                    <div>
                        <h1>Leve felicidade para o mundo</h1>
                        <p>Visite orfanatos e mude o dia de muitas crianças.</p>
                    </div>
                
                    <SquareButton>
                        <Link to="/app"><FiArrowRight size={26} color="rgba(0,0,0,.6)" /></Link>
                    </SquareButton>
                </Main>

            </Wrapper>
        </Background>
    )
}

export default Landing