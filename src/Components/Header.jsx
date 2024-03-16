"use client";
import { useState } from 'react';
import Image from "next/image";
import Logo from '../../public/Images/navLogo.png';

export default function Header() {
  const [isListOpen, setIsListOpen] = useState(false);

  const toggleList = () => {
    setIsListOpen(!isListOpen);
  };

  return (
    <header className=' bg-[#dfe6e9] lg:justify-between'>
      <nav className="flex items-center justify-between px-4 lg:px-16 py-4">
        <a href="/">
          <Image src={Logo} className="w-32" />
        </a>

        <div className={`absolute top-24 left-0 w-full bg-[#dfe6e9] bg-white flex flex-col lg:static lg:flex-row lg:justify-between ${isListOpen && ' -top-96'}`}>
          <ul className="flex flex-col justify-between lg:flex-row lg:items-center left-5 lg:gap-8">
            <li className="border-solid border-y-2 border-[#C4C4C4] py-3 px-2 flex justify-between lg:justify-normal lg:flex lg:text-nowrap lg:gap-2 lg:border-none">
              <div>
                <a href='/' className=' font-bold text-sm text-[#2e2828]'>WHO WE ARE</a>
              </div>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
              </svg>

            </li>
            <li className="border-solid border-[#C4C4C4] py-3 px-2 flex justify-between lg:justify-normal lg:gap-1 lg:text-nowrap">
              <div>
                <a href='/'className=' font-bold text-sm text-[#2e2828]'>WHAT WE DO</a>
              </div>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
              </svg>

            </li>
            <li className="border-solid border-y-2 border-[#C4C4C4] py-3 px-2 flex justify-between lg:justify-normal lg:flex lg:gap-1 lg:border-none">
              <div>
                <a href='/'className=' font-bold text-sm text-[#2e2828]'>EVENTS</a>
              </div>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
              </svg>

            </li>
            <li className="border-solid  border-[#C4C4C4] py-3 px-2 flex justify-between lg:justify-normal lg:flex lg:gap-1">
              <div>
                <a href='/'className=' font-bold text-sm text-[#2e2828]'>NEWS & STORIES</a>
              </div>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
              </svg>

            </li>
            <li className="border-solid border-y-2 border-[#C4C4C4] py-3 px-2 flex justify-between lg:justify-normal lg:flex lg:gap-1 lg:border-none">
              <div>
                <a href='/'className=' font-bold text-sm text-[#2e2828]'>CONTACT US</a>
              </div>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
              </svg>

            </li>
          </ul>

          <div className="flex items-center justify-between gap-4 py-4 px-1">
            <button className="bg-[#40739e] hover:bg-[#619ecf] text-white font-bold py-2 px-4 rounded w-full">LOG IN</button>
            <button className="hidden lg:inline-block">DONATE</button>
          </div>
        </div>
        
        <div className=" lg:hidden" onClick={toggleList}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 cursor-pointer">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
        </div>
      </nav>
    </header>
  );
}
