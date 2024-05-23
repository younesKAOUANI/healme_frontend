import Footer from '@/components/Footer/Footer'
import Head from '@/components/Head/Head'
import Header from '@/components/Header/Header'
import ContactForm from '@/components/Forms/ContactForm'
import ContactInfo from '@/components/Forms/ContactInfo'
import locationIcon from "../public/images/location.png"
import phoneIcon from "../public/images/phone.png"
import emailIcon from "../public/images/email.png"

import React from 'react'

export default function contact() {
    return (
        <>
        {/* <Head title="Contact Us"/> */}
            <Header />
            <div className='py-24 bg-background '>
                <div className='container mx-auto'>
                    <ContactForm />
                    <div className='flex flex-col  lg:flex-row justify-center gap-4'>
                        <ContactInfo icon={phoneIcon} title='Phone' info='+213 550 550 550' />
                        <ContactInfo icon={locationIcon} title='Location' info='123 John Doe Street, Constantine, Algeria' />
                        <ContactInfo icon={emailIcon} title='Email' info='email@healme.tech' />
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}
