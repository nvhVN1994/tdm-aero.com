// src/components/Footer.js
import { FaFacebookF, FaLinkedinIn, FaWhatsapp } from 'react-icons/fa';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import BackToTopButton from '../components/BackToTopButton';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-[#1D1D1D] text-white px-16 xl:px-32 py-10 mt-16 font-['Roboto_Condensed']">
      <div className="grid md:grid-cols-3 gap-12">
       
        {/* Address */}
      
  <div>
      <h3 className="text-[#22BDB6] mb-3 uppercase font-bold">Global Headquarters</h3>
      <p className="font-bold text-white mb-2">TDM GROUP</p>

      <div className="text-white text-sm flex items-center gap-2 mb-1">
        <FaPhoneAlt className="text-white" />
        <span>+84 38 636 0732</span>
      </div>

      <div className="text-white text-sm flex items-center gap-2 mb-1">
        <FaEnvelope className="text-white" />
        <span>sales@tdmgroup.vn</span>
      </div>

      <div className="text-white text-sm flex items-start gap-2">
        <FaMapMarkerAlt className="text-white mt-1" />
        <span>
          Lot DL1 - Cell no 28, Hung Vuong, Tien Chau,<br />
          Phuc Yen, Vinh Phuc 100000
        </span>
      </div>
      <div className="text-white text-sm flex items-start gap-2">
  <FaMapMarkerAlt className="text-white mt-1" />
  <a
    href="https://www.google.com/maps/place/TDM+Group+-+Representative+office/@21.164815,105.7526745,107m/data=!3m1!1e3!4m6!3m5!1s0x3134ffed144dfc8d:0xbd18afd7f46429c7!8m2!3d21.1648136!4d105.7524736!16s%2Fg%2F11sg2m358b?entry=ttu&g_ep=EgoyMDI1MDUxMS4wIKXMDSoASAFQAw%3D%3D"
    target="_blank"
    rel="noopener noreferrer"
    className="hover:text-[#22BDB6]"
  >
    Unit 14, Lot 4, Cienco 5 Urban Area, Me Linh, Hanoi, Vietnam
  </a>
</div>
    </div>

{/* Office locations */}
      <div className="mt-0">
        <h4 className="text-[#22BDB6] uppercase font-bold mb-2">Offices In</h4>
        <div className="flex flex-wrap gap-4 text-sm">
          <span>VIET NAM</span>
          <span>AUSTRALIA</span>
          <span>NEW ZEALAND</span>
          <span>MALAYSIA</span>
          <span>GERMANY</span>
        </div>
      </div>
                {/* Social Icons */}
       <div>
  <h3 className="text-[#22BDB6] mb-3 uppercase font-bold">Connect with Us</h3>
  <div className="flex space-x-4">
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
      href="https://wa.me/84961027031"  // thay số bằng số thật của bạn
      target="_blank"
      rel="noopener noreferrer"
      className="p-3 border rounded-full cursor-pointer hover:bg-[#22BDB6] transition"
    >
      <FaWhatsapp />
    </a>
  </div>
</div>

        
    </div>
        
    <div className="border-t-2 border-white mt-8 pt-4 text-xs flex text-white  gap-2 "> 
     <p className="leading-relaxed">
        Copyright © 2025 TDM TRADING & INVESTMENT JSC
     </p>
    <div className="flex space-x-6 ml-auto">
    <Link to="/terms" className="hover:underline hover:text-[#22BDB6]">
    Terms and Conditions
   </Link>
   <Link to="/privacy" className="hover:underline hover:text-[#22BDB6]">
    Privacy Policy
    </Link>
</div>

    </div>
<BackToTopButton />
    </footer>
    
  );
}
