import styled from 'styled-components'

import Image from '../../images/Submitted-ilustration.svg'

import { Background as Bg, Wrapper as Wr, Button as Bt } from './DeleteOrphanage'

export const Background = styled(Bg)`

    background-color: #37C77F;
`

export const Wrapper = styled(Wr)`
    background-image: url(${Image});
`


export const Button = styled(Bt)`
    background-color: #31B272;

    &:hover{
        background-color: #3BD689;
    }
`