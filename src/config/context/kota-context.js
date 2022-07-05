import { useState, useEffect, useContext, createContext } from "react";
import { ContextDataPenyewa } from "./data-context";

import { provinsi, kota, kecamatan, desa } from "../../utils";

export const ApiKotaContext = createContext({})


export function ContextApiKota() {
    return useContext(ApiKotaContext)
}

export function ApiKota({ children }) {
    const penyewa = ContextDataPenyewa()

    const [prov, setProvinsi] = useState([])
    const [kot, setKot] = useState([])
    const [kec, setKecamatan] = useState([])
    const [des, setDesa] = useState([])

    const [selectProv, setSelectProv] = useState(penyewa.data.valueKota.provins)
    const [selectKot, setSelectKot] = useState(penyewa.data.valueKota.kota)
    const [selectKec, setSelectKec] = useState(penyewa.data.valueKota.kec)

    const getProvinsi = async () => {
        try {
            let response = await fetch(provinsi)
                .then(response => response.json())
                .then(data => setProvinsi(data))
        } catch (e) {
            console.log(e.message);
        }
    }

    const getKota = async () => {
        try {
            let response = await fetch(`${kota}${selectProv}.json`)
                .then(response => response.json())
                .then(data => setKot(data))
        } catch (e) {
            console.log(e.message);
        }
    }

    const getKecamatan = async () => {
        try {
            let response = await fetch(`${kecamatan}${selectKot}.json`)
                .then(response => response.json())
                .then(data => setKecamatan(data))
        } catch (e) {
            console.log(e.message);
        }
    }

    const getDesa = async () => {
        try {
            let response = await fetch(`${desa}${selectKec}.json`)
                .then(response => response.json())
                .then(data => setDesa(data))
        } catch (e) {
            console.log(e.message);
        }
    }

    useEffect(() => {
        getProvinsi()
        getKota()
        getKecamatan()
        getDesa()
    }, [selectProv, selectKot, selectKec])

    function selectProvinsi(e) {
        setSelectProv(e.value)
        penyewa.setData({
            ...penyewa.data,
            alamat: {
                ...penyewa.data.alamat,
                provins: e.label
            },
            valueKota: {
                ...penyewa.data.valueKota,
                provins: e.value
            }
        })
    }

    function selectKota(e) {
        setSelectKot(e.value)
        penyewa.setData({
            ...penyewa.data,
            alamat: {
                ...penyewa.data.alamat,
                kota: e.label
            },
            valueKota: {
                ...penyewa.data.valueKota,
                kota: e.value
            }
        })
    }

    function selectKecamatan(e) {
        setSelectKec(e.value)
        penyewa.setData({
            ...penyewa.data,
            alamat: {
                ...penyewa.data.alamat,
                kecamatan: e.label
            },
            valueKota: {
                ...penyewa.data.valueKota,
                kec: e.value
            }
        })
    }

    function selectDesa(e) {
        penyewa.setData({
            ...penyewa.data,
            alamat: {
                ...penyewa.data.alamat,
                desa: e.label
            },
            valueKota: {
                ...penyewa.data.valueKota,
                desa: e.value
            }
        })
    }

    const defaultProv = {
        value: penyewa.data.valueKota.provins,
        label: penyewa.data.alamat.provins
    }
    const defaultKota = {
        value: penyewa.data.valueKota.kota,
        label: penyewa.data.alamat.kota
    }
    const defaultKec = {
        value: penyewa.data.valueKota.kec,
        label: penyewa.data.alamat.kecamatan
    }
    const defaultDesa = {
        value: penyewa.data.valueKota.desa,
        label: penyewa.data.alamat.desa
    }

    let optionsProv = prov.map((d) => {
        return { value: d.id, label: d.name };
    })

    let optionsKot = kot.map((d) => {
        return { value: d.id, label: d.name };
    })

    let optionsKec = kec.map((d) => {
        return { value: d.id, label: d.name };
    })

    let optionsDesa = des.map((d) => {
        return { value: d.id, label: d.name };
    })

    const appKotaValue = {
        prov,
        setProvinsi,
        kot,
        setKot,
        kec,
        setKecamatan,
        des,
        setDesa,
        selectProv,
        setSelectProv,
        selectKot,
        setSelectKot,
        selectKec,
        setSelectKec,
        selectProvinsi,
        selectKota,
        selectKecamatan,
        selectDesa,
        defaultProv,
        defaultKota,
        defaultKec,
        defaultDesa,
        optionsProv,
        optionsKot,
        optionsKec,
        optionsDesa
    }

    // console.log(prov);

    return (
        <ApiKotaContext.Provider value={appKotaValue}>
            {children}
        </ApiKotaContext.Provider>
    )
}