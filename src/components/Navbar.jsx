import React, { useState, useEffect, useRef } from 'react';
import Logo from '../assets/images/smart-city-logo-new.png';
import GovKerala from '../assets/images/govKerala.png';
import AzadiIcon from '../assets/images/azadi-ka-amrit-mahotsav.gif';
const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const bannerRef = useRef(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const navbarRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (bannerRef.current && navbarRef.current) {
        const bannerRect = bannerRef.current.getBoundingClientRect();
        const navbarHeight = navbarRef.current.offsetHeight;
        setIsScrolled(bannerRect.bottom <= navbarHeight);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigation = [
    {
      name: 'Home',
      dropdown: [
        { name: 'City Profile', href: '#' },
        { name: `What is a 'Smart City'`, href: '#' },
        { name: `About 'Smart City Mission'`, href: '#' },
        { name: 'Smart Cities Challenge', href: '#' },
        { name: 'Vision & Strategy', href: '#' },
        { name: 'Project Milestones', href: '#' },
      ],
    },
    {
      name: 'SCTL',
      dropdown: [
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
        { name: 'ABD Projects', href: '#' },
        { name: 'Pancity Projects', href: '#' },
        { name: 'Dashboard', href: '#' },
        { name: 'Ongoing Projects', href: '#' },
        { name: 'Completed and Ongoing', href: '#' },
        { name: 'SCTL Project', href: '#' },
      ],
    },
    {
      name: 'Tenders',
    },
    {
      name: 'Events',
      dropdown: [
        { name: 'AKAM 2021', href: '#' },
        { name: 'Conclave', href: '#' },
        { name: 'News', href: '#' },
        { name: 'Media Coverage', href: '#' },
        { name: '8th Anniversary of Smartcity Mission', href: '#' },
        { name: 'Inauguration', href: '#' },
      ],
    },
    {
      name: 'Gallery',
      dropdown: [
        { name: 'Photo Gallery', href: '#' },
        { name: 'Video Gallery', href: '#' },
      ],
    },
    {
      name: 'Downloads',
      dropdown: [
        { name: `Government Order's(GO's)`, href: '#' },
      ],
    },
    {
      name: 'Careers',
      dropdown: [
        { name: 'Internships', href: '#' },
        { name: 'Tulip internship', href: '#' },
      ],
    },
    {
      name: 'Covid19',
      dropdown: [
        { name: 'Dashboard', href: '#' },
        { name: 'Quick Response Team:Zone-2', href: '#' },
        { name: 'Containment Zones', href: '#' },
        { name: 'SCTL Initiatives', href: '#' },
      ],
    },
    {
      name: 'Contact Us',
      dropdown: [
        { name: 'Register a Complaint', href: '#' },
        { name: 'Poll', href: '#' },
        { name: 'RTI', href: '#' },
      ],
    },
    {
      name: 'BI - Dashboard',
      dropdown: [
        { name: 'Mosquito Density System', href: '#' },
        { name: 'Covid', href: '#' },
        { name: 'E-Mobility', href: '#' },
        { name: 'LEIP', href: '#' },
        { name: 'GIS', href: '#' },
      ],
    },
    { name: 'Ente Keralam', href: '#' },
  ];

  return (
    <div className="font-sans">
      {/* Banner Section */}
      <div ref={bannerRef} className="bg-gradient-to-r from-teal-600 to-teal-800 py-4">
        <div className="w-full mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="bg-white p-2 rounded-lg">
            <div className="h-16 w-48 bg-gray-20 flex items-center justify-center text-gray-500">
              <img src={Logo} alt="Smart city logo" />
            </div>
          </div>
          
          <div className="bg-white p-2 rounded-lg">
            <div className=" bg-gray-200 flex items-center justify-center text-gray-500">
              <img src={AzadiIcon} alt="Azadi ka amrit mahotsav" />
            </div>
          </div>
          
          <div className=" p-2 ">
            <div className=" bg-gray-200 flex items-center justify-center ">
              <img src={GovKerala} alt="Govt of kerala" />
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Bar */}
      <div 
        ref={navbarRef}
        className={`w-full min-h-[60px] transition-all duration-300 z-50 ${
          isScrolled 
            ? 'fixed top-0 shadow-lg bg-blue-800' 
            : 'sticky top-0 bg-blue-700'
        }`}
      >
        <div className="max-w-full mx-auto px-4 py-2 flex items-center justify-between">
          {/* Desktop Menu */}
          <div className="hidden lg:flex space-x-1 items-center overflow-visible">
            {navigation.map((item) => (
              <div
                key={item.name}
                className="relative"
                onMouseEnter={() => item.dropdown && setActiveDropdown(item.name)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <a
                  href={item.href || '#'}
                  className="text-white hover:text-yellow-300 font-medium text-base flex items-center px-4 py-2 rounded-lg transition-colors duration-200 whitespace-nowrap"
                >
                  {item.name}
                  {item.dropdown && (
                    <svg 
                      className={`ml-1 w-4 h-4 transition-transform duration-200 ${activeDropdown === item.name ? 'rotate-180' : ''}`}
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  )}
                </a>
                {item.dropdown && activeDropdown === item.name && (
                  <div className="absolute left-0 mt-1 bg-blue-600 text-white shadow-xl rounded-lg py-2 w-56 z-50 border border-blue-500">
                    {item.dropdown.map((sub) => (
                      <a
                        key={sub.name}
                        href={sub.href}
                        className="block px-4 py-2 text-md text-white hover:bg-blue-500 hover:text-yellow-200 transition-colors duration-150"
                      >
                        {sub.name}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="p-2 rounded-lg bg-blue-600 hover:bg-blue-500 transition-colors duration-200"
            >
              {menuOpen ? (
                <svg className="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown */}
        {menuOpen && (
          <div className="lg:hidden px-4 pb-4 bg-blue-600">
            {navigation.map((item) => (
              <div key={item.name} className="py-2 border-b border-blue-500">
                <div className="flex justify-between items-center">
                  <a
                    href={item.href || '#'}
                    className="block text-white font-medium text-base py-2 pl-2 rounded-lg"
                  >
                    {item.name}
                  </a>
                  {item.dropdown && (
                    <button 
                      onClick={() => setActiveDropdown(activeDropdown === item.name ? null : item.name)}
                      className="p-1 text-white"
                    >
                      <svg 
                        className={`w-5 h-5 transition-transform ${activeDropdown === item.name ? 'rotate-180' : ''}`}
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                  )}
                </div>
                {item.dropdown && activeDropdown === item.name && (
                  <div className="pl-4 mt-1">
                    {item.dropdown.map((sub) => (
                      <a
                        key={sub.name}
                        href={sub.href}
                        className="block text-sm text-blue-100 py-2 pl-2 rounded-lg hover:bg-blue-500 hover:text-white"
                      >
                        {sub.name}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}

            {/* Mobile Search Bar */}
            <div className="mt-4 flex items-center bg-white rounded-lg overflow-hidden">
              <input
                type="text"
                placeholder="Search..."
                className="px-4 py-2 text-gray-700 text-base w-full outline-none"
              />
              <button className="bg-blue-600 px-4 py-2 hover:bg-blue-500 text-white">
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;