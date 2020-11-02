import styled from 'styled-components'
import { general,SquareButton } from '../index'

export const Background = styled.div`
    width: 100vw;
    height: 100vh;

    position: relative;
    display: flex;

    .leaflet-container{
        z-index: 5;
    }

    .leaflet-popup{
        bottom: -65px!important;
        left: 35px!important;
    }

    .leaflet-popup-content-wrapper{
        background: rgba(255,255,255,.8);
        border-radius: 20px;
        box-shadow: none;
    }

    .leaflet-popup-content{
        width: max-content!important;

        color: #0089a5;
        font-size: 20px;
        font-weight: bold;
        margin: 8px 12px;

        display: flex;
        justify-content: space-between;
        align-items: center;

        a{
            width: 40px;
            height: 40px;

            background-color: #17D6EB;
            border-radius: 12px;
            
            display: flex;
            
            justify-content: center;
            align-items: center;
        
            margin-left: 32px;
        }

    }

    .leaflet-popup-tip-container{
        display: none;
    }

`

export const Aside = styled.div`
    width: 440px;
    background: ${general.background_gradient}; 
    padding: 80px;

    display: flex;
    flex-direction: column;
    justify-content: space-between;

    img{
        cursor: pointer;
    }

    h2{
        font-size: 40px;
        font-weight: 800;
        line-height: 42px;
        margin-top: 64px;
    }

    p{
        line-height: 28px;
        margin-top: 24px;
    }
    footer{
        display: flex;
        flex-direction: column;

        line-height: 24px;

        strong{
            font-weight: 800;
        }
    }

`

export const AddOrphanageButton = styled(SquareButton)`
    width: 64px;
    height: 64px;

    border-radius: 20px;

    background-color: #15C3D6;

    position: absolute;

    z-index: 10;

    right: 40px;
    bottom: 40px;

    &:hover{
        background-color: #17D6EB;
    }
`