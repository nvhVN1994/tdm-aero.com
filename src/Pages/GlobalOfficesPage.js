import React from 'react';
import Breadcrumb from '../components/Breadcrumb';
import Footer from '../components/Footer';
import MapChart from '../assets/images/About/MapChart.png';
export default function GlobalOfficesPage() {
  return (
    <div className="min-h-screen bg-white text-black font-['Roboto_Condensed']">
      

      <main className="pt-[115px]"> {/* Giữ khoảng cách với NavBar fixed */}
        <Breadcrumb />

        <h2 className="text-center text-2xl xl:text-4xl font-medium mb-8 mt-8">
        </h2>

   
        <div className="bg-white text-center px-4 py-10">
          <h3 className="text-lg font-semibold mt-2 xl:text-[15px] xl:font-bold xl:mt-4 px-4 py-1">
            VIETNAM (HEADQUARTERS): + 84 38 636 073                                   
        <div className="bg-white text-center px-4 py-1"></div>
            NEW ZEALAND: + 64 210 275 7289
        <div className="bg-white text-center px-4 py-1"></div>
            AUSTRLIA: 
        <div className="bg-white text-center px-4 py-1"></div>
            MALAYSIA: 
        <div className="bg-white text-center px-4 py-1"></div>
            GERMANY: 
          </h3>
          <div className="mt -1 flex justify-center">
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
