import React from 'react';
import { LucideIcon } from 'lucide-react';

interface SolutionCardProps {
  title: string;
  icon: LucideIcon;
  color: string;
  link: string;
}

const SolutionCard = ({ title, icon: Icon, color, link }: SolutionCardProps) => {
  return (
    <div className={`${color} rounded-lg p-6 transition-transform hover:scale-105`}>
      <div className="h-32 flex items-center justify-center">
        <Icon className="w-12 h-12 text-white" />
      </div>
      <div className="mt-4">
        <h3 className="text-white font-bold text-lg mb-4">{title}</h3>
        <a
          href={link}
          className="inline-block bg-white text-black px-4 py-2 rounded-full text-sm font-medium hover:bg-opacity-90"
        >
          LEARN MORE
        </a>
      </div>
    </div>
  );
};

export default SolutionCard;