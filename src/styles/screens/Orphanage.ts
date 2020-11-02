import styled from 'styled-components'
import { general, LargeButton } from '..'

export const Content = styled.main`
    flex: 1;
    padding: 64px 0;


    .main-content{

        padding: 0 80px;
        padding-top: 64px;


        color: #4D6F80;

        h1{
            font-weight: bold;
            font-size: 54px;
            line-height: 54px;

            padding-bottom: 8px;
        }


    }

    .orphanage-details{
        width: 700px;
        margin: 0 auto;

        background: #FFFFFF;
        border: 1px solid #D3E2E5;
        border-radius: 20px;

        overflow: hidden;

        img {
            width: 100%;
            height: 300px;
            object-fit: cover;
        }

        .images {

            margin: 0 80px;
            margin-top: 40px;

            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(88px, 1fr));
            column-gap: 16px;

            button {
                border: 0;
                max-width: 88px;
                height: 88px;
                background: none;
                cursor: pointer;
                border-radius: 20px;
                overflow: hidden;
                outline: none;
                
                opacity: 0.6;

                &.active{
                  opacity: 1;
                }

                img {
                    width: 100%;
                    height: 88px;
                    object-fit: cover;                   
                }
            }
        }

    }


    hr{
        margin: 0px 80px;
        margin-top: 64px;

        border: 1px solid #D3E2E6;
    }

    h2{
        color: ${general.color_title}
    }

    .main-content p{
        margin: 24px 0;
    }

`

export const MapContainer = styled.div`
    margin: 0 80px;
    margin-top: 78px;

    .leaflet-container{
        border-radius: 20px;
    }

    footer{
        background: #E6F7FB;
        border: 1px solid #B3DAE2;
        border-top: 0;
    
        border-radius: 0 0 20px 20px;

        padding: 19px 0;

        display: flex;
        justify-content: center;
        align-items: center;

        a{
            font-weight: bold;
            font-size: 18px;
            
            text-decoration: none;

            color: #0089A5;
        }
    }
`


export const Cards = styled.div`

    display: grid;
    grid-template-columns: 1fr 1fr;

    gap: 20px;

    margin-bottom: 64px;

    div{
        height: 176px;
        
        border: 1px solid;
        border-radius: 20px;

        display: flex;
        flex-direction: column;

        padding: 32px 24px;

        svg{
            margin-bottom: 16px;
        }


        &:first-child{
            background: linear-gradient(149.97deg, #E6F7FB 8.13%, #FFFFFF 92.67%);
            border-color: #B3DAE2;
        }

        &:last-child{
            background: linear-gradient(154.16deg, #EDFFF6 7.85%, #FFFFFF 91.03%);
            border-color: #A1E9C5;
            
            color: #37C77F;
            
            &.dont-open{
                background: linear-gradient(154.16deg, #FCF0F4 7.85%, #FFFFFF 91.03%);
                
                border-color: #FFBCD4;
                
                color: #FF669D;
            }
        }
    }
`

export const Button = styled(LargeButton)`
    margin: 0 80px;
    margin-bottom: 64px;


    background-color: #37C77F;

    width: -webkit-fill-available;

    svg{
        margin-right: 16px;
    }

    &:hover{
        background-color: #3EE08F;
    }
`