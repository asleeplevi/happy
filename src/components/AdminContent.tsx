import React, { useEffect, useState } from 'react'

import { useTab } from '../contexts/adminTabs'

import { Content } from '../styles/components/AdminContent'


import api from '../services/api'

import ListPendingOrhanages from './ListPendingOrphanages'
import ListApprovedOrphanages from './ListApprovedOrphanages'


const currentTabContent = [ListApprovedOrphanages,ListPendingOrhanages]

export default function AdminContent(){

    const { currentTab } = useTab()

    const [orphanages, setOrphanages] = useState([])
    
    async function getOrphanages() {
    
        const routes = (currentTab === 0) ? '/orphanages' : '/admin/orphanages/pending'
        const response = await api.get(routes)

        setOrphanages(response.data)
    }


    useEffect(()=>{

        getOrphanages()
    })

    return(
        <Content>
            {currentTabContent[currentTab](orphanages)}
        </Content>
    )
}