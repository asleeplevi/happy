import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'

import { Background, Wrapper, Button } from '../styles/screens/DeleteOrphanage'

import api from '../services/api'

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

export default function DeleteOrphanage({ match }:any){

    const history = useHistory()
    
    const [orphanage, setOrphanage] = useState<Orphanage>({} as Orphanage)

    async function getOrphanage(){
        const response:any = await api.get(`/orphanages/${match.params.id}`)   

        setOrphanage(response.data)

    }

    async function DeleteOrphanage() {
        await api.delete(`/admin/orphanages/${match.params.id}`)

        history.push('/admin')
    }
    
    useEffect(()=>{
        getOrphanage()
        
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

    return(
        <Background>
            <Wrapper>
                <div>
                    <h1>Cuidado!</h1>
                    <p>Você tem certeza que quer excluir o <strong>{orphanage.name}?</strong></p>
                    <div className="buttons">
                        <p onClick={()=> history.goBack()}>Voltar</p>
                        <Button onClick={DeleteOrphanage}>
                            Excluir
                        </Button>
                    </div>
                </div>
            </Wrapper>
        </Background>
    )
}