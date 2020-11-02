import React, { createContext, useContext, useState } from 'react'

interface TabContextData{
    currentTab: number
    changeTab(number:number): void
}

const TabContext = createContext<TabContextData>({} as TabContextData)

export const TabProvider:React.FC = ({children}) => {

    const [tab, setTab] = useState(0)

    function changeTab(number:number){
        setTab(number)
    }

    return (
        <TabContext.Provider value={{ currentTab: tab, changeTab}}>
            {children}
        </TabContext.Provider>
    )
}

export function useTab(){
    const context = useContext(TabContext)

    return context
}