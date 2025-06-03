import React from 'react';
import Breadcrumb from '../components/Breadcrumb';
import Footer from '../components/Footer';
import ESG1 from '../assets/images/ESG/ESG1.png';
import ESG2 from '../assets/images/ESG/ESG2.png';
import ESG3 from '../assets/images/ESG/ESG3.png';
import ESG4 from '../assets/images/ESG/ESG4.jpg';

export default function SparesPage() {
  return (
    <div className="min-h-screen bg-white text-black font-['Roboto_Condensed']">
     

      <main className="pt-[115px]"> {/* Giữ khoảng cách với NavBar fixed */}
        <Breadcrumb />

        <div className="bg-white text-center py-8 px-4 text-black">
  <h1 className="text-2xl sm:text-3xl lg:text-4xl font-medium uppercase mb-2">
    ESG Commitment
  </h1>

  <p className="max-w-5xl mx-auto text-xl font-medium sm:text-base leading-relaxed mt-4">
   We are dedicated to upholding strong Environmental, Social, and Governance (ESG) standards across all our aerospace and defense operations. 
   Our commitment to responsible business practices helps us contribute to a more sustainable and ethical global aviation ecosystem.
  </p>
</div>

        {/* Section 1: History */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
          <img
            src={ESG1}
            alt="ESG1"
            className="w-full h-full object-cover"
          />
          <div className="bg-[#006D76] text-black p-6 md:p-12 flex items-center">
            <div>
              <h3 className="text-lg font-semibold mb-2 xl:text-[22px] xl:font-bold uppercase xl:mb-4">Environmental Responsibility</h3>
              <div className="text-sm xl:text-[18px] leading-relaxed text-black space-y-4">
  <p>
    We actively reduce our environmental impact by:
  </p>

  <ul className="list-disc pl-6 space-y-1">
    <li>
      Partnering with eco-conscious manufacturers
    </li>
    <li>
      Reducing waste and promoting recycling 
    </li>
    <li>
      Improving energy efficiency across logistics and operations
    </li>
  </ul>

  
</div>
            </div>
          </div>
        </div>

        {/* Section 2: Experience */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
          <div className="bg-[#006D76] text-black p-6 md:p-12 flex items-center">
            <div>
              <h3 className="text-lg font-semibold mb-2 xl:text-[22px] xl:font-bold uppercase xl:mb-4">Social Responsibility</h3>
              <div className="text-sm xl:text-[18px] leading-relaxed text-black space-y-4">
  <p>
    We value people and communities through:
  </p>

  <ul className="list-disc pl-6 space-y-1">
    <li>
      Ensuring fair labor and ethical sourcing
    </li>
    <li>
      Promoting diversity, equity, and inclusion 
    </li>
    <li>
      Supporting aerospace education and outreach programs
    </li>
  </ul>

  </div>
            </div>
          </div>
          <img
            src={ESG2}
            alt="ESG2"
            className="w-full h-full object-cover"
          />
        </div>

                {/* Section 3: Mission */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
          
          <img
            src={ESG3}  
            alt="photoAbout3"
            className="w-full h-full object-cover"
          />
          <div className="bg-[#006D76] text-black p-6 md:p-12 flex items-center">
            <div>
              <h3 className="text-lg font-semibold mb-2 xl:text-[22px] xl:font-bold uppercase xl:mb-4">Governance & Compliance</h3>
               <div className="text-sm xl:text-[18px] leading-relaxed text-black space-y-4">
  <p>
    We maintain high standards of integrity by:
  </p>

  <ul className="list-disc pl-6 space-y-1">
    <li>
      Complying with global aviation and defense regulations
    </li>
    <li>
      Enforcing strict anti-corruption and ethical policies 
    </li>
    <li>
      Protecting data through robust cybersecurity practices
    </li>
  </ul>

  </div>
            </div>
          </div>
        </div>

        {/* Section 4: Values */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
          <div className="bg-[#006D76] text-black p-6 md:p-12 flex items-center">
            <div>
              <h3 className="text-lg font-semibold mb-2 xl:text-[22px] xl:font-bold uppercase xl:mb-4">Driving ESG Forward</h3>
              <div className="text-sm xl:text-[18px] leading-relaxed text-black space-y-4">
  <p>
    TDM Aero continues to:
  </p>

  <ul className="list-disc pl-6 space-y-1">
    <li>
      Implement sustainable procurement practices
    </li>
    <li>
      Collaborate on green industry initiatives 
    </li>
    <li>
      Conduct regular compliance reviews and audits
    </li>
  </ul>

  </div>
            </div>
          </div>
          <img
            src={ESG4}
            alt="photoAbout4"
            className="w-full h-full object-cover"
          />
        </div>

       
      </main>
      <Footer />
    </div>
  );
}
