import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import Breadcrumb from '../components/Breadcrumb';
import Ts1 from '../assets/images/TradeShows/Ts1.jpg';
import Ts2 from '../assets/images/TradeShows/Ts2.jpg';
import Ts3 from '../assets/images/TradeShows/Ts3.jpg';
import Ts4 from '../assets/images/TradeShows/Ts4.jpg';

const PlatformsPage = () => {
  const PlatformsItems = [
    { title: "AIRSHOWS", to: "/platforms/civil", img: Ts1 },
    { title: "AIRSHOWS", to: "/platforms/military", img: Ts2 },
    { title: "AIRSHOWS", to: "/platforms/mission-trainer-and-patrol", img: Ts3 },
    { title: "AIRSHOWS", to: "/platforms/helicopters", img: Ts4 },
  ];

  return (
    <div className="min-h-screen bg-white text-black font-['Roboto_Condensed']">
      <main className="pt-[115px]">
        <Breadcrumb />

        {/* Header Section */}
        <div className="bg-[#106A77] text-center py-8 px-4 text-black">
  <h1 className="text-2xl sm:text-3xl lg:text-4xl font-medium uppercase mb-2">
    TRADESHOWS
  </h1>

  <p className="max-w-5xl mx-auto text-xl font-medium sm:text-base leading-relaxed mt-4">
    We believe that the best partnerships are built face-to-face. That’s why we proudly 
    participate in leading trade shows and industry events around the world — not just to
    showcase what we do, but to meet the people we serve. These moments give us the chance 
    to understand your needs firsthand, strengthen relationships, and explore new ways we can support your mission.
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
