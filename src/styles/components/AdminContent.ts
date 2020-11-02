import styled from 'styled-components'

export const Content = styled.div`
    padding:0 15%;
    padding-bottom: 80px;
`

export const Header = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    padding-top: 64px;
    padding-bottom: 24px;
    
    color: #4D6F80;

    border-bottom: 1px solid #D3E2E5;
`

export const List = styled.ul`
    margin-top: 30px;


    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    gap: 30px;

    list-style:  none;

    div.map-container{
        border-radius: 20px;
        overflow: hidden;
    }

    li{
        max-width: 550px;
    }

    div.orphanage-content{
        background-color: #fff;

        padding: 17px 32px;

        color: #4D6F80;

        font-weight: 700;

        border-radius: 0 0 20px 20px;

        display: flex;
        justify-content: space-between;
        align-items: center;
        
    }

`

export const Buttons = styled.div`
    display: flex;

    gap: 8px;

    a{
            background-color: #EBF2F5;

            width: 48px;
            height: 48px;

            display: flex;
            justify-content: center;
            align-items: center;

            color: #15C3D6;

            border: 0;
            border-radius: 16px;
            
            cursor: pointer;
        }
`

export const NotFound = styled.div`
    display: flex;
    flex-direction: column;
    justify-content:center;
    align-items: center;

    gap: 16px;

    margin-top: 20%;

    color: #8FA7B2; 
`