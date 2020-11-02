import styled from 'styled-components'

export const general = {
    button_primary_color: "#12D4E0",
    button_seconday_color: "#FFD666",
    button_hover_color: "#96FEFF",
    background_gradient: "linear-gradient(329.54deg, #29B6D1 0%, #00C7C7 100%)",
    color_text: "#8FA7B2",
    color_title: "#4D6F80"
}

export const SquareButton = styled.button`
    width: 80px;
    height: 80px;
    
    background-color: ${general.button_seconday_color};
    
    border-radius: 30px;
    border: 0;

    display: flex; 
    align-items: center;
    justify-content: center;

    transition: background-color 200ms;

    cursor: pointer;

    &:hover{
        background-color: ${general.button_hover_color};
    }

    a{
        text-decoration: none;
        color: inherit;

        width: 100%;
        height: 100%;

        display: flex;
        justify-content: center;
        align-items: center;
    }

`;

export const LargeButton = styled.button`
    width: 222px;
    height: 56px;

    background-color: ${general.button_primary_color};

    display: flex;
    justify-content: center;
    align-items: center;

    border: 0;
    border-radius: 20px;

    color: #fff;

    font-weight: 800;

    transition: background-color 200ms;

    cursor: pointer;

    &:hover{
        background-color: ${general.button_hover_color};
    }

    a{
        text-decoration: none;
        color: inherit;

        width: 100%;
        height: 100%;

        display: flex;
        justify-content: center;
        align-items: center;
    }
`;

export const SubTitle = styled.h2`
    font-weight: bold;
    font-size: 32px;
    line-height: 34px;

    color: #5C8599;
`