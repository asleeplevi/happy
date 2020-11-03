import React, { useEffect, useState } from 'react'

import { FiClock, FiInfo, FiPhoneCall } from 'react-icons/fi'
import { Map, TileLayer, Marker } from 'react-leaflet'    
import mapIcon from '../utils/mapIcon'

import Sidebar from '../components/NavigationSidebar'
import {useParams} from 'react-router-dom'

import api from '../services/api'

import { Content, MapContainer, Cards, Button} from '../styles/screens/Orphanage'


interface Orphanage{
    id: number
    latitude: number
    longitude: number
    name: string
    about: string
    instructions: string
    opening_hours: string
    open_on_weekends: string
    images: Array<{
      id: number,
      url: string
    }>
}

interface RouteParams{
    id: string
}

export default function Orphanage(){

    const params = useParams<RouteParams>()
    const [orphanage, setOrphanage] = useState<Orphanage>()
    const [activeImageIndex, setactiveImageIndex] = useState(0)


    useEffect(()=>{
        api.get(`orphanages/${params.id}`).then(response => {
            setOrphanage(response.data)
        })

        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

    if(!orphanage){
        return <h1>Nada encontrado</h1>
    }

    return (
        <React.Fragment>
            <Sidebar/>
            <Content>
                <div className="orphanage-details">
                    <img src={orphanage.images[activeImageIndex].url} alt={orphanage.name} />
                
                    <div className="main-content">
                        <h1>{orphanage.name}</h1>
                        <p>{orphanage.about}</p>
                    </div>

                    <div className="images">
                        {
                        orphanage.images.map((image,index) => (
                            <button 
                            key={image.id} 
                            className={activeImageIndex === index ? 'active' : ''} 
                            type="button"
                            onClick={()=>{
                                setactiveImageIndex(index)
                            }}  
                            >
                            <img src={image.url} alt={orphanage.name} />
                            </button>
                        ))
                        }
                    </div>

                    <MapContainer>
                        <Map 
                            center={[orphanage.latitude,orphanage.longitude]} 
                            zoom={16} 
                            style={{ width: '100%', height: 280 }}
                            dragging={false}
                            touchZoom={false}
                            zoomControl={false}
                            scrollWheelZoom={false}
                            doubleClickZoom={false}
                        >
                            <TileLayer 
                            url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}
                            />
                            <Marker interactive={false} icon={mapIcon} position={[orphanage.latitude,orphanage.longitude]} />
                        </Map>
                        <footer>
                            <a target="blank" rel="external" href={`https://www.google.com/maps/dir/?api=1&destination=${orphanage.latitude},${orphanage.longitude}`}>Ver rotas no Google Maps</a>
                        </footer>
                    </MapContainer>

                    <hr />
                    <div className="main-content">

                        <h2>Instruções para a visita</h2>
                        <p>{orphanage.instructions}</p>

                        <Cards>
                        <div className="hour">
                            <FiClock size={32} color="#15B6D6" />
                            {orphanage.opening_hours}
                        </div>
                        { orphanage.open_on_weekends ? (
                            <div className="open-on-weekends">
                            <FiInfo size={32} color="#39CC83" />
                            Atendemos <br />
                            fim de semana
                            </div>
                        ) : (
                            <div className="open-on-weekends dont-open">
                            <FiInfo size={32} color="#FF6690" />
                            Não atendemos <br />
                            fim de semana
                            </div>
                        )}
                        </Cards>
                    </div>
                    
                    <Button>
                        <FiPhoneCall size={26}/>
                        Entrar em contato
                    </Button>
                </div>
            </Content>
        </React.Fragment>
    )
} 