import styled from 'styled-components'
import { general, SquareButton} from '../index'

export const Background =  styled.div`
    background: ${general.background_gradient};

    width: 100vw;
    height: 100vh;

    display: grid;

    grid-template-columns: 65% 35%;

    form{
        background-color: #fff;

        display: flex;

        flex-direction: column;

        justify-content: center;

        gap:20px;

        padding: 0 80px;

        color: ${general.color_text};

        h2{
            color: ${general.color_title}
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
    }
`

export const Wrapper = styled.div`
    width: 100%;
    height: 100%;

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

export const BackButton = styled(SquareButton)`
    position: absolute;

    width: 48px;
    height: 48px;

    top: 40px;
    right: 40px;

    background: #EBF2F5;
    border-radius: 16px;

`