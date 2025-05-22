import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import Breadcrumb from '../components/Breadcrumb';
import Pl1 from '../assets/images/Platforms/Pl1.png';
import Pl2 from '../assets/images/Platforms/Pl2.png';
import Pl3 from '../assets/images/Platforms/Pl3.png';
import Pl4 from '../assets/images/Platforms/Pl4.png';

const PlatformsPage = () => {
  const PlatformsItems = [
    { title: "CIVIL", to: "/platforms/civil", img: Pl1 },
    { title: "MILITARY", to: "/platforms/military", img: Pl2 },
    { title: "MISSION TRAINER & PATROL AIRCRAFT", to: "/platforms/mission-trainer-and-patrol", img: Pl3 },
    { title: "HELICOPTERS", to: "/platforms/helicopters", img: Pl4 },
  ];

  return (
    <div className="min-h-screen bg-white text-black font-['Roboto_Condensed']">
      <main className="pt-[115px]">
        <Breadcrumb />

        {/* Header Section */}
        <div className="bg-[#106A77] text-center py-8 px-4 text-black">
  <h1 className="text-2xl sm:text-3xl lg:text-4xl font-medium uppercase mb-2">
    Platforms
  </h1>

  <p className="max-w-5xl mx-auto text-xl font-medium sm:text-base leading-relaxed mt-4">
    TDM Aero supports a wide range of fixed-wing and rotary aircraft across commercial, business, and defense sectors. 
    From major airlines to special mission units, we provide parts, systems, and services tailored to each platform’s unique operational needs.
  </p>
</div>
        
        {/* Content Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 px-4 sm:px-32 py-10">
  {PlatformsItems.map(({ title, to, img }) => (
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

export default PlatformsPage;
