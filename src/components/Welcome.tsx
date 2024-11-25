import React from 'react';
import { ChevronRight } from 'lucide-react';

const Welcome = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-light mb-2">Welcome to Data Intelligence Headquarters</h2>
        <h3 className="text-6xl font-black mb-8">TIME TO GET YOUR DATA REAL-TIME</h3>
        
        <div className="max-w-3xl mx-auto">
          <p className="text-gray-600 text-lg mb-8 leading-relaxed">
            We acquire and process the most significant amount of Marketing Data 
            in Romania daily. We share a wide range of resources, including real-time 
            data exploration capabilities, case studies, sample reports, articles, 
            and a data dictionary to clarify specific terminology. Therefore, 
            this is the Romanian <span className="font-black">DATA HUB FOR MARKETING</span>, 
            empowering you for data-driven business growth.
          </p>
          
          <button className="bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-700 flex items-center mx-auto">
            ABOUT US
            <ChevronRight className="ml-2 w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Welcome;