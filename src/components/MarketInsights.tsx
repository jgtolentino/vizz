import React from 'react';
import { BarChart3 } from 'lucide-react';

const MarketInsights = () => {
  return (
    <div className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-4xl font-extrabold tracking-tight text-gray-900">
            KNOW THE MARKETS
          </h2>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {/* Market Card 1 */}
          <div className="bg-white overflow-hidden shadow rounded-lg">
            <div className="px-4 py-5 sm:p-6">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <BarChart3 className="h-8 w-8 text-blue-600" />
                </div>
                <div className="ml-5">
                  <h3 className="text-lg font-medium text-gray-900">Top Advertisers</h3>
                  <p className="mt-1 text-sm text-gray-500">By budget size</p>
                </div>
              </div>
              <div className="mt-4">
                <div className="flex items-center justify-between py-2">
                  <span className="text-sm font-medium text-gray-900">URSUS BREWERIES</span>
                  <span className="text-sm text-gray-500">20.0</span>
                </div>
                <div className="flex items-center justify-between py-2">
                  <span className="text-sm font-medium text-gray-900">COCA COLA COMPANY</span>
                  <span className="text-sm text-gray-500">18.5</span>
                </div>
                <div className="flex items-center justify-between py-2">
                  <span className="text-sm font-medium text-gray-900">HEINEKEN</span>
                  <span className="text-sm text-gray-500">15.2</span>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 px-4 py-4 sm:px-6">
              <div className="text-sm">
                <a href="#" className="font-medium text-blue-600 hover:text-blue-500">
                  View full report →
                </a>
              </div>
            </div>
          </div>

          {/* Market Card 2 */}
          <div className="bg-white overflow-hidden shadow rounded-lg">
            <div className="px-4 py-5 sm:p-6">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <BarChart3 className="h-8 w-8 text-blue-600" />
                </div>
                <div className="ml-5">
                  <h3 className="text-lg font-medium text-gray-900">Media Budget Variation</h3>
                  <p className="mt-1 text-sm text-gray-500">Compared to Q3 2023</p>
                </div>
              </div>
              <div className="mt-4">
                <div className="text-3xl font-bold text-green-500">+20.00%</div>
                <p className="mt-1 text-sm text-gray-500">Overall growth rate</p>
              </div>
            </div>
            <div className="bg-gray-50 px-4 py-4 sm:px-6">
              <div className="text-sm">
                <a href="#" className="font-medium text-blue-600 hover:text-blue-500">
                  View detailed analysis →
                </a>
              </div>
            </div>
          </div>

          {/* Market Card 3 */}
          <div className="bg-white overflow-hidden shadow rounded-lg">
            <div className="px-4 py-5 sm:p-6">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <BarChart3 className="h-8 w-8 text-blue-600" />
                </div>
                <div className="ml-5">
                  <h3 className="text-lg font-medium text-gray-900">Trending Categories</h3>
                  <p className="mt-1 text-sm text-gray-500">Top performing sectors</p>
                </div>
              </div>
              <div className="mt-4">
                <div className="flex items-center justify-between py-2">
                  <span className="text-sm font-medium text-gray-900">Pharmacies</span>
                  <span className="text-sm text-gray-500">20.0</span>
                </div>
                <div className="flex items-center justify-between py-2">
                  <span className="text-sm font-medium text-gray-900">Soft drinks</span>
                  <span className="text-sm text-gray-500">18.5</span>
                </div>
                <div className="flex items-center justify-between py-2">
                  <span className="text-sm font-medium text-gray-900">Auto</span>
                  <span className="text-sm text-gray-500">15.2</span>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 px-4 py-4 sm:px-6">
              <div className="text-sm">
                <a href="#" className="font-medium text-blue-600 hover:text-blue-500">
                  View all categories →
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MarketInsights;