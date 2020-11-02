import styled from 'styled-components'

import {general} from '../index'

export const Aside = styled.aside`
    height: 100vh;

    padding: 32px 18px;


    background: ${general.background_gradient};

    position: fixed;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    img{
        width: 100%;
        max-width: 50px;
        height: auto;

        cursor: pointer;
    }
`


export const Buttons = styled.div`
    display: flex;
    flex-direction: column;

    gap: 15px;

`

export const Button = styled.button<{active:boolean}>`
    width: 48px;
    height: 48px;
  
    border: 0;
  
    background: ${ props => (props.active ? '#FFD666': '#12AFCB' )};
    border-radius: 16px;
  
    cursor: pointer;
    

    transition: background-color 0.2s;
  
    display: flex;
    justify-content: center;
    align-items: center;

    outline: none;

    &:hover{
        background-color: #17D6EB;
    }

`
