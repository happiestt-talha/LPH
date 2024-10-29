import React from 'react'
import HeroSection from '../components/HeroSection'
import CompanyStats from '../components/CompanyStats'
import Testimonials from '../components/Testimonials'
import ContactUs from '../components/ContactUs'
import Services from '../components/Services'

const Home = () => {
    return (
        <>
            <div className="bg-dark min-h-screen text-white">
                <HeroSection />
                <CompanyStats />
                <Services />
                <Testimonials />
                <ContactUs />
            </div>
        </>
    )
}

export default Home