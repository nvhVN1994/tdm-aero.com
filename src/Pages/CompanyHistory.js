import React from 'react';
import Breadcrumb from '../components/Breadcrumb';
import Footer from '../components/Footer';
import His1 from '../assets/images/About/History/His1.jpg';
import His2 from '../assets/images/About/History/His2.jpg';
import His3 from '../assets/images/About/History/His3.jpg';

export default function CompanyHistory() {
  return (
    <div className="min-h-screen bg-white text-black font-['Roboto_Condensed']">
     

      <main className="pt-[115px]"> 
        <Breadcrumb />

        <div className="bg-white text-center py-8 px-4 text-black">
  <h1 className="text-2xl sm:text-3xl lg:text-4xl font-medium uppercase mb-2">
    COMPANY HISTORY
  </h1>

  <p className="max-w-5xl mx-auto text-xl font-medium sm:text-base leading-relaxed mt-4">
   TDM Aero is proud to carry forward a three-generation legacy rooted in nearly half a century of unwavering dedication to aviation. 
   Our story is a testament to the passion and expertise of three remarkable individuals—grandfather, father, and son—who together 
   have shaped a family tradition defined by service, integrity, and excellence.
  </p>
</div>

        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
          <img
            src={His1}
            alt="photoAbout1"
            className="w-full h-full object-cover"
          />
          <div className="bg-[#006D76] text-black p-6 md:p-12 flex items-center ">
            <div className="space-y-2 ">
              <h3 className="text-lg font-semibold mb-2 xl:text-[22px] xl:font-bold xl:mb-4">ORIGIN - MR. NGUYÊN</h3>
              <p className="text-sm xl:text-[18px] leading-relaxed  ">
                Our journey began with Ex-Colonel Trần Đăng Nguyên, a respected veteran pilot in the Vietnam People’s Air Force. 
                Over the course of his career, Colonel Nguyên distinguished himself through:
              </p>
              <div className="text-sm xl:text-[18px] leading-relaxed space-y-2">
              <p className="pl-6">• Combat and operational excellence, leading numerous flight missions with precision and leadership.</p>
              <p className="pl-6">•	Aviation mentoring, training and inspiring a generation of pilots with a deep commitment to safety and discipline.</p>
              <p className="pl-6">•	Innovation in aviation operations, adapting to new technologies and wartime demands to elevate mission capabilities.</p>
              </div>
              <p className="text-sm xl:text-[18px] leading-relaxed  ">
                His service helped forge the pillars of modern Vietnamese military aviation—and his values of safety, precision, and courage are embedded in 
                all we do at TDM Aero.
              </p>
              <p className="text-sm xl:text-[18px] leading-relaxed  ">
                Notably, Colonel Nguyên piloted Mi-7 and Mi-8 helicopters during the American-Vietnam war, the trusted workhorses of their time. 
                After the war ended post-1975, he continued piloting the Chinook CH-47 and Bell UH-1. Today, TDM Aero proudly supports their modern successors,
                 including the Mi-171 and Mi-17-1V—a direct reflection of our roots. This continuity is more than symbolic; it embodies our deep technical 
                 understanding, operational empathy, and long-standing commitment to Vietnam’s rotary-wing capabilities. What began as his mission in the 
                 cockpit continues today through our service to the fleets that evolved from his generation
              </p>
            </div>
          </div>
        </div>

       
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
          <div className="bg-[#006D76] text-black p-6 md:p-12 flex items-center">
            <div className="space-y-2 ">
              <h3 className="text-lg font-semibold mb-2 xl:text-[22px] xl:font-bold xl:mb-4">FOUNDATION AND EXPANSION – MR. ĐĂNG</h3>
              <p className="text-sm xl:text-[18px] leading-relaxed">
                Following in his father’s footsteps, Mr. Đăng built upon this foundation by establishing critical aircraft services, 
                repair coordination, and after-sales support operations. Under his leadership, TDM Aero evolved into a trusted provider 
                for both military and civil aviation customers. Highlights include:
              </p>
             <div className="text-sm xl:text-[18px] leading-relaxed space-y-2">
              <p className="pl-6">•	Development of a resilient supplier and MRO network, enabling rapid sourcing and repair of aircraft systems.</p>
              <p className="pl-6">•	Establishment of robust quality management processes aligning with FAA and EASA standards.</p>
              <p className="pl-6">•	Expansion into civil and private aviation sectors, while sustaining strong ties with defense customers.</p>
              </div>
              <p className="text-sm xl:text-[18px] leading-relaxed">
                Mr. Đăng founded TDM Group in 2015 to transform a legacy of family inheritance into a growing enterprise capable of delivering certified parts
                , logistical support, and lifecycle services across Vietnam and the region.
              </p>
            </div>
          </div>
          <img
            src={His2}
            alt="photoAbout2"
            className="w-full h-full object-cover"
          />
        </div>

                
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
          
          <img
            src={His3}  
            alt="photoAbout3"
            className="w-full h-full object-cover"
          />
          <div className="bg-[#006D76] text-black p-6 md:p-12 flex items-center">
            <div className="space-y-2 ">
              <h3 className="text-lg font-semibold mb-2 xl:text-[22px] xl:font-bold xl:mb-4">THIRD GENERATION – TDM AERO</h3>
              <p className="text-sm xl:text-[18px] leading-relaxed">
                Today, the third generation drives forward under the name TDM Aero, selected to honor our roots and herald a modern vision. 
                Our identity is shaped by nearly 50 years of generational knowledge, blending deep-rooted tradition with contemporary advancements in aerospace and defense.
              </p>
              <p className="text-sm xl:text-[18px] leading-relaxed">
                As TDM Aero continues into the future, we remain inspired by our past—honoring Colonel Nguyên's pioneering spirit and Mr. Đăng’s 
                entrepreneurial drive. We are committed to growing a third-generation firm that respects its heritage, supports its community, and achieves
                 new heights in global aerospace support and innovation.
              </p>
            </div>
          </div>
        </div>

              
      </main>
      <Footer />
    </div>
  );
}
