import React from 'react';

const ServicesSection = () => {
  return (
    <section className="bg-primary py-24">
      <div className="container mx-auto">
        <h4 className=" font-semibold text-center mb-6">Our Services</h4>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mx-8 md:mx-0">
          <div className="bg-white rounded-lg shadow-md text-center p-6">
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">Online Medical Diagnostic</h3>
            <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </div>
          <div className="bg-white rounded-lg shadow-md text-center p-6">
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">High Speed & High Accuracy</h3>
            <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </div>
          <div className="bg-white rounded-lg shadow-md text-center p-6">
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">Diagnose for Multiple Deseases</h3>
            <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
