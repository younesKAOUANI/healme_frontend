import FileUpload from '@/components/Diagnostic/FileUpload'
import Footer from '@/components/Footer/Footer'
import Header from '@/components/Header/Header'
import Head from '@/components/Head/Head'
import { ButtonPrimary } from '@/components/ui/Buttons';
import React from 'react'

export default function diagnostic() {
    let percentage = "13";
    const color = percentage > 50 ? 'text-red-500' : 'text-green-500';
    let selectedDesease = "Diabetes";
    return (
        <>
        {/* <Head title="Diagnostic"/> */}
            <Header />
            <div className='py-24 pb-8 h-screen'>
                <h2 className="py-8   text-4xl tracking-tight font-extrabold text-center text-dark ">Diagnostic</h2>
                <div className='grid grid-cols-10 h-full'>
                    <div className='col-span-3 px-4 border-r border-gray-200 mx-auto w-full'>
                        <h2 className="py-2 ml-6 text-xl  font-bold text-left text-dark ">Diagnostic Result:</h2>
                        <div className='text-center mt-4 border shadow-md mx-10 py-6'>
                            <p className='text-xl font-bold'>You are</p>
                            <h2 className={`text-10xl ${color}`}>
                                {percentage}%
                            </h2>
                            <p className='text-xl font-bold'>Sick with <span className='text-'>{selectedDesease}</span></p>
                        </div>
                    </div>
                    <div className='col-span-7 px-6 relative h-full'>
                        <h2 className="py-2  text-xl  font-bold text-left text-dark ">Select the desease you want to test for:</h2>
                        <div className=' pt-6 mx-auto grid grid-cols-3 gap-4'>
                            <div className="flex items-center mb-4">
                                <input id="default-radio-1" type="radio" value="" name="default-radio" className="w-6 h-6 text-secondaryLight bg-gray-100 border-gray-300 focus:ring-secondaryLight" />
                                <label htmlFor="default-radio-1" className="ms-2 text-xl font-medium text-gray-900 dark:text-gray-300">Diabetes</label>
                            </div>
                            <div className="flex items-center mb-4">
                                <input id="default-radio-2" type="radio" value="" name="default-radio" className="w-6 h-6 text-secondaryLight bg-gray-100 border-gray-300 focus:ring-secondaryLight" />
                                <label htmlFor="default-radio-2" className="ms-2 text-xl font-medium text-gray-900 dark:text-gray-300">Disease 2</label>
                            </div>
                            <div className="flex items-center mb-4">
                                <input id="default-radio-3" type="radio" value="" name="default-radio" className="w-6 h-6 text-secondaryLight bg-gray-100 border-gray-300 focus:ring-secondaryLight " />
                                <label htmlFor="default-radio-3" className="ms-2 text-xl font-medium text-gray-900 dark:text-gray-300">Disease 3</label>
                            </div>
                            <div className="flex items-center mb-4">
                                <input id="default-radio-4" type="radio" value="" name="default-radio" className="w-6 h-6 text-secondaryLight bg-gray-100 border-gray-300 focus:ring-secondaryLight" />
                                <label htmlFor="default-radio-4" className="ms-2 text-xl font-medium text-gray-900 dark:text-gray-300">Disease 4</label>
                            </div>
                            <div className="flex items-center mb-4">
                                <input id="default-radio-5" type="radio" value="" name="default-radio" className="w-6 h-6 text-secondaryLight bg-gray-100 border-gray-300 focus:ring-secondaryLight" />
                                <label htmlFor="default-radio-5" className="ms-2 text-xl font-medium text-gray-900 dark:text-gray-300">Disease 5</label>
                            </div>
                        </div>
                        <ButtonPrimary className={'my-6 w-1/2 absolute bottom-0'}>Submit</ButtonPrimary>

                    </div>
                    <div className='col-span-12 px-12 h-full'>
                        <FileUpload />
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}
