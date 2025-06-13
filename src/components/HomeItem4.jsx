import React from 'react';
import { useState } from 'react';

const HomeItem4 = () => {
  const announcements = [
    {
      title: 'SCTL Inviting E Tenders for the Development of Chalai Warehouse',
      link: '#',
      isNew: true,
      date: 'May 15, 2025',
    },
    {
      title: 'Information Handbook to Citizens for Smart City Project - Published',
      link: '#',
      isNew: true,
      date: 'May 14, 2025',
    },
    {
      title: 'Upcoming Workshop on Urban Mobility – Register Now',
      link: '#',
      isNew: false,
      date: 'May 12, 2025',
    },
  ];

  const newsItems = [
    {
      date: '14 MAY 2025',
      title: 'Smart City roads to be inaugurated by chief minister in Thiruvananthapuram on Friday',
      excerpt: 'The new smart roads project will enhance urban mobility and reduce traffic congestion in the city center.',
    },
    {
      date: '13 MAY 2025',
      title: 'Green initiatives launched in Thiruvananthapuram Smart City',
      excerpt: 'New sustainability projects include solar-powered streetlights and expanded green spaces.',
    },
    {
      date: '11 MAY 2025',
      title: 'Digital transformation accelerates in government services',
      excerpt: 'Citizens can now access 15 new services through the Smart City mobile app.',
    },
  ];

  const [activeTab, setActiveTab] = useState('announcements');

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-6">
      {/* Tabs for mobile view */}
      <div className="lg:hidden flex border-b border-gray-200 mb-4">
        <button
          className={`py-2 px-4 font-medium text-sm ${
            activeTab === 'announcements'
              ? 'text-blue-600 border-b-2 border-blue-600'
              : 'text-gray-500 hover:text-gray-700'
          }`}
          onClick={() => setActiveTab('announcements')}
        >
          Announcements
        </button>
        <button
          className={`py-2 px-4 font-medium text-sm ${
            activeTab === 'news'
              ? 'text-blue-600 border-b-2 border-blue-600'
              : 'text-gray-500 hover:text-gray-700'
          }`}
          onClick={() => setActiveTab('news')}
        >
          News
        </button>
      </div>

      <div className="flex flex-col lg:flex-row gap-6">
        {/* Announcements Section - Always visible on desktop, conditional on mobile */}
        <div 
          className={`bg-white rounded-xl shadow-sm border border-gray-200 w-full lg:w-1/3 ${
            activeTab === 'announcements' || !activeTab ? 'block' : 'hidden lg:block'
          }`}
        >
          <div className="p-5 border-b border-gray-200 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-t-xl">
            <h2 className="text-xl font-bold text-gray-800 flex items-center">
              <span className="mr-2 text-blue-600">📢</span> Latest Announcements
            </h2>
          </div>
          <ul className="divide-y divide-gray-100 max-h-[400px] overflow-y-auto">
            {announcements.map((item, index) => (
              <li key={index} className="p-4 hover:bg-gray-50 transition-colors">
                <a
                  href={item.link}
                  className="block text-gray-700 hover:text-blue-600 transition"
                >
                  <div className="flex">
                    {item.isNew && (
                      <span className="text-xs font-bold text-white bg-red-500 px-2 py-0.5 rounded mr-2 flex-shrink-0 h-fit">
                        NEW
                      </span>
                    )}
                    <div>
                      <p className="text-sm font-medium">{item.title}</p>
                      <p className="text-xs text-gray-500 mt-1">{item.date}</p>
                    </div>
                  </div>
                </a>
              </li>
            ))}
          </ul>
          <div className="p-4 border-t border-gray-200 bg-gray-50 rounded-b-xl">
            <a 
              href="#" 
              className="text-blue-600 text-sm font-medium hover:underline flex items-center"
            >
              View all announcements
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>
        
        {/* News Section - Always visible on desktop, conditional on mobile */}
        <div 
          className={`bg-white rounded-xl shadow-sm border border-gray-200 w-full lg:w-2/3 ${
            activeTab === 'news' || !activeTab ? 'block' : 'hidden lg:block'
          }`}
        >
          <div className="p-5 border-b border-gray-200 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-t-xl">
            <h2 className="text-xl font-bold text-gray-800 flex items-center">
              <span className="mr-2 text-blue-600">📰</span> Latest News
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 max-h-[400px] overflow-y-auto">
            {newsItems.map((news, index) => (
              <div 
                key={index} 
                className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow h-fit"
              >
                <div className="p-4">
                  <div className="flex items-center justify-between mb-2">
                    <p className="text-xs font-semibold text-blue-600 bg-blue-50 px-2 py-1 rounded">
                      {news.date}
                    </p>
                    <span className="text-xs text-gray-500">3 min read</span>
                  </div>
                  <h3 className="text-base font-bold text-gray-800 mb-2">{news.title}</h3>
                  <p className="text-sm text-gray-600 line-clamp-2">{news.excerpt}</p>
                </div>
                <div className="px-4 pb-4">
                  <a 
                    href="#" 
                    className="text-blue-600 text-sm font-medium hover:underline"
                  >
                    Read full story
                  </a>
                </div>
              </div>
            ))}
          </div>
          <div className="p-4 border-t border-gray-200 bg-gray-50 rounded-b-xl text-center">
            <button className='text-sm text-blue-600 font-medium hover:underline'>
              View all news →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeItem4;