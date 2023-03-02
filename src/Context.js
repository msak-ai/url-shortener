import React, { useState } from "react";
import { useContext } from "react";
const Context = React.createContext();

const AppProvider = ({ children }) => {
    const [url, setUrl] = useState('');
    const [shorten, setShorten] = useState('');
    return (
        <Context.Provider value={
            {
                url,
                setUrl,
                shorten,
                setShorten
            }
        } >
            {children}
        </Context.Provider>
    )
}
export const useGlobalState = () => {
    return useContext(Context);
}
export {AppProvider, Context};