import React, { createContext, useContext, useState, useEffect } from 'react'

import api from '../services/api'

interface AuthContextData{
    user: object | null
    signIn(data: data): Promise<any>
    isLogged(): boolean
    signOut(): void
}

interface data{
    email: string
    password: string
    remember: boolean
}

interface response{
    data:{
        user:{
            name: string
            email: string
            
        },
        token: string

    }
}



const AuthContext = createContext<AuthContextData>({} as AuthContextData)

export const AuthProvider:React.FC = ({children}) => {

    const [user, setUser] = useState<object | null>(null)

    useEffect(()=>{
        const storageUser =  localStorage.getItem('@HAPPYAuth:user')
        const storageToken =   localStorage.getItem('@HAPPYAuth:token')

        api.defaults.headers['Authorization'] = `Bearer ${storageToken}` 

        if(storageUser && storageToken){
            setUser(JSON.parse(storageUser))
        }
    },[])

    function isLogged(){
        if(user)
            return true
        if(!user){
            const storageUser =  localStorage.getItem('@HAPPYAuth:user')
            if(storageUser)
                return true
        }

        return false
    }

    function signOut(){
        localStorage.clear()
        setUser(null)
    }

    async function signIn(data: data){


        const response:response = await api.post('user/authenticate', data)

        api.defaults.headers['Authorization'] = `Bearer ${response.data.token}`  
        
        setUser(response.data.user)
        
        if(data.remember){
            localStorage.setItem('@HAPPYAuth:user', JSON.stringify(response.data.user))
            localStorage.setItem('@HAPPYAuth:token', response.data.token)
            
        }    

        return response

    }

    return(
        <AuthContext.Provider value={{  user, signIn, isLogged, signOut }}>
        {children}
        </AuthContext.Provider>
    )

}


export function useAuth(){
    const context = useContext(AuthContext)

    return context
}