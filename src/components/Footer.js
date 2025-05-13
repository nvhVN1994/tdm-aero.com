// src/components/Footer.js
import { FaFacebookF, FaLinkedinIn, FaWhatsapp } from 'react-icons/fa';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import BackToTopButton from '../components/BackToTopButton';
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
        <span>
          Unit 14, Lot 4, Cienco 5 Urban Area, Me Linh, Hanoi, Vietnam
        </span>
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
            <div className="p-3 border rounded-full cursor-pointer hover:bg-[#22BDB6]">
              <FaFacebookF />
            </div>
            
            <div className="p-3 border rounded-full cursor-pointer hover:bg-[#22BDB6]">
              <FaLinkedinIn /> 
            </div>
            <div className="p-3 border rounded-full cursor-pointer hover:bg-[#22BDB6]">
              <FaWhatsapp />
          </div>
        </div>
        
      </div>
        
    </div>
        
    <div className="border-t-2 border-white mt-8 pt-4 text-xs flex text-white  gap-2 "> 
     <p className="leading-relaxed">
        Copyright © 2025 TDM TRADING & INVESTMENT JSC
     </p>
    <div className="flex space-x-6 ml-auto ">
    <a href="#" className="hover:underline hover:text-[#22BDB6]">
      Terms and Conditions
    </a>
    <a href="#" className="hover:underline hover:text-[#22BDB6]">
      Privacy Policy
    </a>
      </div>
    </div>
<BackToTopButton />
    </footer>
    
  );
}
