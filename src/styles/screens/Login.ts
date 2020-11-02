import styled from 'styled-components'

import { general, SquareButton } from '../index'

export const Wrapper = styled.div`
    display: grid;
    grid-template-columns: 65% 35%;

    width: 100%;
    height: 100%;
`
export const Background = styled.div`
    width: 100vw;
    height: 100vh;
    background: ${general.background_gradient}; 
`
export const Cover = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    
    gap: 30px;

    div.location{
        display: flex;
        flex-direction: column;
        align-items: center;

    }
`
export const Form = styled.form`
    background-color: #fff;
    height: 100%;

    color: #8FA7B2;
    font-weight: 600;

    position: relative;

    display: flex;
    justify-content: center;
    flex-direction: column;

    padding: 0 80px;

    h2{
        margin-bottom: 30px;
    }

    label{
        margin-top: 10px;
        margin-bottom: 8px;
    }

    input{
        width: 100%;
        height: 64px;

        border-radius: 20px;
        border: 1px solid #D3E2E5;

        background: #F5F8FA;

        padding-left: 15px;
    
        &:focus{
            background-color: #fff;
            outline: none;
        }
    }

    div.input-actions{
        margin-top: 15px;

        display: flex;
        align-items: center;
        justify-content: space-between;

        font-size: 16px;

        label{
            margin: 0;
        }

        input{
            position: absolute;
            opacity: 0;
            cursor: pointer;
            height: 0;
            width: 0;
         
            &:checked ~ span.checkmark {
                background-color: #37C77F;
                border-color: #37C77F;

                &::after{
                    display:block;
                }
            }


        }
        span.checkmark{
            width: 20px;
            height: 20px;
            
            padding: 0px 12px;
            
            background-color: #F5F8FA;
            border: 1px solid #D3E2E5;
            border-radius: 10px;

            position: relative;

            cursor: pointer;

            &::after{
                content: "";
                display: none;
                
                position: absolute;
                left: 33%;
                top: 18%;
                
                width: 5px;
                height: 10px;
                
                border: solid white;
                border-width: 0 3px 3px 0;
                
                transform: rotate(45deg);
            }
            
        }

        span.text{
            cursor: pointer;
            margin-left: 16px;
        }
    
        a{
            text-decoration: none;
            
            color: inherit;
        }
    }

    button[type="submit"]{
        background-color: #37C77F;
        color: #fff;
        font-size: 16px;

        width: 100%;
        height: 60px;
        
        border-radius: 20px;
        border: 0;
        margin-top: 30px;

        cursor: pointer;
    }

    
`

export const Back = styled(SquareButton)`
    width: 48px;
    height: 48px;

    border-radius: 16px;

    background-color: #EBF2F5;

    color: #15C3D6;

    position: absolute;
    right: 43px;
    top: 40px;

    a{
        color: inherit;
        
        width: 100%;
        height: 100%;

        display: flex;
        justify-content: center;
        align-items: center;
    }
`