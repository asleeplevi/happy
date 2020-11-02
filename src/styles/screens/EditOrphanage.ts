import styled from 'styled-components'

import { general } from '../index'

export const Wrapper = styled.div`
    width: 100%;
    max-width: 708px;

    margin: 0 auto;

    background-color: #fff;
    color: ${general.color_text};

    border-radius: 20px;

    padding-top: 64px;
`

export const Title = styled.p`
    padding-top: 40px;
    padding-bottom  : 40px;
    text-align: center;
    
    font-size: 18px;

    color: ${general.color_text};

`

export const Form = styled.form`

    margin-bottom: 80px;

    legend{
        font-size: 32px;
        font-weight: bold;

        color: ${general.color_title};
        padding-bottom: 24px;

        width: 100%;

        border-bottom: 1px solid #D3E2E5;
    }

    fieldset{
        border: 0;
        padding: 0  80px;

    }

    div.map-container{
        border: 1px solid #DDE3F0;

        margin: 40px 0;

        border-radius: 20px;
        overflow: hidden;


        .map-instructions{
            background: #F5F8FA;

            padding: 12px 0;

            display: flex;
            justify-content: center;
            align-items: center;

            span{
                font-weight: bold;
                font-size: 14px;
            
                color: #0089A5;
            }
        }
    }

    div.input-block{
        margin: 24px 0;

        label{
            display: block;
            margin-bottom: 8px; 

        }
        input, textarea{
            width: 100%;
            border-radius: 20px;
            padding-left: 26px;

            color: #5C8599;

            height: 64px;

            background-color: #F5F8FA;
            border: 1px solid #D3E2E5;
        }

        textarea{
            min-height: 120px;
            max-height: 240px;
            resize: vertical;
            padding: 16px;
            line-height: 28px;
        }

        div.images-container{
            display: grid;
            grid-template-columns: repeat(5,1fr);
            grid-gap: 16px;

            div.image-container{
                position: relative;

                img{
                    width: 100%;
                    height: 96px;
                    object-fit: cover;
                    border-radius: 20px;
                }

                div.delete-button{
                    position: absolute;
                    top:0;
                    right: 0;

                    width: 40px;
                    height: 40px;
                    
                    display: flex;
                    justify-content: center;
                    align-items: center;


                    background-color: #fff;
                 
                    border: 1px solid #D3E2E5;
                
                    border-radius: 0px 20px;

                    cursor: pointer;
                }

            }

            .new-image{
                height: 96px;
                background: #F5F8FA;    
                border: 1px dashed #96D2F0;
                border-radius: 20px;
                cursor: pointer;

                display: flex;
                justify-content: center;
                align-items: center;
            }

            input[type=file]{
            display: none;
            }
        }

        div.button-select{
            display: grid;
            grid-template-columns: 1fr 1fr;
        
            button{
                height: 64px;
                background: #F5F8FA;
                border: 1px solid #D3E2E5;
                color: #5C8599;
                cursor: pointer;
           
                &:first-child{
                    border-radius: 20px 0px 0px 20px;
                }
                &:last-child{
                    border-radius: 0 20px 20px 0;
                    border-left: 0;
                }
                &.active{
                    background: #EDFFF6;
                    border: 1px solid #A1E9C5;
                    color: #37C77F;
                }
            }
            
        }

    }
    
    div.confirm-buttons {

        display: grid;
        grid-template-columns: 1fr 1fr;

        width: 100%;
        height: 100%;

        background-color: #F5F8FA;
        border: 1px solid #D3E2E5;
        border-radius: 0px 0px 20px 20px;

        padding: 48px 80px;

        gap: 20px;

        button{
            width: 100%;
            height: 64px;

            display: flex;
            justify-content: center;
            align-items: center;
            gap: 16px;

            border-radius: 20px;

            cursor: pointer;

            border: 0;

            &:first-child{
                background-color: #FF669D;

                color: #FFFFFF;
            }

            &:last-child{
                background-color: #3CDC8C;

                color: #FFFFFF;

            }
        }
    }

    div.confirm-button {

        padding: 0 80px;
        padding-bottom: 80px;
        
        margin-top: 32px;
        
        button{
            width: 100%;
            height: 64px;
            border: 0;
            cursor: pointer;
            background: #37C77F;
            border-radius: 20px;
            color: #FFFFFF;
            font-weight: 800;

            display: flex;
            justify-content: center;
            align-items: center;

            transition: background-color 0.2s;
        
        &:hover{
            background-color: #3EE08F;
        }
        
        }
    }


`