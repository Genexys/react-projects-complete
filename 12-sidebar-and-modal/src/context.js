import React, { useState, useContext } from 'react';

const AppContext = React.createContext();

const AppProvider = ({children}) => {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [modalOpen, setModalOpen] = useState(false);

    const openSidebarHandler = () => {
        setSidebarOpen(true)
    }

    const openModalHandler = () => {
        setModalOpen(true)
    }

    const closeSidebarHandler = () => {
        setSidebarOpen(false)
    }

    const closeModalHandler = () => {
        setModalOpen(false)
    }

    return <AppContext.Provider value={{
        sidebarOpen,
        modalOpen,
        openSidebarHandler,
        openModalHandler,
        closeModalHandler,
        closeSidebarHandler
    }}>
        {children}
    </AppContext.Provider>
};

export const useGlobalContext = () => {
    return useContext(AppContext)
}

export {AppContext, AppProvider}