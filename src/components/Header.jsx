import React, { useState } from 'react';
import Facebook from '../assets/images/facebookIcon.png';
import Instagram from '../assets/images/instagram.png';
import LinkedIn from '../assets/images/linkedin.png';
import Twitter from '../assets/images/twitter.png';
import Youtube from '../assets/images/youtube.png';
import User from '../assets/images/user.png';
import Phone from '../assets/images/phone.png';

const Header = () => {
  const [language, setLanguage] = useState('english');
  const [searchQuery, setSearchQuery] = useState('');

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'english' ? 'malayalam' : 'english');
  };

  const content = {
    citizenPortal: {
      english: "Citizen Portal",
      malayalam: "പൗര പോർട്ടൽ"
    },
    smartApp: {
      english: "Smart TVM App",
      malayalam: "സ്മാർട്ട് ടിവിഎം ആപ്പ്"
    }
  };

  return (
    <div className="bg-[#004E98] text-white px-4 py-3">
      <div className="max-w-7xl mx-auto">
        {/* Top Row: Search + Social Icons */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-3">
          {/* Search Bar */}
          <div className="flex-1 max-w-2xl w-full">
            <div className="flex items-center bg-white rounded-md overflow-hidden shadow-sm">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={language === 'english' ? "Search..." : "തിരയുക..."}
                className="px-4 py-2 text-gray-700 text-sm w-full outline-none"
              />
              <button className="bg-[#0066CC] px-4 py-2 hover:bg-[#0055AA] text-white transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>
            </div>
          </div>

          {/* Social Icons with more spacing */}
          <div className="flex items-center gap-4">
            <a href="#" className="p-1 hover:bg-blue-700 rounded-full transition-colors" aria-label="Facebook">
              <img src={Facebook} alt="Facebook" className="w-5 h-5" />
            </a>
            <a href="#" className="p-1 hover:bg-blue-700 rounded-full transition-colors" aria-label="Instagram">
              <img src={Instagram} alt="Instagram" className="w-5 h-5" />
            </a>
            <a href="#" className="p-1 hover:bg-blue-700 rounded-full transition-colors" aria-label="LinkedIn">
              <img src={LinkedIn} alt="LinkedIn" className="w-5 h-5" />
            </a>
            <a href="#" className="p-1 hover:bg-blue-700 rounded-full transition-colors" aria-label="Twitter">
              <img src={Twitter} alt="Twitter" className="w-5 h-5" />
            </a>
            <a href="#" className="p-1 hover:bg-blue-700 rounded-full transition-colors" aria-label="YouTube">
              <img src={Youtube} alt="YouTube" className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Bottom Row: Language Toggle + Links */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 pt-3 border-t border-blue-700">
          <div className="flex items-center gap-4">
            {/* Language Toggle */}
            <button
              onClick={toggleLanguage}
              className="flex items-center px-3 py-1.5 rounded-md bg-[#0066CC] hover:bg-[#0055AA] transition-colors text-sm"
            >
              <span className="mr-2 font-medium">
                {language === 'english' ? 'EN' : 'ML'}
              </span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
              </svg>
            </button>

            {/* Citizen Portal Link */}
            <a 
              href="#" 
              className="flex items-center px-3 py-1.5 rounded-md hover:bg-blue-700 transition-colors text-sm"
            >
              <img src={User} alt="user" className="mr-2 w-5" />
              {content.citizenPortal[language]}
            </a>
          </div>

          {/* Smart App Link */}
          <a 
            href="#" 
            className="flex items-center px-3 py-1.5 rounded-md hover:bg-blue-700 transition-colors text-sm"
          >
            <img className="mr-2 w-5" src={Phone} alt="phone" />
            <span>{content.smartApp[language]}</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;