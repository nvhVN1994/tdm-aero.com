import Footer from '../components/Footer';
import Breadcrumb from '../components/Breadcrumb';
import Tr1 from '../assets/images/Platforms/TrainerAndPatrol/Tr1.png';
import Tr2 from '../assets/images/Platforms/TrainerAndPatrol/Tr2.png';
import Tr3 from '../assets/images/Platforms/TrainerAndPatrol/Tr3.png';

const MissionTrainerAndPatrolPage = () => {
  const MissionTrainerAndPatrolItems = [
    {
      title: 'Basic and advanced fixed-wing trainers',
      img: Tr1,
      models: [],
    },
    {
      title: 'ISR (Intelligence, Surveillance, Reconnaissance) aircraft',
      img: Tr2,
      models: [],
    },
    {
      title: 'Maritime patrol and border surveillance platforms',
      img: Tr3,
      models: [],
    },
    
  ];

  return (
    <div className="min-h-screen bg-white text-black font-['Roboto_Condensed']">
      <main className="pt-[115px]">
        <Breadcrumb />

        {/* Header Section */}
        <div className="bg-[#106A77] text-center py-8 px-4 text-black">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-medium uppercase mb-2">Mission Trainer & Patrol Aircraft</h1>
          <p className="max-w-5xl mx-auto text-xl font-medium sm:text-base leading-relaxed mt-4">
            We support a wide range of aircraft used for pilot training, surveillance, and maritime patrol operations.
             TDM Aero provides systems integration, spares, and upgrade support tailored to mission-specific configurations.
            Whether for flight schools, coast guard, or military applications, we help extend service life, enhance performance, and maintain readiness for:

          </p>
        </div>

        {/* Content Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-6 px-4 sm:px-8 py-10">
          {MissionTrainerAndPatrolItems.map(({ title, img, models }) => (
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

export default MissionTrainerAndPatrolPage;
