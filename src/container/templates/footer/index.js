import React from 'react'
import { wa, fb, telp, mail, twitter } from '../../../assets/img'

export default function index() {
    const kotasatu = ['Jakarta', 'Bekasi', 'Tangerang', 'Depok', 'Bogor']
    const kotadua = ['Bandung', 'Surabaya', 'Yogyakarta', 'Medan']

    // console.log(kotasatu)
    return (
        <div className='bg-secondary py-16'>
            <p className='text-center mb-16 text-lg text-white font-semibold font-secondary'>Hubungi Kami</p>

            <div className='flex flex-col md:flex-row justify-center md:gap-72'>
                <div className='flex flex-col items-center'>
                    <p className='mb-3 text-lg text-white font-semibold font-secondary'>Kantor Cabang</p>

                    <div className='flex gap-8'>
                        <div className='flex flex-col'>
                            {kotasatu.map((data) => (
                                <p key={data} className='font-secondary text-md text-white hover:text-primary'>{data}</p>
                            ))}
                        </div>
                        <div className='flex flex-col'>
                            {kotadua.map((data) => (
                                <p key={data} className='font-secondary text-md text-white hover:text-primary'>{data}</p>
                            ))}
                        </div>
                    </div>
                </div>

                <div className='flex flex-col items-center mt-5 md:mt-0 text-white font-secondary'>
                    <p className='mb-3 text-lg text-white font-semibold'>Kontak</p>
                    <div>
                        <div className='flex gap-3 items-center mb-2 hover:text-primary'>
                            <img src={mail} alt={mail} className='w-8 h-6' />
                            <p>Email</p>
                            <p>:  support@safen.com</p>
                        </div>
                        <div className='flex gap-3 items-center mb-2 hover:text-primary'>
                            <img src={telp} alt={telp} className='w-8 h-8' />
                            <p>Telepone</p>
                            <p>:  02123456789</p>
                        </div>
                        <div className='flex gap-3 items-center mb-4 hover:text-primary'>
                            <img src={wa} alt={wa} className='w-8 h-8' />
                            <p>WhatsApp</p>
                            <p>:  081234567890</p>
                        </div>
                    </div>

                    <p className='mb-3 text-lg text-white font-semibold'>Media Sosial</p>
                    <div className='flex gap-5'>
                        <img src={fb} alt={fb} className='w-8 h-8 hover:scale-125 transition duration-300 ease-in-out' />
                        <img src={twitter} alt={twitter} className='w-8 h-8 hover:scale-125 transition duration-300 ease-in-out' />
                    </div>
                </div>
            </div>
        </div>
    )
}
