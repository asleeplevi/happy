import React, { useEffect, useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { FiPlus, FiArrowRight } from 'react-icons/fi'

import { Map, TileLayer, Marker, Popup } from 'react-leaflet'    

import mapMarkerImg from '../images/Map-marker.svg'
import mapIcon from '../utils/mapIcon'

import api from '../services/api'

import { Aside, Background, AddOrphanageButton } from '../styles/screens/App'

interface Orphanage{
    id: number
    latitude: number
    longitude: number
    name: string
}

export default function App(){

    const history = useHistory()

    const [orphanages, setOrphanages] = useState<Orphanage[]>([])
    const [userPosition, setUserPosition] = useState({latitude: 0, longitude: 0})

    useEffect(()=>{
        api.get('orphanages').then(response => {
            setOrphanages(response.data)

        })
        
        navigator.geolocation.getCurrentPosition( location =>{
            const { latitude, longitude } = location.coords
        
            setUserPosition({latitude, longitude})
        })

    },[])


    return (
        <Background>
            <Aside>
                <header>
                    <img src={mapMarkerImg} onClick={()=> history.push("/")} alt="Happy"/>
                    <h2>Escolha um orfanato no mapa</h2>
                    <p>Muitas crianças estão esperando a sua visita :)</p>
                </header>
                <footer>
                    <strong>Pernambuco</strong>
                    <span>Olinda</span>
                </footer>    
            </Aside>
            <Map
                center={[userPosition.latitude,userPosition.longitude]}
                zoom={15}
                style={{width: '100%', height:'100%'}}
            >
                
                <TileLayer url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}/>
                {orphanages.map(orphanage => {

                    return(
                        <Marker
                            icon={mapIcon}
                            position={[orphanage.latitude,orphanage.longitude]}
                            key={orphanage.id}
                        >
                        <Popup closeButton={false} minWidth={240} maxWidth={240} className="map-popup">
                            {orphanage.name}
                            <Link to={`/orphanage/${orphanage.id}`}><FiArrowRight size={20} color="#fff"/></Link>
                        </Popup>
                        </Marker>
                    )
                })}
            </Map>
            <AddOrphanageButton>
                <Link to="/orphanage/create" className="create-orphanage"><FiPlus size={32} color="#fff"/></Link>
            </AddOrphanageButton>
        </Background>
    )
}