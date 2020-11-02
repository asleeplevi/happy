import React from 'react'
import { FiAlertCircle, FiPower, FiMapPin } from 'react-icons/fi'

import {useAuth} from '../contexts/auth'
import { useTab } from '../contexts/adminTabs'

import { Aside, Buttons, Button } from '../styles/components/AdminSidebar'

import mapMarkerImg from '../images/Map-marker.svg';
import { useHistory } from 'react-router-dom'

export default function AdminSidebar() {

    const history = useHistory()

    const { signOut } = useAuth()
    const { currentTab, changeTab } = useTab()

    function handleSignOut(){
      signOut()
    }

    function setTab(number:number){
      changeTab(number)
    }

    return(
        <Aside id="admin-sidebar">
        <img onClick={()=> history.push("/")} src={mapMarkerImg} className="happy-icon" alt="Happy" />

        <Buttons>
          <Button 
            active={ (currentTab === 0)? true : false}
            onClick={()=> setTab(0)}
            >
            <FiMapPin size={24} color="#FFF" />
          </Button>
          <Button 
            active={ (currentTab === 1)? true : false}
            onClick={()=> setTab(1)}
          >
            <FiAlertCircle  size={24} color="#FFF" />
          </Button>
        </Buttons>

        <footer>
          <Button active={false} onClick={handleSignOut} >
            <FiPower size={24} color="#FFF"  />
          </Button>
        </footer>
      </Aside>
    )
}
