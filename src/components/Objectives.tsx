import React from 'react';
import { ChevronRight } from 'lucide-react';

const objectives = [
  'Analyse your Competition',
  'Assess Consumer Attitudes',
  'Choose the Best Influencers',
  'Design your Communication',
  'Discover Consumer Insights',
  'Discover Customer Journey',
  'Evaluate Campaign Perception',
  'Identify Customer Segments',
  'Improve Digital Presence'
];

const Objectives = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-xl mb-2">Helping you</h2>
            <h3 className="text-5xl font-black tracking-tight mb-6">ACHIEVE OBJECTIVES</h3>
            <p className="text-gray-600 mb-8">Find the right data solution</p>
            <button className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 flex items-center">
              SEE ALL
              <ChevronRight className="ml-2 w-4 h-4" />
            </button>
          </div>
          
          <div className="space-y-2">
            {objectives.map((objective, index) => (
              <button
                key={index}
                className="w-full flex items-center justify-between bg-white p-4 rounded-lg hover:shadow-md transition-shadow text-left group"
              >
                <span className="text-gray-900">{objective}</span>
                <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-blue-600 transition-colors" />
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Objectives;