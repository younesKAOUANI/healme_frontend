import Footer from '@/components/Footer/Footer'
import LoginForm from '@/components/Forms/LoginForm'
import Header from '@/components/Header/Header'
import Head from '@/components/Head/Head'
import React from 'react'

export default function login() {
    return (
        <>
        {/* <Head title="Login"/> */}
            <Header />
            <div className='container mx-auto py-28'>
                    <div className='max-w-sm mx-auto'>
                        <LoginForm />
                    </div>
                </div >
            <Footer />
        </>
    )
}
