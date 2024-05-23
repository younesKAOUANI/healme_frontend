import React from 'react';
import { Button } from '../ui/Buttons';

const JoinUs = () => {
    return (
        <section className='bg-background py-24'>
            <div className='container mx-auto px-4'>
                <div className='text-left md:grid grid-cols-3 '>
                    <div className='col-span-2 md:text-left text-center'>
                        <h2 className='text-2xl font-semibold text-gray-800 mb-2'>Create an Account</h2>
                        <p className='text-gray-600'>If you haven&#39;t already, create an account to access our platform&#39;s features and services.</p>
                    </div>
                    <Button variant="primary" href="/signup" className='grid items-center max-w-48 max-h-16 text-center text-primary md:mt-0 mt-4 mx-auto'>Join Us Now </Button>
                </div>
            </div>
        </section>
    );
};

export default JoinUs;
