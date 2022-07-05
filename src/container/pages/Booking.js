import { useState } from 'react'
import { Stepper, Step } from 'react-form-stepper'
import { ApiKota, DataPenyewa } from '../../config'

import { Step1, Step2, Step3, CloseStep } from '../../component'

export default function Booking() {
    const [goSteps, setGoSteps] = useState(0)

    function handleRedirect() {
        console.log('mantap berhasil');
    }
    return (
        <div className='flex flex-col justify-center w-screen'>
            <Stepper activeStep={goSteps}>
                <Step label='Syarat Dan Ketentuan' />
                <Step label='Pilih Box' />
                <Step label='Isi Identitas' />
            </Stepper>

            <div className='flex flex-col justify-center px-4 md:px-20'>
                <div className='flex gap-6 justify-center'>
                    <button disabled={goSteps === 0 ? true : false} className={`bg-red-500 rounded-full px-3 py-1 text-white  ${goSteps === 0 ? 'cursor-not-allowed' : ''} `} onClick={() => setGoSteps(goSteps - 1)} >
                        Sebelumnya
                    </button>

                    {goSteps === 3 ? <button className="bg-yellow-500 rounded-full px-3 py-1 text-white" onClick={handleRedirect}>
                        Daftar
                    </button> : <button className="bg-yellow-500 rounded-full px-3 py-1 text-white" onClick={() => setGoSteps(goSteps + 1)}>
                        Selanjutnya
                    </button>}
                </div>

                <DataPenyewa>
                    {goSteps === 0 && (<div>
                        <Step1 />
                    </div>)}
                    {goSteps === 1 && (<div>
                        <Step2 />
                    </div>)}
                    {goSteps === 2 && (<div>
                        <ApiKota>
                            <Step3 />
                        </ApiKota>
                    </div>)}
                    {goSteps === 3 && (<div>
                        <CloseStep />
                    </div>)}
                </DataPenyewa>

            </div>
        </div>
    )
}
