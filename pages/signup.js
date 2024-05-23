import Footer from '@/components/Footer/Footer'
import RegisterForm from '@/components/Forms/RegisterForm'
import Header from '@/components/Header/Header'
import Head from '@/components/Head/Head'
import React from 'react'

export default function login() {
    return (
        <>
        {/* <Head title="Sign Up"/> */}
            <Header />
            <div className='container mx-auto py-28'>
                <div className="grid lg:grid-cols-5 grid-cols-1 gap-4">
                    <div className='col-span-2'>
                        <section className="bg-white dark:bg-gray-900">
                            <div className="max-w-screen-xl px-4 mx-auto text-center  lg:px-6">
                                <h4 className=' text-dark text-center  font-semibold mb-10'>Join Us</h4>
                                <dl className="grid max-w-screen-md gap-8 mx-auto text-gray-900 sm:grid-cols-2 dark:text-white">
                                    <div className="flex flex-col items-center justify-center shadow-md p-4 py-8 border-gray-300 border rounded-lg">
                                        <dt className="mb-2 text-3xl md:text-4xl font-extrabold">70M+</dt>
                                        <dd className="font-light text-gray-500">Users</dd>
                                    </div>
                                    <div className="flex flex-col shadow-md p-4 py-8 border-gray-300 border items-center justify-center rounded-lg">
                                        <dt className="mb-2 text-3xl md:text-4xl font-extrabold ">1B+</dt>
                                        <dd className="font-light text-gray-500">Diagnostics</dd>
                                    </div>
                                    <div className="flex flex-col items-center justify-center shadow-md p-4 py-8 border-gray-300 border rounded-lg" >
                                        <dt className="mb-2 text-3xl md:text-4xl font-extrabold">50M+</dt>
                                        <dd className="font-light text-gray-500">Positive Reviews</dd>
                                    </div>
                                    <div className="flex flex-col items-center justify-center shadow-md p-4 py-8 border-gray-300 border rounded-lg">
                                        <dt className="mb-2 text-3xl md:text-4xl font-extrabold">2M+</dt>
                                        <dd className="font-light text-gray-500">Approved by Medical Experts</dd>
                                    </div>
                                </dl>
                            </div>
                        </section>

                    </div>
                    <div className='col-span-3'>
                        <RegisterForm />

                    </div>
                </div >
            </div >
            <Footer />
        </>
    )
}
