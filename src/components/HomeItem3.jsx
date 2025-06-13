import React from 'react';
import Officials1 from '../assets/images/officials1.jpg';
import Officials2 from '../assets/images/officials2.jpg';
import Officials3 from '../assets/images/officials3.jpg';
import Officials4 from '../assets/images/officials4.jpg';
import Officials5 from '../assets/images/officials5.jpg';
import LinkedInIcon from '../assets/images/linkedin.png';
import ProfileIcon from '../assets/images/profileIcon.png';

const officials = [
  {
    name: 'Shri. Rahul Krishna Sharma IAS',
    title: 'Chief Executive Officer',
    image: Officials1,
    linkedin: '#',
    profile: '#'
  },
  {
    name: 'Shri. Rahul Kapoor IRAS',
    title: 'Mission Director',
    description: 'Smart Cities Mission',
    image: Officials2,
    linkedin: '#',
    profile: '#'
  },
  {
    name: 'Ms. Arya Rajendran',
    title: "Hon'ble Mayor",
    description: "Thiruvananthapuram",
    image: Officials3,
    linkedin: '#',
    profile: '#'
  },
  {
    name: 'Shri M.B Rajesh',
    title: "Hon'ble Minister of LSGD",
    description: "Govt of Kerala",
    image: Officials4,
    linkedin: '#',
    profile: '#'
  },
  {
    name: 'Dr. A. Jayathilak IAS',
    title: 'Chief Executive Officer',
    image: Officials5,
    linkedin: '#',
    profile: '#'
  },
];

const HomeItem3 = () => {
  return (
    <div className="bg-gradient-to-br from-[#f8fafc] to-[#e2e8f0] py-12 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Key Officials</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Meet the dedicated leadership team guiding Thiruvananthapuram's transformation into a Smart City
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {officials.map((official, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl border border-gray-100 flex flex-col"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={official.image}
                  alt={official.name}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
              </div>
              
              <div className="p-6 text-center flex-1 flex flex-col">
                <div className="relative -mt-14">
                  <div className="inline-flex items-center justify-center w-24 h-24 rounded-full overflow-hidden border-4 border-white shadow-lg mx-auto">
                    <img
                      src={official.image}
                      alt={official.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                
                <div className="flex-1 mt-4">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">{official.name}</h3>
                  <p className="text-blue-600 font-medium">{official.title}</p>
                  {official.description && (
                    <p className="text-gray-600 mt-1">{official.description}</p>
                  )}
                </div>
                
                <div className="mt-5 flex justify-center space-x-3">
                  <a 
                    href={official.profile} 
                    className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center hover:bg-blue-100 transition-colors"
                    title="View Profile"
                  >
                    <img 
                      src={ProfileIcon} 
                      alt="Profile" 
                      className="w-5 h-5"
                    />
                  </a>
                  <a 
                    href={official.linkedin} 
                    className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center hover:bg-blue-100 transition-colors"
                    title="LinkedIn Profile"
                  >
                    <img 
                      src={LinkedInIcon} 
                      alt="LinkedIn" 
                      className="w-5 h-5"
                    />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <button className="inline-flex items-center px-6 py-3 border border-blue-600 text-base font-medium rounded-md text-blue-700 bg-white hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all">
            View All Officials
            <svg className="ml-2 -mr-1 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomeItem3;