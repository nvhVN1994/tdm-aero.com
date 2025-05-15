import React from 'react';
import Breadcrumb from '../components/Breadcrumb';
import Footer from '../components/Footer';
import About1 from '../assets/images/About/About1.jpg';
import About2 from '../assets/images/About/About2.JPG';
import MapChart from '../assets/images/About/MapChart.png';
import About3 from '../assets/images/About/About3.jpg';
import About4 from '../assets/images/About/About4.jpg';
export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white text-black font-['Roboto_Condensed']">
     

      <main className="pt-[115px]"> {/* Giữ khoảng cách với NavBar fixed */}
        <Breadcrumb />

        <h2 className="text-center text-2xl xl:text-[38px] font-medium mb-8 mt-8">
          ABOUT OUR COMPANY
        </h2>

        {/* Section 1: History */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
          <img
            src={About1}
            alt="photoAbout1"
            className="w-full h-full object-cover"
          />
          <div className="bg-[#006D76] text-white p-6 md:p-12 flex items-center">
            <div>
              <h3 className="text-lg font-semibold mb-2 xl:text-[22px] xl:font-bold xl:mb-4">HISTORY</h3>
              <p className="text-sm xl:text-[18px] leading-relaxed  ">
                Founded in 2016, TDM Aero is a trusted partner in the aerospace
                industry, providing comprehensive support solutions for
                commercial airlines, private jet operators, and military
                organizations across Asia and beyond.
              </p>
            </div>
          </div>
        </div>

        {/* Section 2: Experience */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
          <div className="bg-[#006D76] text-white p-6 md:p-12 flex items-center">
            <div>
              <h3 className="text-lg font-semibold mb-2 xl:text-[22px] xl:font-bold xl:mb-4">EXPERIENCE</h3>
              <p className="text-sm xl:text-[18px] leading-relaxed">
                With a strong foundation built on technical expertise, customer
                service excellence, and a wide-reaching network, TDM Aero has
                become a preferred supplier of aircraft parts, systems, and
                services. Our deep understanding of the aviation sector allows
                us to respond swiftly to our clients’ operational needs,
                delivering customized solutions that ensure reliability, safety,
                and mission readiness.
              </p>
            </div>
          </div>
          <img
            src={About2}
            alt="photoAbout2"
            className="w-full h-full object-cover"
          />
        </div>

                {/* Section 3: Mission */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
          
          <img
            src={About3}  
            alt="photoAbout3"
            className="w-full h-full object-cover"
          />
          <div className="bg-[#006D76] text-white p-6 md:p-12 flex items-center">
            <div>
              <h3 className="text-lg font-semibold mb-2 xl:text-[22px] xl:font-bold xl:mb-4">MISSION</h3>
              <p className="text-sm xl:text-[18px] leading-relaxed">
                Our team is committed to supporting customers throughout the entire product lifecycle — 
                from initial sourcing and procurement to aftermarket support. Whether it’s servicing commercial fleets, executive aircraft, or military platforms, 
                TDM Aero is dedicated to keeping your operations flying at peak performance.
              </p>
            </div>
          </div>
        </div>

        {/* Section 4: Values */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
          <div className="bg-[#006D76] text-white p-6 md:p-12 flex items-center">
            <div>
              <h3 className="text-lg font-semibold mb-2 xl:text-[22px] xl:font-bold xl:mb-4">VALUES</h3>
              <p className="text-sm xl:text-[18px] leading-relaxed">
                At TDM Aero, we believe that strong partnerships drive success. We are proud to work alongside world-class OEMs, MROs, and aerospace manufacturers 
                to bring the best technologies and solutions to our clients.
              </p>
            </div>
          </div>
          <img
            src={About4}
            alt="photoAbout4"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Section 5: Our Global Presence */}
        <div className="bg-white text-center px-4 py-10">
          <h3 className="text-lg font-semibold mt-2 xl:text-[30px] xl:font-bold xl:mt-4 px-4 py-1">
            OUR GLOBAL PRESENCE
          </h3>
          <div className="mt-8 flex justify-center">
            <img
              src={MapChart}
            alt="Map Chart"
              className="w-full max-w-[1240px] object-contain"
            />
          </div>
        </div>

      </main>
      <Footer />
    </div>
  );
}
