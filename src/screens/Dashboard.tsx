import React from 'react'

import AdminSidebar from '../components/AdminSidebar'
import AdminContent from '../components/AdminContent'

export default function Dashboard({match}:any){
    return(
        <React.Fragment>
            <AdminSidebar/>
            <AdminContent/>
        </React.Fragment>
    )
}