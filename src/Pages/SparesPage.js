import React from 'react';
import Breadcrumb from '../components/Breadcrumb';
import Footer from '../components/Footer';
import Sp1 from '../assets/images/WhatWeDo/Spares/Sp1.png';

export default function SparesPage() {
  return (
    <div className="min-h-screen bg-white text-black font-['Roboto_Condensed']">
     

      <main className="pt-[115px]"> {/* Giữ khoảng cách với NavBar fixed */}
        <Breadcrumb />

        <div className="bg-white text-center py-8 px-4 text-black">
  <h1 className="text-2xl sm:text-3xl lg:text-4xl font-medium uppercase mb-2">
    Spares
  </h1>

  <p className="max-w-5xl mx-auto text-xl font-medium sm:text-base leading-relaxed mt-4">
   TDM Aero core business strategy revolves around offering our customers high-quality spare parts at a competitive price. 
   All spares are accompanied by full documentation and world-class customer support throughout the entire purchasing experience and beyond.
    S3 carries the expertise, relevant networks, technical knowledge, and reach required to provide comprehensive spare part solutions 
    to military operators, maintenance facilities, repair stations, and numerous brokers and distributors around the world.
  </p>
</div>

        {/* Section 1: History */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
          <img
            src={Sp1}
            alt="photoAbout1"
            className="w-full h-full object-cover"
          />
          <div className="bg-[#006D76] text-white p-6 md:p-12 flex items-center">
            <div>
              <h3 className="text-lg font-semibold mb-2 xl:text-[22px] xl:font-bold xl:mb-4">SPARES SUPPORT</h3>
              <p className="text-sm xl:text-[18px] leading-relaxed  ">
                TDM Aero specializes in the global sourcing and distribution of high-quality aerospace parts, supporting commercial,
                 business, and military aviation fleets with speed, accuracy, and reliability. With a strong network of OEMs, MROs, 
                 and trusted supply chain partners, we ensure your aircraft stay mission-ready and operational at all times.
              </p>
            </div>
          </div>
        </div>

        {/* Section 2: Experience */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
          <div className="bg-[#006D76] text-white p-6 md:p-12 flex items-center">
            <div>
              <h3 className="text-lg font-semibold mb-2 xl:text-[22px] xl:font-bold xl:mb-4">OBSOLETE PARTS SOURCING</h3>
              <p className="text-sm xl:text-[18px] leading-relaxed">
                In today’s global environment, trade restrictions, supply chain disruptions, and post-COVID impacts have made locating
                 hard-to-find and obsolete parts even more challenging. Therefore, TDM Aero helps operators extend the life of legacy 
                 aircraft and systems by locating critical components that are no longer in regular production. We ensure all sourced 
                 parts are fully certified with proper traceability and compliance to FAA, EASA, or OEM standards, by leveraging our 
                 global supplier network and technical expertise.
If others can’t find it — we usually can.

              </p>
            </div>
          </div>
          <img
            src={Sp1}
            alt="photoAbout2"
            className="w-full h-full object-cover"
          />
        </div>

                {/* Section 3: Mission */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
          
          <img
            src={Sp1}  
            alt="photoAbout3"
            className="w-full h-full object-cover"
          />
          <div className="bg-[#006D76] text-white p-6 md:p-12 flex items-center">
            <div>
              <h3 className="text-lg font-semibold mb-2 xl:text-[22px] xl:font-bold xl:mb-4">OEM PARTS DISTRIBUTION</h3>
              <p className="text-sm xl:text-[18px] leading-relaxed">
                TDM Aero partners directly with Original Equipment Manufacturers to supply certified, factory-new components. 
                Our distribution agreements allow us to deliver authentic parts with full traceability and technical support — 
                ensuring safety, compliance, and peace of mind for your operations.
              </p>
            </div>
          </div>
        </div>

        {/* Section 4: Values */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
          <div className="bg-[#006D76] text-white p-6 md:p-12 flex items-center">
            <div>
              <h3 className="text-lg font-semibold mb-2 xl:text-[22px] xl:font-bold xl:mb-4">PMA PARTS DISTRIBUTION</h3>
              <p className="text-sm xl:text-[18px] leading-relaxed">
                As part of our cost-effective support solutions, we offer FAA- and EASA-approved PMA (Parts Manufacturer Approval) alternatives. 
                These parts meet rigorous quality standards and offer significant savings without compromising performance, making them a smart 
                choice for many operators seeking long-term value.
              </p>
            </div>
          </div>
          <img
            src={Sp1}
            alt="photoAbout4"
            className="w-full h-full object-cover"
          />
        </div>

       
      </main>
      <Footer />
    </div>
  );
}
