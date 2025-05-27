import React from 'react';
import Breadcrumb from '../components/Breadcrumb';
import Footer from '../components/Footer';
import Lo1 from '../assets/images/WhatWeDo/Lo/Lo1.png';
import Lo2 from '../assets/images/WhatWeDo/Lo/Lo2.png';
import Lo3 from '../assets/images/WhatWeDo/Lo/Lo3.png';
import Lo4 from '../assets/images/WhatWeDo/Lo/Lo4.png';

export default function LogisticsAndDeliveryPage() {
  return (
    <div className="min-h-screen bg-white text-black font-['Roboto_Condensed']">
     

      <main className="pt-[115px]"> {/* Giữ khoảng cách với NavBar fixed */}
        <Breadcrumb />

        <div className="bg-white text-center py-8 px-4 text-black">
  <h1 className="text-2xl sm:text-3xl lg:text-4xl font-medium uppercase mb-2">
    Logistics & Delivery
  </h1>

  <p className="max-w-5xl mx-auto text-xl font-medium sm:text-base leading-relaxed mt-4">
   
     </p>
</div>

        {/* Section 1: History */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
          <img
            src={Lo1}
            alt="Lo1"
            className="w-full h-full object-cover"
          />
          <div className="bg-[#006D76] text-white p-6 md:p-12 flex items-center">
            <div>
              <h3 className="text-lg font-semibold mb-2 xl:text-[22px] xl:font-bold xl:mb-4">LOGISTICS SUPPORT</h3>
              <p className="text-sm xl:text-[18px] leading-relaxed  ">
                At TDM Aero, we provide complete logistics solutions to ensure that every part, system, or component reaches our customers safely, 
                on time, and in full compliance with regulatory requirements. Our team handles the complex processes behind the scenes so our clients 
                can focus on operations.
              </p>
            </div>
          </div>
        </div>

        {/* Section 2: Experience */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
          <div className="bg-[#006D76] text-white p-6 md:p-12 flex items-center">
            <div>
              <h3 className="text-lg font-semibold mb-2 xl:text-[22px] xl:font-bold xl:mb-4">CUSTOMS HANDLING & IMPORT/EXPORT</h3>
              <p className="text-sm xl:text-[18px] leading-relaxed">
                We manage all aspects of customs clearance and import/export operations, ensuring smooth cross-border 
                movement of aviation and defense equipment. Our experience with international shipping regulations allows us to navigate 
                documentation, tariffs, and compliance efficiently.

              </p>
            </div>
          </div>
          <img
            src={Lo2}
            alt="Lo2"
            className="w-full h-full object-cover"
          />
        </div>

                {/* Section 3: Mission */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
          
          <img
            src={Lo3}  
            alt="Lo3"
            className="w-full h-full object-cover"
          />
          <div className="bg-[#006D76] text-white p-6 md:p-12 flex items-center">
            <div>
              <h3 className="text-lg font-semibold mb-2 xl:text-[22px] xl:font-bold xl:mb-4">EXPORT PERMIT APPLICATIONS</h3>
              <p className="text-sm xl:text-[18px] leading-relaxed">
                For controlled or military-grade items, we support clients by preparing and submitting export permit applications, 
                coordinating with local and international authorities to ensure legal and timely approval.
              </p>
            </div>
          </div>
        </div>

        {/* Section 4: Values */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
          <div className="bg-[#006D76] text-white p-6 md:p-12 flex items-center">
            <div>
              <h3 className="text-lg font-semibold mb-2 xl:text-[22px] xl:font-bold xl:mb-4">DELIVERY TO DOOR</h3>
              <p className="text-sm xl:text-[18px] leading-relaxed">
                We offer door-to-door delivery services, coordinating with freight and logistics partners to ensure parts and equipment 
                arrive safely at the final destination — whether it's a hangar, airbase, or repair facility.
TDM Aero combines aviation expertise with logistical precision to ensure that the right products arrive where and when 
they’re needed — no delays, no compliance issues.

              </p>
            </div>
          </div>
          <img
            src={Lo4}
            alt="Lo4"
            className="w-full h-full object-cover"
          />
        </div>

       
      </main>
      <Footer />
    </div>
  );
}
