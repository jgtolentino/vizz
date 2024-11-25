import React from 'react';
import { BarChart2, Users, Target, Globe, Activity, UserCheck, Users2, LineChart } from 'lucide-react';
import SolutionCard from './SolutionCard';

const solutions = [
  {
    title: 'MEDIA MARKET OVERVIEW',
    icon: BarChart2,
    color: 'bg-purple-400',
    link: '#'
  },
  {
    title: 'COMPETITIVE MEDIA OVERVIEW',
    icon: LineChart,
    color: 'bg-teal-400',
    link: '#'
  },
  {
    title: 'PROMO RADAR',
    icon: Target,
    color: 'bg-green-400',
    link: '#'
  },
  {
    title: 'SOCIAL MEDIA STARS INDEX',
    icon: Globe,
    color: 'bg-blue-400',
    link: '#'
  },
  {
    title: 'DIGITAL HEALTH INDEX',
    icon: Activity,
    color: 'bg-blue-600',
    link: '#'
  },
  {
    title: 'TIKTOK INDEX',
    icon: UserCheck,
    color: 'bg-pink-400',
    link: '#'
  },
  {
    title: 'CRM STRATEGY',
    icon: Users2,
    color: 'bg-blue-500',
    link: '#'
  },
  {
    title: 'CONTENT POWER RATINGS TV',
    icon: BarChart2,
    color: 'bg-green-400',
    link: '#'
  }
];

const DataSolutions = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h2 className="text-4xl font-bold mb-2">Our</h2>
          <h3 className="text-4xl font-black tracking-tight">DATA SOLUTIONS</h3>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {solutions.map((solution, index) => (
            <SolutionCard key={index} {...solution} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default DataSolutions;