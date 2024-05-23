import React from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const Statistics = () => {
    return (
        <section className="bg-primary py-24">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <h4 className="text-center font-semibold  mb-6">Our Statistics</h4>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                    <div className="bg-white rounded-lg shadow-md p-12 text-center">
                        <CircularProgressbar
                            style={{ width: "50%" }}
                            value={99}
                            text={`${99}%`}
                            styles={buildStyles({
                                textColor: '#333',
                                pathColor: '#31AFD4',
                                trailColor: '#D1D5DB',
                            })}
                        />

                        <p className="mt-5 text-2xl">Satisfied Customers</p>
                    </div>
                    <div className="bg-white rounded-lg shadow-md p-12 text-center">
                        <CircularProgressbar
                            value={91}
                            text={`${91}%`}
                            styles={buildStyles({
                                textColor: '#333',
                                pathColor: '#31AFD4',
                                trailColor: '#D1D5DB',
                            })}
                        />
                        <p className="mt-5 text-2xl">Accuracy</p>
                    </div>
                    <div className="bg-white rounded-lg shadow-md p-12 text-center">
                        <CircularProgressbar
                            value={95}
                            text={`${95}%`}
                            styles={buildStyles({
                                textColor: '#333',
                                pathColor: '#31AFD4',
                                trailColor: '#D1D5DB',
                            })}
                        />
                        <p className="mt-5 text-2xl">Conditions Detected</p>
                    </div>
                    <div className="bg-white rounded-lg shadow-md p-12 text-center">
                        <CircularProgressbar
                            value={45}
                            text={`${45}%`}
                            styles={buildStyles({
                                textColor: '#333',
                                pathColor: '#31AFD4',
                                trailColor: '#D1D5DB',
                            })}
                        />
                        <p className="mt-5 text-2xl">Global Reach</p>
                    </div>
                    {/* Add more circular progress bars for other statistics */}
                </div>
            </div>
        </section>
    );
};

export default Statistics;
