import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import Breadcrumb from '../components/Breadcrumb';
import Wwd1 from '../assets/images/WhatWeDo/Wwd1.jpg';
import Wwd2 from '../assets/images/WhatWeDo/Wwd2.jpg';
import Wwd3 from '../assets/images/WhatWeDo/Wwd3.jpg';

const WhatWeDoPage = () => {
  const whatWeDoItems = [
    { title: "SPARES", to: "/what-we-do/spares", img: Wwd1 },
    { title: "SERVICES", to: "/what-we-do/services", img: Wwd2 },
    { title: "SOLUTIONS", to: "/what-we-do/solutions", img: Wwd3 },
  ];

  return (
    <div className="min-h-screen bg-white text-black font-['Roboto_Condensed']">
      <main className="pt-[115px]">
        <Breadcrumb />

        {/* Header Section */}
        <div className="bg-[#006D76] text-center py-10 px-4 text-black">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-medium uppercase mb-2">What We Do</h1>
        </div>

        {/* Content Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4 sm:px-6 py-10">
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
                  <h3 className="text-white text-2xl font-bold text-center group-hover:underline">
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
