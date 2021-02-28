import React, { useState, useContext } from 'react'
import sublinks from "./data";

const AppContext = React.createContext();

export const AppProvider = ({children}) => {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [submenuOpen, setSubmenuOpen] = useState(false);
    const [location, setLocation] = useState({})
    const [page, setPage] = useState({page: '', links: []})
    
    const openSidebarHandler = () => {
        console.log('open')
        setSidebarOpen(true)
    }

    const closeSidebarHandler = () => {
        console.log('close')
        setSidebarOpen(false)
    }

    const openSubmenuHandler = (text, coord) => {
        const page = sublinks.find((link) => link.page === text)
        setPage(page)
        setLocation(coord);
        setSubmenuOpen(true)
    }

    const closeSubmenuHandler = () => {
        setSubmenuOpen(false)
    }


    return (
        <AppContext.Provider value={{
            sidebarOpen,
            submenuOpen,
            openSidebarHandler,
            openSubmenuHandler,
            closeSubmenuHandler,
            closeSidebarHandler,
            location,
            page
        }}>
            {children}
        </AppContext.Provider>
    )
}

export const useGlobalContext = () => {
    return useContext(AppContext)
}
