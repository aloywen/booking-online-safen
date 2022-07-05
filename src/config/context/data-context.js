import { useState, useContext, createContext } from "react";

export const DataPenyewaContext = createContext({})


export function ContextDataPenyewa() {
    return useContext(DataPenyewaContext)
}

export function DataPenyewa({ children }) {
    const [data, setData] = useState({
        name: '',
        email: '',
        alamat: {
            jl: '',
            desa: '',
            kecamatan: '',
            kota: '',
            provins: '',
        },
        nohp: '',
        nobox: '',
        valueKota: {
            desa: '',
            kec: '',
            kota: '',
            provins: ''
        }
    })


    const appContextValue = {
        data,
        setData
    }

    return (
        <DataPenyewaContext.Provider value={appContextValue}>
            {children}
        </DataPenyewaContext.Provider>
    )
}