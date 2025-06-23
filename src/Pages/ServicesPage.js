import React from 'react';
import Breadcrumb from '../components/Breadcrumb';
import Footer from '../components/Footer';
import Se1 from '../assets/images/WhatWeDo/Ser/Se1.png';
import Se2 from '../assets/images/WhatWeDo/Ser/Se2.jpg';

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-white text-black font-['Roboto_Condensed']">
     

      <main className="pt-[115px]"> {/* Giữ khoảng cách với NavBar fixed */}
        <Breadcrumb />

        <div className="bg-white text-center py-8 px-4 text-black">
  <h1 className="text-2xl sm:text-3xl lg:text-4xl font-medium uppercase mb-2">
    Services
  </h1>

  <p className="max-w-5xl mx-auto text-xl font-medium sm:text-base leading-relaxed mt-4">
   TDM Aero’s in-house repair shop specializes in the repair and overhaul of today’s modern military aircraft components.
    Our extensive knowledge enables S3 to provide solutions that allow our customers to keep operational costs low, maintain reliability and fleet commonality.
  </p>
</div>

        {/* Section 1: History */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
          <img
            src={Se1}
            alt="Se1"
            className="w-full h-full object-cover"
          />
          <div className="bg-[#006D76] text-black p-6 md:p-12 flex items-center">
            <div>
              <h3 className="text-lg font-semibold mb-2 xl:text-[22px] xl:font-bold xl:mb-4">REPAIR MANAGEMENT</h3>
              <p className="text-sm xl:text-[18px] leading-relaxed  ">
                TDM Aero offers comprehensive repair management services to support aircraft components throughout their lifecycle. 
                We work with a global network of certified MRO (Maintenance, Repair & Overhaul) facilities to coordinate fast, reliable, 
                and cost-effective repairs for both commercial and military platforms.
              </p>
            </div>
          </div>
        </div>

        {/* Section 2: Experience */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
          <div className="bg-[#006D76] text-black p-6 md:p-12 flex items-center">
            <div>
              <h3 className="text-lg font-semibold mb-2 xl:text-[22px] xl:font-bold xl:mb-4">OUR SERVICES INCLUDE:</h3>
              <div className="text-sm xl:text-[18px] leading-relaxed space-y-2">
  <p className="pl-6">• Evaluation and routing of unserviceable components</p>
  <p className="pl-6">• Coordination with OEM-approved or authorized MRO partners</p>
  <p className="pl-6">• Transparent repair status updates and cost tracking</p>
  <p className="pl-6">• Return of fully certified, airworthy components with FAA/EASA documentation</p>
  <p className="pl-0">
    By managing the repair process from end to end, TDM Aero helps minimize downtime,
    reduce maintenance costs, and extend the service life of critical systems.
  </p>
</div>


            </div>
          </div>
          <img
            src={Se2}
            alt="Se2"
            className="w-full h-full object-cover"
          />
        </div>

                {/* Section 3: Mission */}
        
       
      </main>
      <Footer />
    </div>
  );
}
