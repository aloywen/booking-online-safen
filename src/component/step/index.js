import React from 'react'
import { Chrono } from 'react-chrono'
import { stepone, steptwo, stepthree, stepfour } from '../../assets/img'

export default function Index() {

    return (
        <div className='md:px-28 mt-24 bg-gray-100'>
            <p className='text-center text-md md:text-3xl font-bold font-primary text-gray-800 py-10'>Tata Cara booking</p>
            <Chrono mode="VERTICAL_ALTERNATING" hideControls="false" theme={{
                primary: '#B4FE98',
                secondary: '#B4FE98'
            }}>
                <div>
                    <img src={stepone} alt={stepone} className="w-64 h-44 mx-auto" />
                    <p className='text-center font-semibold text-secondary font-secondary'>Cek syarat dan ketentuan untuk menyewa</p>
                </div>
                <div>
                    <img src={steptwo} alt={steptwo} className="w-52 h-44 mx-auto" />
                    <p className='text-center font-semibold text-secondary font-secondary'>Cek Ketersediaan box</p>
                </div>
                <div>
                    <img src={stepthree} alt={stepthree} className="w-52 h-44 mx-auto" />
                    <p className='text-center font-semibold text-secondary font-secondary'>Isi formulir dengan data yang valid</p>
                </div>
                <div>
                    <img src={stepfour} alt={stepfour} className="w-52 h-40 mx-auto" />
                    <p className='text-center font-semibold text-secondary font-secondary'>Cek email pemberitahuan dan lakukan pembayaran</p>
                </div>
            </Chrono>
        </div>
    )
}
