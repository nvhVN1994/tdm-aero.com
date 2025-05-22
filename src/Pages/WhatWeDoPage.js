import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import Breadcrumb from '../components/Breadcrumb';
import Wwd1 from '../assets/images/WhatWeDo/Wwd1.jpg';
import Wwd2 from '../assets/images/WhatWeDo/Wwd2.jpg';
import Wwd3 from '../assets/images/WhatWeDo/Wwd3.jpg';
import Wwd4 from '../assets/images/WhatWeDo/Wwd4.jpg';

const WhatWeDoPage = () => {
  const whatWeDoItems = [
    { title: "SPARES", to: "/what-we-do/spares", img: Wwd1 },
    { title: "SERVICES", to: "/what-we-do/services", img: Wwd2 },
    { title: "SOLUTIONS", to: "/what-we-do/solutions", img: Wwd3 },
    { title: "LOGISTICS & DELIVERY", to: "/what-we-do/logistics-and-delivery", img: Wwd4 },
  ];

  return (
    <div className="min-h-screen bg-white text-black font-['Roboto_Condensed']">
      <main className="pt-[115px]">
        <Breadcrumb />

        {/* Header Section */}
        <div className="bg-[#106A77] text-center py-8 px-4 text-black">
  <h1 className="text-2xl sm:text-3xl lg:text-4xl font-medium uppercase mb-2">
    What We Do
  </h1>

  <p className="max-w-5xl mx-auto text-xl font-medium sm:text-base leading-relaxed mt-4">
    TDM Aero is the trusted business partner to aircraft operators around the world for the provision of military aircraft spares and services.
    We are solution providers for all aircraft requirements — from stores resupply to critical, in-the-field replacements.
    Since 2016, our accredited team has accurately delivered airworthy components to our customers, all while sustaining affordability, quality service and short lead-time.
    We offer rapid responses to all customers’ requirements.
  </p>
</div>
        
        {/* Content Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 px-4 sm:px-32 py-10">
  {whatWeDoItems.map(({ title, to, img }) => (
    <Link
      to={to}
      key={title}
      className="group relative overflow-hidden rounded shadow transition-transform duration-500"
    >
      <div className="relative w-full h-[220px] sm:h-[260px] md:h-[280px] lg:h-[300px] overflow-hidden">
        <img
          src={img}
          alt={title}
          className="w-full h-full object-cover grayscale group-hover:grayscale-0 scale-100 group-hover:scale-110 transition-transform duration-500"
        />

        <div className="absolute top-0 left-0 w-0 h-[6px] bg-[#22BDB6] transition-all duration-500 group-hover:w-full" />
        <div className="absolute bottom-0 left-0 w-0 h-[6px] bg-[#22BDB6] transition-all duration-500 group-hover:w-full" />

        <div className="absolute inset-0 flex items-center justify-center">
          <h3 className="text-[#106A77] text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold shadow-xl text-center group-hover:underline">
            {title}
          </h3>
        </div>
      </div>
    </Link>
  ))}
</div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default WhatWeDoPage;
