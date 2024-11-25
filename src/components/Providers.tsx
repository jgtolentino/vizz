import React from 'react';
import { Clock, Network, BarChart2 } from 'lucide-react';

const providers = [
  {
    icon: Clock,
    title: 'Real Time Data',
    description: 'We acquire and process the most significant amount of Marketing Data in Romania daily. You can explore part of it here.'
  },
  {
    icon: Network,
    title: 'Research & Analytics',
    description: 'We have the expertise and proven methodologies to implement any type of studies, and our modeling algorithms are custom tailored to answer any specific business challenge.'
  },
  {
    icon: BarChart2,
    title: 'BI Systems',
    description: 'We have the necessary infrastructure and systems to provide business intelligence solutions.'
  }
];

const Providers = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-2xl mb-2">The leading DATA</h2>
          <h3 className="text-5xl font-black tracking-tight">INTELLIGENCE PROVIDERS</h3>
          <button className="mt-8 bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700">
            ABOUT US
          </button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {providers.map((provider, index) => {
            const Icon = provider.icon;
            return (
              <div key={index} className="text-center">
                <div className="mb-6 flex justify-center">
                  <Icon className="w-16 h-16 text-blue-600" />
                </div>
                <h4 className="text-xl font-bold mb-4">{provider.title}</h4>
                <p className="text-gray-600">{provider.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Providers;