import Footer from '../components/Footer';
import Breadcrumb from '../components/Breadcrumb';
import He1 from '../assets/images/Platforms/Helicopters/He1.png';
import He2 from '../assets/images/Platforms/Helicopters/He2.png';
import He3 from '../assets/images/Platforms/Helicopters/He3.png';
import He4 from '../assets/images/Platforms/Helicopters/He4.png';
import He5 from '../assets/images/Platforms/Helicopters/He5.png';


const HelicopterPage = () => {
  const HelicopterItems = [
    {
      title: 'EUROCOPTER',
      img: He1,
      models: ['EC225', 'AS332 L2 Super Puma', 'EC155', 'B1'],
    },
    {
      title: 'AUGUSTAWESTLAND',
      img: He2,
      models: ['AW189'],
    },
    {
      title: 'MIL',
      img: He3,
      models: ['Mi-172', 'Mi-17-1V'],
    },
    {
      title: 'NVG cockpit upgrades, searchlights, hoists, and loudspeaker integration', 
      img: He4, 
      models: [],
    },
    {
      title: 'Support for SAR, medevac, utility, and tactical configurations',
      img: He5,
      models: [],
    },
  ];

  return (
    <div className="min-h-screen bg-white text-black font-['Roboto_Condensed']">
      <main className="pt-[115px]">
        <Breadcrumb />

        {/* Header Section */}
        <div className="bg-[#106A77] text-center py-8 px-4 text-black">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-medium uppercase mb-2">Helicopters</h1>
          <p className="max-w-5xl mx-auto text-xl font-medium sm:text-base leading-relaxed mt-4">
            TDM Aero provides full-spectrum support for rotary-wing platforms used across both military and civilian sectors in Vietnam. 
            We proudly assist in the sustainment, modernization, and operational readiness of Vietnam’s diverse helicopter fleet, 
            supplying parts, systems, and integration services that meet mission-critical demands. With strong ties to OEMs and system providers, 
            TDM Aero ensures Vietnam’s helicopter operators receive certified, mission-ready solutions tailored to both civil and defense requirements.
             Key platforms we support include:
          </p>
        </div>

        {/* Content Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-6 px-4 sm:px-8 py-10">
          {HelicopterItems.map(({ title, img, models }) => (
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

export default HelicopterPage;
