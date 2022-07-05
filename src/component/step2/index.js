import { useState, useContext } from 'react'
import { Box } from '../../utils'
import { ContextDataPenyewa } from '../../config'


export default function Index() {
    const penyewa = ContextDataPenyewa()

    const [update, setUpdate] = useState(Box)

    const handleSelect = (value) => {
        const update = Box.map(d => {
            if (d.no === value) {
                return { ...d, status: 'select' }
            }
            return d
        })
        setUpdate(update)
    }

    return (

        <div className='py-10'>
            <div className='my-3 flex gap-5 justify-center mb-3'>
                <div className='flex flex-col items-center gap-2'>
                    <div className='w-8 h-8 bg-primary'></div>
                    <p className='text-md font-serif font-semibold'>Tersedia</p>
                </div>
                <div className='flex flex-col items-center gap-2'>
                    <div className='w-8 h-8 bg-yellow-500'></div>
                    <p className='text-md font-serif font-semibold'>Terpilih</p>
                </div>
                <div className='flex flex-col items-center gap-2'>
                    <div className='w-8 h-8 bg-red-500'></div>
                    <p className='text-md font-serif font-semibold'>Terisi</p>
                </div>
            </div>

            <div className='flex flex-wrap gap-4 items-center justify-center'>
                {
                    update.map((d) => (
                        <button
                            key={d.no}
                            className={`px-8 py-6 text-white rounded-lg shadow-md 

                            ${d.no === penyewa.data.nobox ? `bg-yellow-500` : d.status === `free` ? `bg-primary` : `bg-red-500`}
                        ${d.status === 'booked' ? 'cursor-not-allowed' : ''}
                         `}
                            onClick={() => {
                                handleSelect(d.no)
                                penyewa.setData({
                                    ...penyewa.data,
                                    nobox: d.no
                                })
                            }}
                            disabled={d.status === 'booked' ? true : false}


                        >{d.no}</button>
                    ))
                }
            </div>
        </div>
    )

}
