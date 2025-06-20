import { X, ChevronDown, ChevronUp } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaLinkedinIn, FaWhatsapp } from 'react-icons/fa';

const SideMenu = ({ isOpen, onClose }) => {
  const [openMenu, setOpenMenu] = useState('');

  const toggleSubMenu = (menu) => {
    setOpenMenu(openMenu === menu ? '' : menu);
  };

  return (
    <div
      className={`fixed top-0 right-0 w-[300px] max-w-full h-full bg-black text-white font-['Roboto_Condensed'] z-50 transition-transform duration-300 ease-in-out ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      }`}
    >
      <div className="flex justify-between items-center p-4">
        <img src="/Logo-TDM.png" alt="TDM Group" className="h-8" />
        <button onClick={onClose}>
          <X size={28} />
        </button>
      </div>

      <hr className="border-gray-700 mb-4" />

      <div className="p-4 flex flex-col justify-between h-[calc(100%-60px)] overflow-y-auto">
        <div className="space-y-6 text-sm">
          {/* ABOUT */}
          <div>
            <button onClick={() => toggleSubMenu('about')} className="flex justify-between w-full text-left text-[#22BDB6] font-semibold">
              ABOUT {openMenu === 'about' ? <ChevronUp size={20} /> : <ChevronDown size={18} />}
            </button>
            {openMenu === 'about' && (
              <ul className="ml-3 mt-3 space-y-2">
                <li><Link to="/about/our-core-values" onClick={onClose}>- Our core values</Link></li>
                <li><Link to="/about/quality" onClick={onClose}>- Quality & Compliance</Link></li>
                <li><Link to="/about/news" onClick={onClose}>- News</Link></li>
                <li><Link to="/about/careers" onClick={onClose}>- Careers</Link></li>
              </ul>
            )}
          </div>

          {/* WHAT WE DO */}
          <div>
            <button onClick={() => toggleSubMenu('whatwedo')} className="flex justify-between w-full text-left text-[#22BDB6] font-semibold">
              WHAT WE DO {openMenu === 'whatwedo' ? <ChevronUp size={20} /> : <ChevronDown size={18} />}
            </button>
            {openMenu === 'whatwedo' && (
              <ul className="ml-3 mt-3 space-y-2">
                <li><Link to="/what-we-do/spares" onClick={onClose}>- Spares</Link></li>
                <li><Link to="/what-we-do/services" onClick={onClose}>- Services</Link></li>
                <li><Link to="/what-we-do/solutions" onClick={onClose}>- Solutions</Link></li>
                <li><Link to="/what-we-do/logistics-and-delivery" onClick={onClose}>- Logistics & Delivery</Link></li>
              </ul>
            )}
          </div>

          {/* PLATFORMS */}
          <div>
            <button onClick={() => toggleSubMenu('platforms')} className="flex justify-between w-full text-left text-[#22BDB6] font-semibold">
              PLATFORMS {openMenu === 'platforms' ? <ChevronUp size={20} /> : <ChevronDown size={18} />}
            </button>
            {openMenu === 'platforms' && (
              <ul className="ml-3 mt-3 space-y-2">
                <li><Link to="/platforms/civil" onClick={onClose}>- Civil</Link></li>
                <li><Link to="/platforms/military" onClick={onClose}>- Military</Link></li>
                <li><Link to="/platforms/mission-trainer-and-patrol" onClick={onClose}>- Mission Trainer & Patrol</Link></li>
                <li><Link to="/platforms/helicopters" onClick={onClose}>- Helicopters</Link></li>
              </ul>
            )}
          </div>

          {/* OEM PARTNERS */}
          <div>
            <Link to="/partners" onClick={onClose} className="text-[#22BDB6] font-semibold block">
              PARTNERS
            </Link>
          </div>

          {/* TRADE SHOWS */}
          <div>
            <Link to="/trade-shows" onClick={onClose} className="text-[#22BDB6] font-semibold block">
              TRADE SHOWS
            </Link>
          </div>

          {/* CONTACT */}
          <div>
            <Link to="/contact" onClick={onClose} className="text-[#22BDB6] font-semibold block">
              CONTACT US
            </Link>
          </div>

          {/* CUSTOMER PORTAL */}
          <div>
            <Link to="/ESG-Commitment" onClick={onClose} className="text-[#22BDB6] font-semibold block">
              ESG COMMITMENT
            </Link>
          </div>
        </div>

        {/* Footer (action + social) */}
        <div className="mt-8 space-y-6">
          <Link to="/request-a-quote"
           className=" border flex items-center justify-center hover:bg-[#22BDB6] border-white rounded-full py-2 uppercase text-sm px-4 mt-4 mb-4 ml-10 mr-10">
            Request A Quote
          </Link>

          <div>
  <h3 className="text-[#22BDB6] mb-2 uppercase font-medium text-sm">Connect with Us</h3>
  <div className="flex gap-6 mb-12">
    {/* Facebook */}
    <a
      href="https://www.facebook.com/profile.php?id=61557710257628"
      target="_blank"
      rel="noopener noreferrer"
      className="p-3 border rounded-full cursor-pointer hover:bg-[#22BDB6] transition"
    >
      <FaFacebookF />
    </a>

    {/* LinkedIn */}
    <a
      href="https://linkedin.com/company/tdmgroup"
      target="_blank"
      rel="noopener noreferrer"
      className="p-3 border rounded-full cursor-pointer hover:bg-[#22BDB6] transition"
    >
      <FaLinkedinIn />
    </a>

    {/* WhatsApp */}
    <a
      href="https://wa.me/84961027031"
      target="_blank"
      rel="noopener noreferrer"
      className="p-3 border rounded-full cursor-pointer hover:bg-[#22BDB6] transition"
    >
      <FaWhatsapp />
    </a>
  </div>
</div>

        </div>
      </div>
    </div>
  );
};

export default SideMenu;
