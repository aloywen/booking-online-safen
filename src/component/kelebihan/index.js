import React from 'react'
import { kelebihansatu, kelebihandua, kelebihantiga } from '../../assets/img'

export default function Index() {
    return (
        <div className='py-20'>
            <p className='text-center text-md md:text-3xl font-bold font-primary text-gray-800 mb-10'>Kenapa Harus Simpan Berkas Di saviN?</p>

            <div className='flex flex-col md:flex-row gap-10 justify-center items-center text-center md:px-12'>
                <div className='md:w-72 md:p-4 lg:h-64 shadow-lg hover:bg-gray-200'>
                    <img className='lg:h-52 pt-2' src={kelebihansatu} alt={kelebihansatu} />
                    <hr className='w-1/2 border border-black mb-3 mx-auto' />
                    <p className='pb-2 text-sm lg:text-md text-secondary font-secondary font-semibold pb-3'>Terjaga 24 Jam</p>
                </div>
                <div className='md:w-72 md:p-4 lg:h-64 shadow-lg hover:bg-gray-200'>
                    <img className='h-30 lg:h-52' src={kelebihandua} alt={kelebihandua} />
                    <hr className='w-1/2 border border-black mb-3 mx-auto' />
                    <p className='pb-2 text-sm lg:text-md text-secondary font-secondary font-semibold pb-3'>Kerahasiaan Terjamin</p>
                </div>
                <div className='md:w-72 md:p-4 lg:h-64 shadow-lg hover:bg-gray-200'>
                    <img className='lg:h-52' src={kelebihantiga} alt={kelebihantiga} />
                    <hr className='w-1/2 border border-black mb-3 mx-auto' />
                    <p className='mb-2 text-sm lg:text-md text-secondary font-secondary font-semibold'>Kemudahan dalam menyewa</p>
                </div>
            </div>
        </div>
    )
}
