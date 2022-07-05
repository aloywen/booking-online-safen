import React from 'react'
import Hero from '../../assets/img/hero.png'

import { useNavigate } from 'react-router-dom'

export default function Index() {
    let history = useNavigate();

    function handleClick() {
        history("/booking");
    }

    return (
        <div className='flex flex-col md:flex-row justify-center items-center gap-20 px-12 lg:px-32 mt-12 mb-8'>
            <div className='order-last md:order-first -mt-14 md:-mt-0'>
                <p className='font-primary text-secondary text-lg lg:text-3xl font-semibold'>Simpan barang berharga anda <br />dengan <span className='text-primary'>Aman</span> dan <span className='text-third'>Tenang</span> </p>

                <div className='flex gap-3 items-center mt-7 ml-5'>
                    <button onClick={handleClick} className='bg-primary text-white lg:text-2xl font-semibold rounded-full px-8 py-2 lg:py-3 lg:px-14 shadow-lg shadow-primary'>Cek Box</button>
                    <p className='font-primary text-secondary text-lg lg:text-3xl font-semibold'>Sekarang</p>
                </div>
            </div>

            <img src={Hero} alt="" className='w-64 lg:w-96 lg:h-42' />
        </div>
    )
}
