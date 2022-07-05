import React from 'react'

import { useNavigate } from 'react-router-dom'

export default function Index() {
    let history = useNavigate();

    function handleClick() {
        history("/login");
    }

    return (
        <div className='flex justify-between items-center border-b-2 border-b-slate-300 md:px-44 py-4'>
            <p className='text-primary text-3xl font-bold ml-5'>safeN</p>


            {/* <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 10h16M4 14h16M4 18h16" /></svg> */}
            <div className='flex items-center gap-6 hidden md:inline-flex'>
                <p className='font-secondary text-secondary text-lg font-semibold'>Cara Booking</p>
                <p className='font-secondary text-secondary text-lg font-semibold'>Kontak Kami</p>
                <button onClick={handleClick} className='bg-primary text-white text-lg font-semibold font-secondary px-7 py-2 rounded-full'>LOGIN</button>
            </div>
        </div>
    )
}
