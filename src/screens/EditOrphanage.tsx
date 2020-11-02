import React, { useState, useEffect, ChangeEvent, FormEvent} from 'react'
import { useHistory } from 'react-router-dom'

import { Map, Marker, TileLayer } from "react-leaflet";
import { LeafletMouseEvent } from 'leaflet'

import { FiPlus, FiXCircle, FiCheck, FiX } from 'react-icons/fi'

import mapIcon from '../utils/mapIcon'

import Aside from '../components/NavigationSidebar'
import api from '../services/api'

import { Wrapper, Title, Form } from '../styles/screens/EditOrphanage'

interface Orphanage{
    id: number
    latitude: number
    longitude: number
    name: string
    about: string
    instructions: string
    opening_hours: string
    open_on_weekends: string
    whatsapp: number
    isActive: boolean
    images: Array<{
      id: number,
      url: string
    }>
}


export default function EditOrphanage({ match }:any){

    const history = useHistory()

    const [position, setPosition] = useState({latitude: 0, longitude: 0})

    const [orphanage, setOrphanage] = useState<Orphanage | null>(null)

    const [name, setName] = useState('')
    const [about, setAbout] = useState('')
    const [whatsapp, setWhatsapp] = useState('')
    const [instructions, setInstructions] = useState('')
    const [opening_hours, setOpeningHours] = useState('')
    const [open_on_weekends, setOpenOnWeekends] = useState(true)
    const [images,setImages] = useState<File[]>([])
    const [previewImages, setPreviewImages] = useState<object[]>([])
    const [imagesToDelete, setImagesToDelete] = useState<object[]>([])
    
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

    async function getOrphanages() {
        const response = await api.get(`/orphanages/${match.params.id}`)   

        const { 
            name, 
            about, 
            instructions, 
            opening_hours, 
            open_on_weekends, 
            images, 
            latitude, 
            longitude,
            whatsapp
        } = response.data

        setOrphanage(response.data)

        setName(name)
        setAbout(about)
        setInstructions(instructions)
        setOpeningHours(opening_hours)
        setOpenOnWeekends(open_on_weekends)
        setImages(images)
        setWhatsapp(whatsapp)
        setPosition({latitude, longitude})
        
        const selectedImagesPreview = images.map( function(image:any){
            return image
        })

        setPreviewImages(selectedImagesPreview)
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

        const formData = new FormData()

        formData.append('id', String(orphanage?.id))
        formData.append('name', name)
        formData.append('about', about)
        formData.append('instructions', instructions)
        formData.append('opening_hours', opening_hours)
        formData.append('open_on_weekends', String(open_on_weekends))
        formData.append('latitude', String(latitude))
        formData.append('longitude', String(longitude))
        formData.append('whatsapp', String(whatsapp))
        imagesToDelete.forEach((image:any) =>{
            const imageJSON = JSON.stringify(image)
            formData.append('image_to_delete', imageJSON)
        })
        images.forEach((image:any) =>{
            if(!image.id){
                formData.append('images', image)
            }
        })
    
        

        const response:any = await api.put('/admin/orphanage/change', formData)
       
        if(response.status === 200){
            if(orphanage?.isActive === false){
                history.push("/admin")
            }else{
                history.push("/admin")
            }   
        }   
       
    }

    useEffect(()=> {
        getOrphanages()
        
    },[])

    if(!orphanage){
        return (<p>Carregando</p>)
    }

    return (
        <React.Fragment>
            <Aside/>
            <Title>Editar perfil de {orphanage.name}</Title>
            <Wrapper>
                <Form onSubmit={handleSubmit}>
                    <fieldset>
                        <legend>Dados</legend>
                        <div className="map-container">
                            <Map 
                                center={[orphanage.latitude,orphanage.longitude]} 
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
                    {orphanage.isActive ?
                        
                    (
                        <div className="confirm-button" >
                            <button type="submit" onClick={handleSubmit}>
                            Confirmar
                            </button>
                        </div>
                    ) :
                        (
                        
                        <div className="confirm-buttons">
                            <button type="button" onClick={()=> history.push(`/deleteOrphanage/${orphanage.id}`)} ><FiXCircle size={26} />Recusar</button>
                            <button type="submit" onClick={ event => handleSubmit(event)}><FiCheck size={26} />Aceitar</button>
                         </div>
                        )
                    }
                        
                </Form>
            </Wrapper>
        </React.Fragment>
    )
}