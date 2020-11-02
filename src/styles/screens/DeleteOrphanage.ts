import styled from 'styled-components'

import Vector from '../../images/Delete-ilustration.svg'

import { LargeButton } from '../index'

export const Background = styled.div`
    background-color: #FF669D;
    width: 100vw;
    height: 100vh;

    display: flex;
    justify-content: center;
    align-items: center;
`   

export const Wrapper = styled.div`
    width: 100%;
    height: 100%;

    max-width: 900px;
    max-height: 500px;

    background: url(${Vector}) no-repeat right center;
    background-size: contain;

    display: flex;
    align-items: center;
    

    div{

        max-width: 400px;

        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        

        gap: 32px;
        
        text-align: center;

        h1{
            font-weight:800;
            font-size: 80px;
            line-height: 80px;
        }
        p{
            font-size: 24px;
            line-height: 34px;
            font-weight: 600;
            
            strong{
                font-weight: 800;
            }
        }

        div.buttons{
            display: flex;
            flex-direction: row;
            justify-content: space-between;

            margin-top:32px;
        
            p{
                font-size: 16px;

                cursor: pointer;
            }
        }
    }
`

export const Button = styled(LargeButton)`
    background: #D6487B;

    &:hover{
        background: #e52020;
    }
`