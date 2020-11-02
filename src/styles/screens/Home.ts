import styled from 'styled-components'
import IlustrationHome from '../../images/Ilustration-home.svg'

import { general } from '../index'

export const Background = styled.div`
    width: 100vw;
    height: 100vh;
    background: ${general.background_gradient}; 
    
    display: flex;
    justify-content: center;
    align-items: center;

`

export const Wrapper = styled.div`
    width: 90%;
    height: 90%;

    max-width: 1100px;
    max-height: 650px;

    background: url(${IlustrationHome}) no-repeat 80% center;
    background-size: contain;

`

export const Header = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 30px;

    div.logo{
        display:flex;
        align-items: center;
        gap: 30px;
        
        div.location{
            display: flex;
            flex-direction: column;
            align-items: flex-start;

            gap: 0;

            strong{
                font-weight: 800
            }

            span{
                font-weight: 600
            }
        }  
  }


    button{
        justify-self: flex-end;
    }
`

export const Main = styled.main`
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    
    padding-bottom: 100px;

    height: inherit;

    div{
        display: flex;
        flex-direction: column;
        gap: 25px;

        max-width: 350px;
        h1{
            font-size: 76px;
            font-weight: 900;
            line-height: 70px;
        }
    }


`