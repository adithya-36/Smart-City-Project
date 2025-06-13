import React from 'react';
import Slider from 'react-slick';
import official1 from '../assets/images/mayorTVM.jpg'; // Replace with your real images
import official2 from '../assets/images/official1.jpeg';
import official3 from '../assets/images/image1.jpg';
import '../App.css'; // To ensure slick styles apply

const HomeItem1 = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3500,
    arrows: true,
  };

  return (
    <div className="w-full bg-white">
      <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-4">
          {/* LEFT: TEXT */}
          <div className="lg:w-1/2 space-y-3">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 my-6">
              Welcome to Smart City Thiruvananthapuram Ltd.
            </h2>
            <p className="text-gray-700 leading-relaxed text-base">
              Smart City Thiruvananthapuram Limited is an Special Purpose Vehicle (SPV) set up for implementation of Smart City Mission of Government of India with a project overlay of Rs. 1538 Cr.  Thiruvananthapuram was selected in the third round of Smart City Selection and secured first rank in the Smart City Challenge in 2017.
              <br />
              The proposal submitted to GOI had 43 projects aimed at improving basic infrastructure of the city and harnessing the use of IT based solutions to make the City Smart.
              <br />
              The projects can be grouped into two categories; Pan City Solution (IT based solution) for entire corporation area and Area based development (ABD) Projects which are specifically targeted for 9 wards in the City Centre as a retrofit model.
            </p>
          </div>

          {/* RIGHT: SLIDER */}
          <div className="lg:w-1/2 mt-6 lg:mt-0">
            <div className="rounded-lg border border-gray-200 shadow-sm p-4">
              <h3 className="text-xl font-semibold text-center text-gray-800 mb-3">Top Officials Message</h3>
              <Slider {...settings}>
                <div>
                  <img
                    src={official1}
                    alt="Official 1"
                    className="w-full h-64 object-cover rounded-lg border border-gray-200 shadow-sm"
                  />
                </div>
                <div>
                  <img
                    src={official2}
                    alt="Official 2"
                    className="w-full h-64 object-cover rounded-lg border border-gray-200 shadow-sm"
                  />
                </div>
                <div>
                  <img
                    src={official3}
                    alt="Official 3"
                    className="w-full h-64 object-cover rounded-lg border border-gray-200 shadow-sm"
                  />
                </div>
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeItem1;