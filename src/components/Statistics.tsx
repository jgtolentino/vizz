import React from 'react';
import { Target, Users, Grid, Building } from 'lucide-react';

const stats = [
  {
    number: '160',
    label: 'PROJECTS IMPLEMENTED SO FAR',
    icon: Target
  },
  {
    number: '29',
    label: 'DATA SPECIALISTS',
    icon: Users
  },
  {
    number: '38',
    label: 'CATEGORIES COVERED',
    icon: Grid
  },
  {
    number: '64',
    label: 'CLIENTS WHO TRUST US',
    icon: Building
  }
];

const Statistics = () => {
  return (
    <section className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div key={index} className="text-center">
                <div className="mb-4 flex justify-center">
                  <Icon className="w-12 h-12 text-blue-600" strokeWidth={1} />
                </div>
                <div className="text-5xl font-bold mb-2">{stat.number}</div>
                <div className="text-sm text-gray-600 uppercase tracking-wider">
                  {stat.label}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Statistics;