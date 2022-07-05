import React from 'react'
import { Hero, Kelebihan, Step } from '../../component'
import { Footer, Navbar } from '../templates'

export default function Home() {
    return (
        <div>
            <Navbar />
            <Hero />
            <Step />
            <Kelebihan />
            <Footer />
        </div>
    )
}
