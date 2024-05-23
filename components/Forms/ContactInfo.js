import Image from 'next/image';
import React from 'react';

export default function ContactInfo({ icon, title, info }) { // Added curly braces to destructure props
    return (
        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-lg">
            <Image className="mx-auto p-8" src={icon} alt="" height={128} width={128} />
            <div className="p-5 text-center">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{title}</h5> {/* Changed template literals from ${} to {} */}
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{info}</p> {/* Changed template literals from ${} to {} */}
            </div>
        </div>
    );
}
