import Select from 'react-select'
import { useForm } from 'react-hook-form'
import { ContextApiKota, ContextDataPenyewa } from '../../config'

export default function Index() {
    const api = ContextApiKota()
    const penyewa = ContextDataPenyewa()

    const { register, handleSubmit } = useForm

    console.log(api.optionsProv);

    return (
        <div className='pb-24 flex justify-center flex-col items-center'>
            <p className='mt-8 text-xl font-semibold font-sans'>Informasi Data Penyewa</p>

            <form className='flex flex-col gap-3 mt-4 w-72 md:w-full'>
                <h2>Nama Lengkap</h2>
                <input
                    value={penyewa.data.name}
                    onChange={(e) => {
                        penyewa.setData({
                            ...penyewa.data,
                            name: e.target.value
                        })
                    }}
                    name='nama' type="text" className='border border-primary px-3 py-2 rounded-md' />

                <h2>Email</h2>
                <input
                    value={penyewa.data.email}
                    onChange={(e) => {
                        penyewa.setData({
                            ...penyewa.data,
                            email: e.target.value
                        })
                    }}
                    name='email' type="email" className='border border-primary px-3 py-2 rounded-md' />

                <h2>Alamat</h2>

                <div className='flex justify-between gap-4'>
                    <div className='w-full'>
                        <label>Provinsi</label>
                        <Select
                            defaultValue={api.defaultProv}
                            options={api.optionsProv}
                            onChange={api.selectProvinsi}
                        />
                    </div>

                    <div className='w-full'>
                        <label>Kota</label>
                        <Select
                            defaultValue={api.defaultKota}
                            options={api.optionsKot}
                            onChange={api.selectKota} />
                    </div>
                </div>

                <div className='flex justify-between gap-4'>
                    <div className='w-full'>
                        <label>Kecamatan</label>
                        <Select
                            defaultValue={api.defaultKec}
                            options={api.optionsKec}
                            onChange={api.selectKecamatan} />
                    </div>

                    <div className='w-full'>
                        <label>Desa</label>
                        <Select
                            defaultValue={api.defaultDesa}
                            options={api.optionsDesa}
                            onChange={api.selectDesa} />
                    </div>
                </div>

                <label>Jalan</label>
                <input
                    value={penyewa.data.alamat.jl}
                    onChange={(e) => {
                        penyewa.setData({
                            ...penyewa.data,
                            alamat: {
                                ...penyewa.data.alamat,
                                jl: e.target.value
                            }
                        })
                    }}
                    name='alamat' type="text" className='border border-primary px-3 py-2 rounded-md' />

                <label>No Hp</label>
                <input
                    value={penyewa.data.nohp}
                    onChange={(e) => {
                        penyewa.setData({
                            ...penyewa.data,
                            nohp: e.target.value
                        })
                    }}
                    name='nohp' type="number" className='border border-primary px-3 py-2 rounded-md' />
            </form>
        </div>
    )
}
