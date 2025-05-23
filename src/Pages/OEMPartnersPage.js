import Breadcrumb from '../components/Breadcrumb';
import Footer from '../components/Footer';


import worldMap from '../assets/images/OEM/MapChart.png';
import luminator from '../assets/images/OEM/luminator.png';
import Airbus from '../assets/images/OEM/Airbus.png';
import Boeing from '../assets/images/OEM/Boeing.png';
import Airborne from '../assets/images/OEM/Airborne.png';
import AEM from '../assets/images/OEM/AEM.png';
import honeywell from '../assets/images/OEM/honeywell.png';
import AirborneTec from '../assets/images/OEM/AirborneTec.png';

const OEMPartnersPage = () => {
  return (
    <div className="min-h-screen bg-white text-white font-['Roboto_Condensed']">
      <main className="pt-[115px]">
        <Breadcrumb />

        {/* Map and Logos */}
        <div className="relative w-full overflow-hidden">
          <img src={worldMap} alt="World Map" className="w-full h-auto" />

          {/* Logos */}
          <a href="https://www.luminator.com" target="_blank" rel="noopener noreferrer"
            className="absolute top-[12%] left-[15%] transition-transform duration-300 hover:scale-110">
            <img src={luminator} alt="Luminator" className="w-8 sm:w-12 md:w-16 xl:w-32 2xl:w-52" />
          </a>

          <a href="https://www.boeing.com" target="_blank" rel="noopener noreferrer"
            className="absolute top-[15%] left-[35%] transition-transform duration-300 hover:scale-110">
            <img src={Boeing} alt="Boeing" className="w-8 sm:w-12 md:w-16 xl:w-32 2xl:w-52" />
          </a>

          <a href="https://www.airbus.com/en" target="_blank" rel="noopener noreferrer"
            className="absolute top-[8%] left-[55%] transition-transform duration-300 hover:scale-110">
            <img src={Airbus} alt="Airbus" className="w-8 sm:w-12 md:w-16 xl:w-32 2xl:w-52" />
          </a>

          <a href="https://airborne-sys.com/" target="_blank" rel="noopener noreferrer"
            className="absolute top-[15%] left-[75%] transition-transform duration-300 hover:scale-110">
            <img src={Airborne} alt="Airborne" className="w-8 sm:w-12 md:w-16 xl:w-32 2xl:w-52" />
          </a>

          <a href="https://www.aem-corp.com/" target="_blank" rel="noopener noreferrer"
            className="absolute top-[30%] left-[15%] transition-transform duration-300 hover:scale-110">
            <img src={AEM} alt="AEM" className="w-8 sm:w-12 md:w-16 xl:w-32 2xl:w-52" />
          </a>

          <a href="https://aerospace.honeywell.com/" target="_blank" rel="noopener noreferrer"
            className="absolute top-[30%] left-[35%] transition-transform duration-300 hover:scale-110">
            <img src={honeywell} alt="Honeywell" className="w-8 sm:w-12 md:w-16 xl:w-32 2xl:w-52" />
          </a>

          <a href="https://www.airbornetechnologies.at/en/" target="_blank" rel="noopener noreferrer"
            className="absolute top-[26%] left-[55%] transition-transform duration-300 hover:scale-110">
            <img src={AirborneTec} alt="Airborne Technologies" className="w-8 sm:w-12 md:w-16 xl:w-32 2xl:w-52" />
          </a>
          
        </div>

        {/* CTA button */}
        
      </main>

      <Footer />
    </div>
  );
};

export default OEMPartnersPage;
