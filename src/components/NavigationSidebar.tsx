import React from 'react'

import { useHistory } from 'react-router-dom'

import { FiArrowLeft } from 'react-icons/fi'

import mapMarkerImg from '../images/Map-marker.svg';

import { Aside, Button } from '../styles/components/AdminSidebar'

export default function NavigationSidebar(){

    const history = useHistory()

    return(
        <Aside>
            <img src={mapMarkerImg} className="happy-icon" onClick={() => history.push("/")} alt="Happy" />
            <footer>
                <Button active={false} onClick={()=> history.goBack() } >
                    <FiArrowLeft size={24} color="#FFF"  />
                </Button>
            </footer>
        </Aside>
    )
}