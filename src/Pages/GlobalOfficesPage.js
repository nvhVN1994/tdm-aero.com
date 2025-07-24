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
            VIETNAM (HEADQUARTERS): Nguyen Huu Truong +84 38 636 073/ sales@tdmgroup.vn                                  
        <div className="bg-white text-center px-4 py-1"></div>
            NEW ZEALAND: Brett Waghorn +64 274 798 096/ brett@tdmgroup.vn
        <div className="bg-white text-center px-4 py-1"></div>
            AUSTRLIA: Chloe Nguyen +61 423 488 044/ chloe@tdmgroup.vn 
        <div className="bg-white text-center px-4 py-1"></div>
            MALAYSIA: Buvanesan Tamil Selvam +60 13 777 6870/ buvan@tdmgroup.vn
        <div className="bg-white text-center px-4 py-1"></div>
            GERMANY: Hoai Thu Nguyen +49 40 752 56554/ thu@tdmgroup.vn
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
