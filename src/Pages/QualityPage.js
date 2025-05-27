import React from 'react';
import Breadcrumb from '../components/Breadcrumb';
import Footer from '../components/Footer';
import Qu1 from '../assets/images/About/Quality/Qu1.png';
import Qu2 from '../assets/images/About/Quality/Qu2.png';
import Qu3 from '../assets/images/About/Quality/Qu3.png';

export default function QualityPage() {
  return (
    <div className="min-h-screen bg-white text-black font-['Roboto_Condensed']">
     

      <main className="pt-[115px]"> {/* Giữ khoảng cách với NavBar fixed */}
        <Breadcrumb />

        <div className="bg-white text-center py-8 px-4 text-black">
  <h1 className="text-2xl sm:text-3xl lg:text-4xl font-medium uppercase mb-2">
    QUALITY ASSURANCE & COMPLIANCE
  </h1>

  <p className="max-w-5xl mx-auto text-xl font-medium sm:text-base leading-relaxed mt-4">
   At TDM Aero, quality is at the core of everything we do. We ensure that every part we supply is fully traceable, 
   certified, and compliant with the highest global aviation and defense standards.
  </p>
</div>

        {/* Section 1: History */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
          <img
            src={Qu1}
            alt="photoAbout1"
            className="w-full h-full object-cover"
          />
          <div className="bg-[#006D76] text-black p-6 md:p-12 flex items-center">
            <div>
              <h3 className="text-lg font-semibold mb-2 xl:text-[22px] xl:font-bold xl:mb-4">CERTIFICATIONS & TRACEABILITY</h3>
              <p className="text-sm xl:text-[18px] leading-relaxed  ">
                All components are delivered with proper documentation, including FAA 8130-3, EASA Form One, or an OEM Certificate of 
                Conformity — ensuring full traceability back to birth. This guarantees our customers receive authentic, airworthy parts 
                with complete regulatory compliance.
              </p>
            </div>
          </div>
        </div>

        {/* Section 2: Experience */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
          <div className="bg-[#006D76] text-black p-6 md:p-12 flex items-center">
            <div>
              <h3 className="text-lg font-semibold mb-2 xl:text-[22px] xl:font-bold xl:mb-4">OPERATIONAL STANDARDS</h3>
              <p className="text-sm xl:text-[18px] leading-relaxed">
                Our distribution and operations are structured in accordance with ISO 9001 quality management principles, 
                ensuring consistent performance, continuous improvement, and customer satisfaction at every stage.

              </p>
            </div>
          </div>
          <img
            src={Qu2}
            alt="photoAbout2"
            className="w-full h-full object-cover"
          />
        </div>

                {/* Section 3: Mission */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
          
          <img
            src={Qu3}  
            alt="photoAbout3"
            className="w-full h-full object-cover"
          />
          <div className="bg-[#006D76] text-black p-6 md:p-12 flex items-center">
            <div>
              <h3 className="text-lg font-semibold mb-2 xl:text-[22px] xl:font-bold xl:mb-4">AEROSPACE PACKAGING COMPLIANCE</h3>
              <div className="text-sm xl:text-[18px] leading-relaxed space-y-2">
  <p className="pl-0">
    We follow strict aviation and defense packaging protocols to protect the integrity of every part during transit. Key standards include:
  </p>
  <p className="pl-6">• ATA Spec 300 – Airline-specific packaging standard for durability and protection</p>
  <p className="pl-6">• MIL-STD-2073-1 – U.S. military standard for packaging of defense-related equipment</p>
  <p className="pl-6">• ASTM D-999 – Vibration testing standards for shipping containers</p>
  <p className="pl-6">• Lockheed Martin Packaging Guidelines – For precise labeling, handling, and aerospace component protection</p>
  <p className="pl-0">
    These packaging measures reduce the risk of damage, support compliance with global regulations, and ensure parts arrive mission-ready.
  </p>
</div>
            </div>
          </div>
        </div>

               
      </main>
      <Footer />
    </div>
  );
}
