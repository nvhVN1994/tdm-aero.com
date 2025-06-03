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
import Proponent from '../assets/images/OEM/proponent.png';
import BreezeEastern from '../assets/images/OEM/BreezeEastern.png';
import OEM1 from '../assets/images/OEM/OEM1.png';
import OEM2 from '../assets/images/OEM/OEM2.png';

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
          
          <a href="https://www.proponent.com/" target="_blank" rel="noopener noreferrer"
            className="absolute top-[30%] left-[75%] transition-transform duration-300 hover:scale-110">
            <img src={Proponent} alt="Proponent" className="w-8 sm:w-12 md:w-16 xl:w-32 2xl:w-52" />
          </a>

          <a href="https://www.breeze-eastern.com/" target="_blank" rel="noopener noreferrer"
            className="absolute top-[50%] left-[15%] transition-transform duration-300 hover:scale-110">
            <img src={BreezeEastern} alt="Breeze Eastern" className="w-8 sm:w-12 md:w-16 xl:w-32 2xl:w-52" />
          </a>

        </div>

      {/* About Section: History & Experience */}
<div className="grid grid-cols-1 md:grid-cols-2 gap-0 mt-10">
  <div>
    <img
      src={OEM1}
      alt="OEM1"
      className="w-full h-full object-cover"
    />
  </div>
  <div className="bg-[#106A77] text-black p-6 md:p-12 flex items-center">
    <div>
      <h3 className="text-lg font-semibold mb-2 xl:text-[22px] xl:font-bold xl:mb-4">COMMERCIAL</h3>
      <div className="text-sm xl:text-[18px] leading-relaxed space-y-3 text-black">
  <p>
    TDM Aero partners with a broad network of certified suppliers and OEM-approved providers to serve commercial airlines, MROs, private operators, and 
    regional carriers. Our portfolio includes:
  </p>

  <ul className="list-disc pl-6 space-y-2">
    <li>
      <strong>Engine shops</strong> – Authorized distributors for engine component support and overhaul
    </li>
    <li>
      <strong>Component and spares manufacturers</strong> – Covering airframe, avionics, cabin, and ground support equipment
    </li>
    <li>
      <strong>Consumables and chemicals</strong> – Cleaning agents, lubricants, sealants, and maintenance products used in daily operations
    </li>
    <li>
      <strong>Global parts suppliers</strong> – For Airbus, Boeing, Embraer, Bombardier, ATR, and more
    </li>
  </ul>

  <p>
    With a focus on quality, traceability, and fast turnaround, our commercial partnerships ensure that we can meet the diverse 
    operational needs of modern aviation.
  </p>
</div>
    </div>
  </div>

  <div className="bg-[#106A77] text-black p-6 md:p-12 flex items-center">
    <div>
      <h3 className="text-lg font-semibold mb-2 xl:text-[22px] xl:font-bold xl:mb-4">MILITARY</h3>
      <div className="text-sm xl:text-[18px] leading-relaxed text-black space-y-4">
  <p>
    We are the authorized distributor in Vietnam for some of the world’s most respected aerospace and
    defense manufacturers, supporting Search & Rescue (SAR) and military aviation operations:
  </p>

  <ul className="list-disc pl-6 space-y-1">
    <li>
      <strong>Luminator Aerospace</strong> – High-powered searchlights and landing lights for rotary aircraft (LS-400, ORION series)
    </li>
    <li>
      <strong>AEM Corporation</strong> – Loudspeakers and mission-critical communication systems
    </li>
    <li>
      <strong>Airborne Systems</strong> – Troop and cargo parachutes, including the MC-6 military parachute
    </li>
    <li>
      <strong>Breeze-Eastern</strong> – Helicopter rescue hoists and mission equipment (HS-29900 series)
    </li>
  </ul>

  <p>
    These partners are leaders in their fields, trusted by military and SAR operators worldwide. Through our
    local expertise and certified distribution, we bring their cutting-edge technologies to the Vietnam market.
  </p>
</div>

    </div>
  </div>
  <div>
    <img
      src={OEM2} 
      alt="OEM2"
      className="w-full h-full object-cover"
    />
  </div>
</div>
  
        
      </main>

      <Footer />
    </div>
  );
};

export default OEMPartnersPage;
