import { Link, useLocation } from 'react-router-dom';
import { FaSearch, FaBars } from 'react-icons/fa';
import { useState } from 'react';
import SideMenu from './SideMenu';



export default function NavBar() {
  const location = useLocation();
  const isHome = location.pathname === '/';
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header
      className={`w-full flex justify-between items-center px-4 sm:px-12 fixed top-0 left-0 z-50 font-['Roboto_Condensed']
      duration-instant
      ${isHome ? 'bg-transparent py-8 h-[147px]' : 'bg-white py-4 h-[115px]'}`}
    >
      {/* Logo */}
      <div className="flex items-center gap-2 ml-6">
        <Link to="/" className="flex items-center">
          <img
            src="/Logo-TDM.png"
            alt="TDM Logo"
            className="w-[100px] md:w-[120px] lg:w-[150px] xl:w-[180px] 2xl:w-[190px] aspect-[190/85.15] object-contain cursor-pointer"
          />
        </Link>
      </div>

      {/* Navigation */}
      <nav className="ml-auto hidden md:flex items-center xl:gap-1 2xl:gap-2 sm:text-[8px] md:text-[10px] lg:text-[12px] xl:text-[14px] 2xl:text-[18px] font-normal text-black">
        
        {/* ABOUT */}
        <div className="relative group">
          <Link to="/about" className="px-1 py-1 2xl:px-3 2xl:py-2 group-hover:bg-[#22BDB6] transition">ABOUT</Link>
          <div className="absolute top-full left-0 hidden group-hover:block bg-white shadow-md border border-[#C0BFC0] w-20 xl:w-40 2xl:w-60">
            <Link to="/about/company" className="block px-2 py-1 hover:bg-[#C0BFC0]">COMPANY</Link>
            <Link to="/about/leadership" className="block px-2 py-1 border-t hover:bg-[#C0BFC0]">EXECUTIVE LEADERSHIP</Link>
            <Link to="/about/quality" className="block px-2 py-1 border-t hover:bg-[#C0BFC0]">QUALITY & COMPLIANCE</Link>
            <Link to="/about/news" className="block px-2 py-1 border-t hover:bg-[#C0BFC0]">NEWS</Link>
            <Link to="/about/careers" className="block px-2 py-1 border-t hover:bg-[#C0BFC0]">CAREERS</Link>
          </div>
        </div>

        {/* WHAT WE DO */}
        <div className="relative group">
          <Link to="/what-we-do" className="px-1 py-1 2xl:px-3 2xl:py-2 group-hover:bg-[#22BDB6] transition">WHAT WE DO</Link>
          <div className="absolute top-full left-0 hidden group-hover:block bg-white shadow-md border border-[#C0BFC0] w-20 xl:w-40 2xl:w-60">
            <Link to="/what-we-do/spares" className="block px-2 py-1 hover:bg-[#C0BFC0]">SPARES</Link>
            <Link to="/what-we-do/services" className="block px-2 py-1 border-t hover:bg-[#C0BFC0]">SERVICES</Link>
            <Link to="/what-we-do/solutions" className="block px-2 py-1 border-t hover:bg-[#C0BFC0]">SOLUTIONS</Link>
          </div>
        </div>

        {/* PLATFORMS */}
        <div className="relative group">
          <Link to="/platforms" className="px-1 py-1 2xl:px-3 2xl:py-2 group-hover:bg-[#22BDB6] transition">PLATFORMS</Link>
          <div className="absolute top-full left-0 hidden group-hover:block bg-white shadow-md border border-[#C0BFC0] w-20 xl:w-40 2xl:w-60">
            <Link to="/platforms/fighter" className="block px-2 py-1 hover:bg-[#C0BFC0]">FIGHTER</Link>
            <Link to="/platforms/transport" className="block px-2 py-1 border-t hover:bg-[#C0BFC0]">TRANSPORT</Link>
            <Link to="/platforms/patrol" className="block px-2 py-1 border-t hover:bg-[#C0BFC0]">PATROL</Link>
            <Link to="/platforms/rotorcraft" className="block px-2 py-1 border-t hover:bg-[#C0BFC0]">ROTORCRAFT</Link>
          </div>
        </div>

        {/* Others */}
        <Link to="/oem-partners" className="px-1 py-1 2xl:px-3 2xl:py-2 hover:bg-[#22BDB6]">OEM PARTNERS</Link>
        <Link to="/trade-shows" className="px-1 py-1 2xl:px-3 2xl:py-2 hover:bg-[#22BDB6]">TRADE SHOWS</Link>

        {/* CONTACT */}
        <div className="relative group">
          <Link to="/contact" className="px-1 py-1 2xl:px-3 2xl:py-2 group-hover:bg-[#22BDB6] transition">CONTACT US</Link>
          <div className="absolute top-full left-0 hidden group-hover:block bg-white shadow-md border border-[#C0BFC0] w-20 xl:w-40 2xl:w-60">
            <Link to="/contact/feedback" className="block px-2 py-1 hover:bg-[#C0BFC0]">CUSTOMER FEEDBACK FORM</Link>
          </div>
        </div>

        <Link to="/portal" className="px-1 py-1 2xl:px-3 2xl:py-2 hover:bg-[#22BDB6]">CUSTOMER PORTAL</Link>
      </nav>

      {/* Search + Hamburger */}
      <div className="relative">
      <div className="ml-6 flex items-center gap-4">
        <FaSearch className="text-black text-xl hover:text-[#22BDB6] cursor-pointer" />
        <FaBars
          className="text-black text-xl hover:text-[#22BDB6] cursor-pointer"
          onClick={() => setIsMenuOpen(true)}
        />
      </div>

      {/* SideMenu hiển thị khi mở */}
      <SideMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </div>
    </header>
  );
}
