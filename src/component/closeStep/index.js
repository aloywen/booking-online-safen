import { ContextDataPenyewa } from "../../config"

export default function Index() {
    const penyewa = ContextDataPenyewa()

    const jl = penyewa.data.alamat.jl.toString().toLowerCase()
    const desa = penyewa.data.alamat.desa.toString().toLowerCase()
    const kecamatan = penyewa.data.alamat.kecamatan.toString().toLowerCase()
    const kota = penyewa.data.alamat.kota.toString().toLowerCase()
    const provinsi = penyewa.data.alamat.provins.toString().toLowerCase()

    return (
        <div className="px-7 pb-10">
            <h1 className="text-center text-lg mt-4 font-semibold">Informasi Data Penyewa</h1>

            {/* <div className="bg-slate-500"> */}
            <div className="">
                <h2 className="text-lg mt-4 font-sans font-semibold">Nama</h2>
                <p className="bg-slate-200 p-2 w-1/2">{penyewa.data.name}</p>

                <h2 className="text-lg mt-4 font-sans font-semibold">Email</h2>
                <p className="bg-slate-200 p-2 w-1/2">{penyewa.data.email}</p>

                <h2 className="text-lg mt-4 font-sans font-semibold">Nomor Box Yang Disewa</h2>
                <p className="bg-slate-200 p-2 w-1/2">{penyewa.data.nobox}</p>

                <h2 className="text-lg mt-4 font-sans font-semibold">Harga Box</h2>
                <p className="bg-slate-200 p-2 w-1/2">Rp. 150.000</p>

                <h2 className="text-lg mt-4 font-sans font-semibold">Alamat</h2>
                <p className="bg-slate-200 p-2 w-1/2 capitalize">{jl}, {desa},<br /> Kecamatan {kecamatan}, {kota}, {provinsi}</p>

                <h2 className="text-lg mt-4 font-sans font-semibold">No Handphone</h2>
                <p className="bg-slate-200 p-2 w-1/2">{penyewa.data.nohp}</p>
            </div>
            {/* </div> */}

        </div>
    )
}
