import React from 'react'

import { Route, Switch } from 'react-router-dom'

import Home from '../screens/Home'
import App from '../screens/App'
import Orphanage from '../screens/Orphanage'
import CreateOrphanage from '../screens/CreateOrphanage'
import SubmittedOrphanage from '../screens/SubmittedOrphanage'
import ForgotPassword from '../screens/ForgotPassword'
import ResetPassword from '../screens/ResetPassword'

export default function PublicRoutes(){
    return (
        <Switch>
            <Route path="/" exact component={Home}/>
            <Route path="/app" component={App}/>
            <Route path="/orphanage/create/done"  component={SubmittedOrphanage}/>
            <Route path="/orphanage/create"  component={CreateOrphanage}/>
            <Route path="/orphanage/:id"  component={Orphanage}/>
            <Route path="/forgotPassword"  component={ForgotPassword}/>
            <Route path="/resetPassword/:email&:token"  component={ResetPassword}/>
        </Switch>
    )
}