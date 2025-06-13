import React from 'react';
import Vision from '../assets/images/smart-city-vision.png';

const HomeItem2 = () => {
  return (
    <div className="bg-gray-50 py-10 px-4 md:px-16">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-8">
        {/* Left: Image */}
        <div className="flex-1 flex justify-center">
          <img src={Vision} alt="Vision and Strategy" className="w-80 md:w-[300px] object-contain drop-shadow-md" />
        </div>

        {/* Right: Content */}
        <div className="flex-1 text-center md:text-left">
          <h2 className="text-3xl font-semibold text-[#003049] mb-4">Vision</h2>
          <p className="text-gray-700 text-lg mb-6 leading-relaxed">
            A vibrant & alluring capital city that is inclusive, safe & accessible and which respects its natural environment & celebrates its heritage & culture.
          </p>

          <h2 className="text-3xl font-semibold text-[#003049] mb-4">Strategy</h2>
          <p className="text-gray-700 text-lg mb-6 leading-relaxed">
            The five Strategic Pillars that lay the foundation for the Vision Statement are derived from City Profile, Citizen Engagement & SWOT analysis. Below are listed the key focus areas – Strategic Direction & Goals, that will support & build on the Vision.
          </p>

          <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 text-lg font-medium rounded-md transition duration-200">
            Read More
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomeItem2;
