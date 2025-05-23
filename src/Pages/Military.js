import Footer from '../components/Footer';
import Breadcrumb from '../components/Breadcrumb';
import Mi1 from '../assets/images/Platforms/Military/Mi1.png';
import Mi2 from '../assets/images/Platforms/Military/Mi2.png';
import Mi3 from '../assets/images/Platforms/Military/Mi3.png';


const MilitaryPage = () => {
  const MilitaryItems = [
    {
      title: 'LOCKHEED MARTIN C-130 HERCULES',
      img: Mi1,
      models: [],
    },
    {
      title: 'CASA C-212 AVIOCAR',
      img: Mi2,
      models: [],
    },
    {
      title: 'AIRBUS',
      img: Mi3,
      models: ['C-235', 'C-295'],
    },
    
  ];

  return (
    <div className="min-h-screen bg-white text-black font-['Roboto_Condensed']">
      <main className="pt-[115px]">
        <Breadcrumb />

        {/* Header Section */}
        <div className="bg-[#106A77] text-center py-8 px-4 text-black">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-medium uppercase mb-2">Military</h1>
          <p className="max-w-5xl mx-auto text-xl font-medium sm:text-base leading-relaxed mt-4">
           TDM Aero supports fixed-wing transport fleets vital to military logistics and tactical operations. 
           Our experience in defense logistics and export compliance ensures safe, timely delivery of mission-critical parts for air force and government operators.
           We deliver certified components, ground support, and repair solutions for:

          </p>
        </div>

        {/* Content Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-6 px-4 sm:px-8 py-10">
          {MilitaryItems.map(({ title, img, models }) => (
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

export default MilitaryPage;
