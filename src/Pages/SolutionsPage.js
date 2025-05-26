import React from 'react';
import Breadcrumb from '../components/Breadcrumb';
import Footer from '../components/Footer';
import So1 from '../assets/images/WhatWeDo/Solution/So1.png';
import So2 from '../assets/images/WhatWeDo/Solution/So2.png';
import So3 from '../assets/images/WhatWeDo/Solution/So3.png';
import So4 from '../assets/images/WhatWeDo/Solution/So4.png';

export default function SolutionsPage() {
  return (
    <div className="min-h-screen bg-white text-black font-['Roboto_Condensed']">
     

      <main className="pt-[115px]"> {/* Giữ khoảng cách với NavBar fixed */}
        <Breadcrumb />

        <div className="bg-white text-center py-8 px-4 text-black">
  <h1 className="text-2xl sm:text-3xl lg:text-4xl font-medium uppercase mb-2">
    Solutions
  </h1>

  <p className="max-w-5xl mx-auto text-xl font-medium sm:text-base leading-relaxed mt-4">
   TDM Aero has significant industry experience, market knowledge and technical understanding to meet the expectations 
   of both our customers and the OEMs. Our approach is strategically designed to satisfy these needs and results in personalized 
   solutions for our customers.
  </p>
</div>

        {/* Section 1: History */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
          <img
            src={So1}
            alt="photoAbout1"
            className="w-full h-full object-cover"
          />
          <div className="bg-[#006D76] text-black p-6 md:p-12 flex items-center">
            <div>
              <h3 className="text-lg font-semibold mb-2 xl:text-[22px] xl:font-bold xl:mb-4">DISTRIBUTION</h3>
              <p className="text-sm xl:text-[18px] leading-relaxed  ">
                TDM Aero is a trusted distributor of mission-critical equipment for Search & Rescue (SAR), defense, 
                and special operations aviation programs worldwide. We supply and support advanced systems designed to 
                enhance safety, visibility, and operational effectiveness across a wide range of aircraft platforms.
              </p>
            </div>
          </div>
        </div>

        {/* Section 2: Experience */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
          <div className="bg-[#006D76] text-black p-6 md:p-12 flex items-center">
            <div>
              <h3 className="text-lg font-semibold mb-2 xl:text-[22px] xl:font-bold xl:mb-4">SEARCH & RESCUE EQUIPMENT SUPPLY</h3>
              <p className="text-sm xl:text-[18px] leading-relaxed">
                We provide a comprehensive range of SAR equipment including searchlights, landing lights, loudspeakers, 
                hoist rescue systems, and tactical parachutes — all sourced from leading global manufacturers.

              </p>
            </div>
          </div>
          <img
            src={So2}
            alt="photoAbout2"
            className="w-full h-full object-cover"
          />
        </div>

                {/* Section 3: Mission */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
          
          <img
            src={So3}  
            alt="photoAbout3"
            className="w-full h-full object-cover"
          />
          <div className="bg-[#006D76] text-black p-6 md:p-12 flex items-center">
            <div>
              <h3 className="text-lg font-semibold mb-2 xl:text-[22px] xl:font-bold xl:mb-4">NIGHT VISION & SYSTEMS INTEGRATION</h3>
              <p className="text-sm xl:text-[18px] leading-relaxed">
                Our distribution capability extends to military-grade Night Vision Goggles (NVGs) and the integration of these systems into 
                rotary and fixed-wing aircraft. We work closely with operators and OEMs to ensure seamless compatibility and mission readiness.
              </p>
            </div>
          </div>
        </div>

        {/* Section 4: Values */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
          <div className="bg-[#006D76] text-black p-6 md:p-12 flex items-center">
            <div>
              <h3 className="text-lg font-semibold mb-2 xl:text-[22px] xl:font-bold xl:mb-4">GLOBAL PROJECT SUPPORT</h3>
              <p className="text-sm xl:text-[18px] leading-relaxed">
                From initial sourcing to end-user delivery, TDM Aero supports SAR and defense projects across multiple regions.
                 Our team ensures technical alignment, export compliance, and full lifecycle support — helping operators execute critical 
                 missions safely and effectively.
              </p>
            </div>
          </div>
          <img
            src={So4}
            alt="photoAbout4"
            className="w-full h-full object-cover"
          />
        </div>

       
      </main>
      <Footer />
    </div>
  );
}
