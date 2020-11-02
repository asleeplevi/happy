import React from 'react'

import { BrowserRouter} from 'react-router-dom'

import PublicRoutes from './public.routes'
import PrivateRoutes from './private.routes'

export default function Routes(){
    return(
        <BrowserRouter>
            <PublicRoutes/>
            <PrivateRoutes/>
        </BrowserRouter>
    )
}