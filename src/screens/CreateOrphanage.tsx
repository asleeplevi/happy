import React, { useState, ChangeEvent, FormEvent, useEffect}  from 'react'
import { Map, Marker, TileLayer } from "react-leaflet";
import { FiPlus, FiX } from 'react-icons/fi'
import { useHistory } from 'react-router-dom';

import { LeafletMouseEvent } from 'leaflet' 

import Aside from '../components/NavigationSidebar'
import api from '../services/api'

import mapIcon from "../utils/mapIcon";


import { Wrapper, Title, Form } from '../styles/screens/EditOrphanage'

export default function CreateOrphanage(){

    const history = useHistory()

    const [position, setPosition] = useState({latitude: 0, longitude: 0})
    const [userPosition, setUserPosition] = useState({latitude: 0, longitude: 0})


    const [name, setName] = useState('')
    const [about, setAbout] = useState('')
    const [whatsapp, setWhatsapp] = useState('')
    const [instructions, setInstructions] = useState('')
    const [opening_hours, setOpeningHours] = useState('')
    const [open_on_weekends, setOpenOnWeekends] = useState(true)
    const [images,setImages] = useState<File[]>([])
    const [previewImages, setPreviewImages] = useState<object[]>([])
    const [imagesToDelete, setImagesToDelete] = useState<object[]>([])

    useEffect(()=> {
        navigator.geolocation.getCurrentPosition( location =>{
            const { latitude, longitude } = location.coords
        
            setUserPosition({latitude, longitude})
        })
    })

    function handleMapClick(event: LeafletMouseEvent){
        const {lat, lng} = event.latlng
    
        setPosition({
          latitude: lat,
          longitude: lng
        })
    
    }

    function handleSelectedImages(event: ChangeEvent<HTMLInputElement>){
        if(!event.target.files){
            return 0
          }
      
          const selectedImages = Array.from(event.target.files)
      
          setImages([...images,...selectedImages])
      
          const selectedImagesPreview = selectedImages.map( image => {
             
            return {name: image.name, url: URL.createObjectURL(image)}
          })
      
          setPreviewImages([...previewImages, ...selectedImagesPreview])
    }

    function handleDeleteImage(image:any){
        if(image.id){
            setImagesToDelete([...imagesToDelete, image])
            const previewImagesDeletedItem:any = [] 
            previewImages.forEach(function( item :any){
                if(image.id !== item.id){
                    previewImagesDeletedItem.push(item)
                }
            })

            setPreviewImages(previewImagesDeletedItem)
        }

        const previewImagesDeletedItem:any = [] 
        const ImagesDeletedItem:any = [] 


        previewImages.forEach(function(item){
            if(item !== image){
                previewImagesDeletedItem.push(item)
            }
        })

        images.forEach(function(item){
            if(item.name !== image.name){
                ImagesDeletedItem.push(item)
            }
        })

        setPreviewImages(previewImagesDeletedItem)
        setImages(ImagesDeletedItem)
        
    }

    async function handleSubmit(event: FormEvent){
        event.preventDefault()

        const {latitude, longitude} = position

        const data = new FormData()

        data.append('name', name)
        data.append('about', about)
        data.append('instructions', instructions)
        data.append('opening_hours', opening_hours)
        data.append('open_on_weekends', String(open_on_weekends))
        data.append('latitude', String(latitude))
        data.append('longitude', String(longitude))
        data.append('whatsapp', String(whatsapp))
        images.forEach(image =>{
        data.append('images', image)
        })

        await api.post('orphanages', data)

        history.push('/orphanage/create/done')
    }

    return(
        <React.Fragment>
            <Aside/>
            <Title>Adicione um orfanato</Title>

            <Wrapper>
                <Form onSubmit={handleSubmit}>
                <fieldset>
                        <legend>Dados</legend>
                        <div className="map-container">
                            <Map 
                                center={[userPosition.latitude,userPosition.longitude]} 
                                zoom={16} 
                                style={{ width: '100%', height: 291 }}
                                dragging={true}
                                touchZoom={false}
                                zoomControl={false}
                                scrollWheelZoom={true}
                                doubleClickZoom={false}
                                onclick={handleMapClick}
                            >
                                <TileLayer 
                                url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}
                                />
                                <Marker interactive={false} icon={mapIcon} position={[position.latitude,position.longitude]}  />
                            </Map>
                            <div className="map-instructions">
                                <span>Clique no mapa para alterar a localização</span>
                            </div>
                        </div>
                        
                        <div className="input-block">
                                <label htmlFor="name">Nome</label>
                                <input 
                                    id="name" 
                                    value={name}
                                    onChange={(event)=> setName(event.target.value)}
                                />
                        </div>

                        <div className="input-block">
                                <label htmlFor="about">Sobre</label>
                                <textarea 
                                    id="about" 
                                    value={about}
                                    onChange={event => setAbout(event.target.value)} 
                                />
                        </div>

                        <div className="input-block">
                                <label htmlFor="number">Número do Whatsapp</label>
                                <input 
                                    id="number" 
                                    type="tel"
                                    value={whatsapp}
                                    onChange={event => setWhatsapp(event.target.value)}
                                />
                        </div>

                        <div className="input-block">
                            <label htmlFor="images">Fotos</label>
                            <div className="images-container">
                                {
                                    
                                    previewImages.map(function(image:any){
                                        return (
                                        <div key={image.id ? image.id : image.name} className="image-container">
                                            <img  src={image.url ? image.url : image} alt="Foto do orfanato" />
                                            <div className="delete-button" onClick={()=> handleDeleteImage(image)}>
                                                <FiX 
                                                    size={20} 
                                                    color="#FF669D" 
                                                />
                                            </div>
                                        </div>
                                        )
                                    })
                                }
                                <label htmlFor="image[]" className="new-image">
                                    <FiPlus size={24} color="#15b6d6" />
                                </label>
                                <input multiple onChange={event => handleSelectedImages(event)} type="file" id="image[]"/>
                            </div>
                        </div>
                    </fieldset>

                    <fieldset>
                        <legend>Visitação</legend>

                        <div className="input-block">
                        <label htmlFor="instructions">Instruções</label>
                        <textarea 
                            id="instructions"
                            value={instructions} 
                            onChange={event => setInstructions(event.target.value)}
                        />
                        </div>

                        <div className="input-block">
                        <label htmlFor="opening_hours">Horário de funcionamento</label>
                        <input 
                            id="opening_hours" 
                            value={opening_hours}
                            onChange={event => setOpeningHours(event.target.value)}
                        />
                        </div>

                        <div className="input-block">
                        <label htmlFor="open_on_weekends">Atende fim de semana?</label>

                        <div className="button-select">
                            <button 
                            type="button" 
                            className={open_on_weekends ? 'active' : ''} 
                            onClick={()=> setOpenOnWeekends(true)}
                            >Sim</button>
                            <button 
                            type="button" 
                            className={open_on_weekends ? '' : 'active'}
                            onClick={()=> setOpenOnWeekends(false)}
                            >Não</button>
                        </div>
                        </div>
                    </fieldset>
                    <div className="confirm-button" >
                        <button type="submit" >
                        Confirmar
                        </button>
                    </div>
                </Form>
            </Wrapper>
        </React.Fragment>
    )
}