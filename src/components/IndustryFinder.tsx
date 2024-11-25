import React from 'react';
import { ChevronRight } from 'lucide-react';

const industries = [
  'Appliances Electronics',
  'Appliances Household',
  'Auto Gas Station',
  'Auto Other',
  'Auto Vehicles',
  'Business & Industrial',
  'Clothing & Accessories',
  'Computers',
  'Cosmetics & Toiletries Cosmetics Others',
  'Cosmetics & Toiletries Hair Products',
  'Cosmetics & Toiletries Men Cosmetics',
  'Cosmetics & Toiletries Women Cosmetics'
];

const IndustryFinder = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h2 className="text-xl mb-2">Find information</h2>
          <h3 className="text-5xl font-black tracking-tight">FROM YOUR INDUSTRY</h3>
          <p className="text-gray-600 mt-4">Discover the right data solution for your industry</p>
          <button className="mt-4 bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 flex items-center">
            See all
            <ChevronRight className="ml-2 w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {industries.map((industry, index) => (
            <button
              key={index}
              className="flex items-center justify-between bg-white p-4 rounded-lg hover:shadow-md transition-shadow text-left"
            >
              <span className="text-gray-900">{industry}</span>
              <ChevronRight className="w-5 h-5 text-gray-400" />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustryFinder;