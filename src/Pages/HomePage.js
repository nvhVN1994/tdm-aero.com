import React from 'react';
import { Link } from 'react-router-dom';


export default function HomePage() {
  return (

<div className="relative min-h-screen text-black overflow-hidden font-['Roboto_Condensed']">
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-[-1]"
      >
        <source src="/bg-web.mp4" type="video/mp4" />
      </video>

        
      
      <main className="flex flex-col justify-center h-screen px-14 md:px-32">
        <div className="ml-8 mb-8">
          <h2 className="text-[#106A77] text-[30px] xl:text-[54px] 2xl:text-[64px] font-bold drop-shadow-2xl mb-4">
            GLOBAL SOLUTION
          </h2>
          <h1 className="text-white text-[40px] xl:text-[70px] 2xl:text-[90px] font-bold drop-shadow-2xl leading-tight">
            AEROSPACE & DEFENSE
          </h1>
        </div>
      </main>

      
      <div className="absolute bottom-16 left-16">
  <Link
    to="/request-a-quote"
    className="border border-black text-black px-6 py-2 rounded-full text-[10px] xl:text-[16px] 2xl:text-xl hover:bg-[#22BDB6] transition"
  >
    REQUEST A QUOTE
  </Link>
</div>
    </div>    
    );
}