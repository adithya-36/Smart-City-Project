import React, { useState, useEffect } from 'react';
import DownArrowIcon from '../assets/images/downArrow.png';
import MenuIcon from '../assets/images/menuIcon.png';
import CloseIcon from '../assets/images/close.png';
import SearchIcon from '../assets/images/search.png';
import Logo from '../assets/images/smart-city-logo-new.png'
const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigation = [
    { name: 'Home',
      dropdown:[
        { name: 'City Profile', href: '#' },
        { name: `What is a 'Smart City'`, href: '#' },
        { name: `About 'Smart City Mission'`, href: '#' },
        { name: 'Smart Cities Challenge', href: '#' },
        { name: 'Vision & Strategy', href: '#' },
        { name: 'Project Milestones', href: '#' },
      ],
    },
    { name: 'SCTL',
      dropdown:[
        { name: 'Creation of SPV', href: '#' },
        { name: 'Special Purpose Vehicle', href: '#' },
        { name: 'Consultant (PMC)', href: '#' },
        { name: 'Project Funds', href: '#' },
        { name: 'Financials', href: '#' },
      ],
    },
    {
      name: 'Projects',
      dropdown: [
        { name: 'Current Projects', href: '#' },
        { name: 'Completed Projects', href: '#' },
        { name: 'Upcoming Projects', href: '#' },
      ],
    },
    {
      name: 'Tenders',
      dropdown: [
        { name: 'Open Tenders', href: '#' },
        { name: 'Closed Tenders', href: '#' },
        { name: 'Tender Results', href: '#' },
      ],
    },
    { name: 'Events', href: '#' },
    { name: 'Gallery', href: '#' },
    { name: 'Downloads', href: '#' },
    { name: 'Careers', href: '#' },
    { name: 'Covid19', href: '#' },
    { name: 'Contact Us', href: '#' },
    { name: 'BI - Dashboard', href: '#' },
    { name: 'Ente Keralam', href: '#' },
  ];

  return (
    <div className={`sticky top-0 z-50 ${isScrolled ? 'shadow-md' : ''}`}>
      <div className=" mx-auto px-12 py-3 flex items-center justify-between">
        <div className="flex items-center">
          <img src={Logo} alt="" />
        </div>

        <div className="hidden lg:flex space-x-6 items-center">
          {navigation.map((item) => (
            <div
              key={item.name}
              className="relative"
              onMouseEnter={() => item.dropdown && setActiveDropdown(item.name)}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <a href={item.href || '#'} className="text-gray-700 hover:text-blue-700 font-medium text-sm flex items-center">
                {item.name}
                {item.dropdown && (
                  <img src={DownArrowIcon} alt="dropdown" className={`ml-1 w-4 h-4 transition-transform duration-200 ${activeDropdown === item.name ? 'rotate-180' : ''}`} />
                )}
              </a>
              {item.dropdown && activeDropdown === item.name && (
                <div className="absolute bg-white shadow-md rounded-md mt-2 py-2 w-48 z-10">
                  {item.dropdown.map((sub) => (
                    <a
                      key={sub.name}
                      href={sub.href}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-700"
                    >
                      {sub.name}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="flex lg:hidden items-center">
          <button className="p-2 mr-2">
            <img src={SearchIcon} alt="search" className="h-5 w-5" />
          </button>
          <button onClick={() => setMenuOpen(!menuOpen)} className="p-2">
            <img src={menuOpen ? CloseIcon : MenuIcon} alt="menu" className="h-6 w-6" />
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="lg:hidden px-4 pb-4">
          {navigation.map((item) => (
            <div key={item.name} className="py-2 border-b">
              <a href={item.href || '#'} className="block text-gray-700 font-medium">
                {item.name}
              </a>
              {item.dropdown && (
                <div className="pl-4 mt-1">
                  {item.dropdown.map((sub) => (
                    <a
                      key={sub.name}
                      href={sub.href}
                      className="block text-sm text-gray-600 py-1"
                    >
                      {sub.name}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Navbar;
