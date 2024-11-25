import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import NewsCard from './NewsCard';

const news = [
  {
    date: '22 NOVEMBER 2024',
    title: 'The Spirit of Connection – Exploring Christmas and Consumer Trends',
    image: 'https://images.unsplash.com/photo-1576919228236-a097c32a5cd4?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
  },
  {
    date: '15 NOVEMBER 2024',
    title: 'Romania at Euro 2024: Impact on communication and TV audiences',
    image: 'https://images.unsplash.com/photo-1518091043644-c1d4457512c6?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
  },
  {
    date: '8 NOVEMBER 2024',
    title: 'Do you like chocolate?',
    image: 'https://images.unsplash.com/photo-1511381939415-e44015466834?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
  }
];

const NewsSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-12">
          <div className="flex items-center space-x-4">
            <button className="p-2 rounded-full border border-gray-200 hover:bg-gray-50">
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button className="p-2 rounded-full border border-gray-200 hover:bg-gray-50">
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
          <h2 className="text-4xl font-black">The NEWS</h2>
          <button className="text-blue-600 hover:text-blue-700 font-medium">
            SEE ALL
          </button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {news.map((item, index) => (
            <NewsCard key={index} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsSection;