import Footer from '../components/Footer';
import Breadcrumb from '../components/Breadcrumb';
import Ci1 from '../assets/images/Platforms/Civil/Ci1.png';
import Ci2 from '../assets/images/Platforms/Civil/Ci2.png';
import Ci3 from '../assets/images/Platforms/Civil/Ci3.png';
import Ci4 from '../assets/images/Platforms/Civil/Ci4.png';
import Ci5 from '../assets/images/Platforms/Civil/Ci5.png';


const CivilPage = () => {
  const CivilItems = [
    {
      title: 'AIRBUS',
      img: Ci1,
      models: ['A319', 'A320', 'A321', 'A330', 'A350 family'],
    },
    {
      title: 'BOEING',
      img: Ci2,
      models: ['B737 (Classic/NG/MAX)', 'B757', 'B767', 'B777', 'B787'],
    },
    {
      title: 'EMBRAER',
      img: Ci3,
      models: ['E170', 'E175', 'E190', 'All executive jet variants'],
    },
    {
      title: 'BOMBARDIER CRJ series', 
      img: Ci4, 
      models: [],
    },
    {
      title: 'ATR',
      img: Ci5,
      models: ['ATR42', 'ATR72', 'All regional turboprop platforms'],
    },
  ];

  return (
    <div className="min-h-screen bg-white text-black font-['Roboto_Condensed']">
      <main className="pt-[115px]">
        <Breadcrumb />

        {/* Header Section */}
        <div className="bg-[#106A77] text-center py-8 px-4 text-black">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-medium uppercase mb-2">Civil</h1>
          <p className="max-w-5xl mx-auto text-xl font-medium sm:text-base leading-relaxed mt-4">
            TDM Aero supplies and supports components for a variety of commercial and regional aircraft operated by airlines and private operators.
            Our broad network of OEM and aftermarket suppliers ensures fast access to spares and systems with full certification and traceability.
             We provide sourcing, logistics, and aftermarket solutions for:
          </p>
        </div>

        {/* Content Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-6 px-4 sm:px-8 py-10">
          {CivilItems.map(({ title, img, models }) => (
            <div
              key={title}
              className="relative overflow-hidden rounded shadow-lg group h-[240px] md:h-[280px] lg:h-[300px]"
            >
              <img
                src={img}
                alt={title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 grayscale group-hover:grayscale-0"
              />

              {/* Hover overlay */}
              <div className="absolute inset-0 bg-[#106A77]/80 flex flex-col items-center justify-center text-black text-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <h3 className="text-base sm:text-lg md:text-xl font-medium tracking-widest uppercase">{title}</h3>
                <div className="w-16 h-[3px] bg-[#22BDB6] my-3"></div>
                {models.map((model, index) => (
                  <p key={index} className="text-sm font-normal">
                    {model}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CivilPage;
