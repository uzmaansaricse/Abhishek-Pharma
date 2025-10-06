import React, { useEffect } from 'react'
import Header from './Header'
import { Outlet } from 'react-router'
import Footer from './Footer'
import AOS from 'aos'
import 'aos/dist/aos.css'

export default function Layout() {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            easing: 'ease-in-out',
            once: true,
            mirror: false,
        })
    }, [])

    return (
        <div>
            <Header />
            <Outlet />
            <Footer />
        </div>
    )
}
