import React from 'react'

import { Route, Redirect, Switch } from 'react-router-dom'

import { useAuth } from '../contexts/auth'
import { TabProvider } from '../contexts/adminTabs'

import Login from '../screens/Login'
import Dashboard from '../screens/Dashboard'
import EditOrphanage from '../screens/EditOrphanage'
import DeleteOrphanage from '../screens/DeleteOrphanage'

export default function PrivateRoutes(){

    const { isLogged } = useAuth()

    return (
        <Switch>
            <Route path="/admin">
                {(isLogged())? <Redirect to="/dashboard" /> :<Login/>}
            </Route>
            <TabProvider>
                <Route path="/dashboard" render={props =>(
                    (isLogged())? <Dashboard {...props} /> : <Redirect to="/admin" /> 
                ) }
                />
                <Route path="/editOrphanage/:id" render={props =>(
                    (isLogged())? <EditOrphanage {...props} /> : <Redirect to="/admin" /> 
                ) } />
                <Route path="/deleteOrphanage/:id" render={props =>(
                    (isLogged())? <DeleteOrphanage {...props} /> : <Redirect to="/admin" /> 
                ) } />
            </TabProvider>
        </Switch>
    )
}