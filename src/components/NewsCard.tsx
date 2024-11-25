import React from 'react';

interface NewsCardProps {
  date: string;
  title: string;
  image: string;
}

const NewsCard = ({ date, title, image }: NewsCardProps) => {
  return (
    <div className="group">
      <div className="aspect-w-16 aspect-h-9 mb-4">
        <img
          src={image}
          alt={title}
          className="w-full h-64 object-cover rounded-lg"
        />
      </div>
      <div className="p-4">
        <p className="text-sm text-gray-500 mb-2">{date}</p>
        <h3 className="text-xl font-semibold mb-4 group-hover:text-blue-600 transition-colors">
          {title}
        </h3>
        <button className="text-blue-600 font-medium hover:text-blue-700">
          READ MORE
        </button>
      </div>
    </div>
  );
};

export default NewsCard;