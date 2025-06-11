import React, { useEffect, useState } from 'react';
import Logo from '../assets/images/smart-city-logo-new.png';

const Footer = () => {
  const [dateTime, setDateTime] = useState({
    date: '',
    time: '',
    day: '',
  });

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

      const date = `${now.getFullYear()}-${(now.getMonth() + 1)
        .toString()
        .padStart(2, '0')}-${now.getDate().toString().padStart(2, '0')}`;

      const time = `${now.getHours().toString().padStart(2, '0')}:${now.getMinutes()
        .toString()
        .padStart(2, '0')}:${now.getSeconds().toString().padStart(2, '0')}`;

      const day = days[now.getDay()];
      setDateTime({ date, time, day });
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className='bg-[#004E98] text-white px-6 py-8 w-full mt-auto'>
      <div className='grid grid-cols-1 md:grid-cols-4 gap-8 max-w-6xl mx-auto'>
        {/* CONTACT US */}
        <div>
          <p className='text-lg font-bold mb-4 border-b border-blue-300 pb-2 uppercase'>Contact Us</p>
          <ul className='text-sm space-y-2'>
            <li className='flex items-start'>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 mt-0.5 text-blue-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <div>
                <p>4th Floor, Felicity Square Building</p>
                <p>Opp AG Office, Statue</p>
                <p>Thiruvananthapuram</p>
                <p>Pincode: 695001</p>
              </div>
            </li>
            <li className='flex items-center mt-3'>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-blue-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span>+91 - 0471 - 4010374</span>
            </li>
            <li className='flex items-center mt-3'>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-blue-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <span>info@smartcitytvm.in</span>
            </li>
          </ul>
        </div>

        {/* INFO LINKS */}
        <div>
          <p className='text-lg font-bold mb-4 border-b border-blue-300 pb-2 uppercase'>Need More Info?</p>
          <div className='grid grid-cols-2 gap-4'>
            <ul className='text-sm space-y-2'>
              <li className='hover:text-blue-200 transition-colors cursor-pointer'>Meeting Agendas</li>
              <li className='hover:text-blue-200 transition-colors cursor-pointer'>City Calendar</li>
              <li className='hover:text-blue-200 transition-colors cursor-pointer'>Accessibility</li>
              <li className='hover:text-blue-200 transition-colors cursor-pointer'>E-Government Policy</li>
              <li className='hover:text-blue-200 transition-colors cursor-pointer'>Sitemap</li>
            </ul>
            <ul className='text-sm space-y-2'>
              <li className='hover:text-blue-200 transition-colors cursor-pointer'>Terms and Conditions</li>
              <li className='hover:text-blue-200 transition-colors cursor-pointer'>Copyright policy</li>
              <li className='hover:text-blue-200 transition-colors cursor-pointer'>Privacy Policy</li>
              <li className='hover:text-blue-200 transition-colors cursor-pointer'>Disclaimer</li>
              <li className='hover:text-blue-200 transition-colors cursor-pointer'>FAQ</li>
            </ul>
          </div>
        </div>

        {/* EMPLOYEE LINKS */}
        <div>
          <p className='text-lg font-bold mb-4 border-b border-blue-300 pb-2 uppercase'>Employees</p>
          <ul className='text-sm space-y-2'>
            <li className='hover:text-blue-200 transition-colors cursor-pointer'>Access eWay</li>
            <li className='hover:text-blue-200 transition-colors cursor-pointer'>Access eWay w/MFA</li>
            <li className='hover:text-blue-200 transition-colors cursor-pointer'>Code of Ethics</li>
            <li className='hover:text-blue-200 transition-colors cursor-pointer'>Tenders</li>
            <li className='hover:text-blue-200 transition-colors cursor-pointer'>Gallery</li>
          </ul>
        </div>

        {/* DATE TIME & LOGO */}
        <div className='flex flex-col justify-between'>
          <div className='bg-blue-900/30 p-4 rounded-lg mb-6'>
            <p className='font-semibold mb-2 text-blue-200'>Current Status:</p>
            <div className='text-sm space-y-1'>
              <p className='flex justify-between'>
                <span className='text-blue-100'>Date:</span> 
                <span className='font-mono'>{dateTime.date}</span>
              </p>
              <p className='flex justify-between'>
                <span className='text-blue-100'>Time:</span> 
                <span className='font-mono'>{dateTime.time}</span>
              </p>
              <p className='flex justify-between'>
                <span className='text-blue-100'>Day:</span> 
                <span className='font-mono'>{dateTime.day}</span>
              </p>
            </div>
          </div>
          
          <div className='flex justify-center'>
            <img 
              src={Logo} 
              alt="Smart City Trivandrum Logo" 
              className='max-w-[180px] opacity-90 hover:opacity-100 transition-opacity' 
            />
          </div>
        </div>
      </div>

      {/* COPYRIGHT */}
      <div className='mt-8 pt-6 border-t border-blue-700 text-center text-sm text-blue-200'>
        <p>© {new Date().getFullYear()} Smart City Trivandrum. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;