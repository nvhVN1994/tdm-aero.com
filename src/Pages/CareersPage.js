import React from 'react';
import Breadcrumb from '../components/Breadcrumb';
import Footer from '../components/Footer';
import Ca1 from '../assets/images/About/Career/Ca1.png';
import Ca2 from '../assets/images/About/Career/Ca2.png';


export default function QualityPage() {
  return (
    <div className="min-h-screen bg-white text-black font-['Roboto_Condensed']">
     

      <main className="pt-[115px]"> {/* Giữ khoảng cách với NavBar fixed */}
        <Breadcrumb />

        <div className="bg-white text-center py-8 px-4 text-black">
  <h1 className="text-2xl sm:text-3xl lg:text-4xl font-medium uppercase mb-2">
    Careers
  </h1>

  <p className="max-w-5xl mx-auto text-xl font-medium sm:text-base leading-relaxed mt-4">
   At TDM Aero, we’re building a team that’s passionate about aviation, committed to excellence, and driven by purpose. As a trusted player in the 
   aerospace and defense industry, we are always looking for individuals who thrive in a fast-paced, global environment and want to be part of something 
   that makes a real impact.
  </p>
</div>

        {/* Section 1: History */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
          <img
            src={Ca1}
            alt="Career1"
            className="w-full h-full object-cover"
          />
          <div className="bg-[#006D76] text-black p-6 md:p-12 flex items-center">
            <div>
              <h3 className="text-lg font-semibold mb-2 xl:text-[22px] xl:font-bold uppercase xl:mb-4">Who We Are Looking For:</h3>
              <p className="text-sm xl:text-[18px] leading-relaxed  ">
               We welcome talented professionals from a range of backgrounds who are ready to grow with us. Whether your expertise is in aviation logistics, 
               sales, engineering, supply chain, or customer support — if you bring dedication and a strong work ethic, we want to hear from you.
<p>You’ll be joining a team that works closely with international manufacturers, military and civilian aviation partners, and customers who depend on us for 
mission-critical solutions. Every role at TDM Aero plays a part in keeping aircraft flying and operations running smoothly.
  </p>
              </p>
            </div>
          </div>
        </div>

        {/* Section 2: Experience */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
          <div className="bg-[#006D76] text-black p-6 md:p-12 flex items-center">
            <div>
              <h3 className="text-lg font-semibold mb-2 xl:text-[22px] xl:font-bold uppercase xl:mb-4">Join Our Team</h3>
              <p className="text-sm xl:text-[18px] leading-relaxed">
               <p>Interested in joining TDM Aero? We encourage both experienced professionals and new graduates to apply.</p>
<p>To express your interest or submit your CV:</p>
<p className="font-bold">
  Email us at:{' '}
  <span
    onClick={() => {
      navigator.clipboard.writeText("careers@tdmgroup.vn");
      alert("Copied: careers@tdmgroup.vn");
    }}
    className="cursor-pointer text-black hover:underline"
  >
    careers@tdmgroup.vn
  </span>
</p>

<p>Please include your resume and a short introduction about your background and interest in aerospace.
We look forward to discovering what we can build together.
</p>

              </p>
            </div>
          </div>
          <img
            src={Ca2}
            alt="Career2"
            className="w-full h-full object-cover"
          />
        </div>
             
               
      </main>
      <Footer />
    </div>
  );
}
