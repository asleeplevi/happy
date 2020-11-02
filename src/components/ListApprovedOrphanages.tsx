import React from 'react'

import { Map, Marker, TileLayer } from "react-leaflet";
import { Link } from 'react-router-dom'

import { FiEdit3, FiTrash } from 'react-icons/fi'

import mapIcon from '../utils/mapIcon'

import imageNotFound from '../images/Not-found.svg'


import { Header, List, Buttons, NotFound } from '../styles/components/AdminContent'


interface Orphanage{
    id: number
    latitude: number
    longitude: number
    name: string
    about: string
    instructions: string
    opening_hours: string
    open_on_weekends: string
    pending: boolean
    images: Array<{
      id: number,
      url: string
    }>
}

export default function listOrphanages(orphanages:Orphanage[]){

    return(
        <React.Fragment>
            <Header>
                <h2>Orfanatos Cadastrados</h2>
                <div>
                    <span>{orphanages.length} </span>orfanatos
                </div>
            </Header>
            {(orphanages.length > 0) ? (
                    <List>
                        {orphanages.map(orphanage => {
                            return(
                                <li key={orphanage.id}>
                                    <div className="map-container">
                                    <Map 
                                        center={[orphanage.latitude,orphanage.longitude]} 
                                        zoom={16} 
                                        style={{ width: '100%', height: 200 }}
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
                                    </div> 
                                    <div className="orphanage-content">
                                        <span className="title">{orphanage.name}</span>
                                        <Buttons className="buttons">
                                            <Link to={`/editOrphanage/${orphanage.id}`} ><FiEdit3 size={26} /></Link>
                                            <Link to={`/deleteOrphanage/${orphanage.id}`}><FiTrash size={26} /></Link>
                                        </Buttons>
                                    </div>   
                                </li>
                            )
                        })}
                    </List>
            ): (
                <NotFound> 
                    <img src={imageNotFound} alt="Nada encontrado" />
                    <p>Nenhum no momento</p>
                </NotFound>
            ) }
        </React.Fragment>
    )
}