"use client";
import { useState , useEffect} from 'react';
import Image from "next/image";
import Logo from '../../public/Images/navLogo.png';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faCaretDown} from "@fortawesome/free-solid-svg-icons";
import { faInstagram, faLinkedin, faTwitter} from "@fortawesome/free-brands-svg-icons"



export default function Header() {
  const [isListOpen, setIsListOpen] = useState(false);

  const toggleList = () => {
    setIsListOpen(!isListOpen);
  };

  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setIsListOpen(false),
    );
  }, []);

  return (
    <header className=' bg-[#dfe6e9] lg:justify-between'>
      <nav className="flex items-center justify-between px-4 lg:pl-16 py-4 lg:flex lg:flex-row ">
      <div className='flex flex-col items-center '>
          <a href="/">
              <Image src={Logo} className="w-32" />
          </a>
          <p className='font-bold text-xs text-[#535c68]'>A Passion To Help</p>
          <p className='font-bold text-sm text-nowrap'> Social Welfare Association</p>
        </div>
          
        <div className={`absolute -top-96 left-0 w-full bg-[#dfe6e9]  flex flex-col lg:static lg:flex-row  lg:justify-center lg:gap-5  ${isListOpen && 'top-32'} `}>    
          <ul className="flex flex-col justify-between lg:flex-row lg:items-center left-5 lg:gap-1 ">
            <li className="border-solid border-y-2 border-[#C4C4C4] py-3 px-2 flex justify-between lg:justify-normal lg:flex lg:text-nowrap lg:gap-2 lg:border-none">
              <div>
                <a href='/' className=' font-bold text-xs text-[#2e2828]'>WHO WE ARE</a>
              </div>
              <a href='/'>
              <FontAwesomeIcon icon={faCaretDown}/>
              </a>
            </li>

            <li className="border-solid border-[#C4C4C4] py-3 px-2 flex justify-between lg:justify-normal lg:gap-2 lg:text-nowrap">
              <div>
                <a href='/'className=' font-bold text-xs text-[#2e2828]'>WHAT WE DO</a>
              </div>
              <a href='/'>
              <FontAwesomeIcon icon={faCaretDown}/>
              </a>

            </li>
            <li className="border-solid border-y-2 border-[#C4C4C4] py-3 px-2 flex justify-between lg:justify-normal lg:flex lg:gap-2 lg:border-none">
              <div>
                <a href='/'className=' font-bold text-xs text-[#2e2828]'>EVENTS</a>
              </div>
              <a href='/'>
              <FontAwesomeIcon icon={faCaretDown}/>
              </a>

            </li>
            <li className="border-solid  border-[#C4C4C4] py-3 px-2 flex justify-between lg:justify-normal  lg:text-nowrap lg:flex lg:gap-2">
              <div>
                <a href='/'className=' font-bold text-xs text-[#2e2828]'>NEWS & STORIES</a>
              </div>
              <a href='/'>
              <FontAwesomeIcon icon={faCaretDown}/>
              </a>

            </li>
            <li className="border-solid border-y-2 border-[#C4C4C4] py-3 px-2 flex justify-between lg:justify-normal lg:text-nowrap lg:flex lg:gap-2 lg:border-none">
              <div>
                <a href='/'className=' font-bold text-xs text-[#2e2828]'>CONTACT US</a>
              </div>
              <a href='/'>
              <FontAwesomeIcon icon={faCaretDown}/>
              </a>      
            </li>
          </ul>

          <div className="flex items-center justify-between gap-4 py-4 px-1">
            <button className="bg-[#40739e] hover:bg-[#619ecf] text-white font-bold py-2 px-4 rounded w-full lg:text-nowrap">LOG IN</button>
            <button className="hidden lg:inline-block lg:bg-[#40739e] hover:bg-[#619ecf] font-bold rounded text-white py-2 px-4 lg:text-nowrap">DONATE</button>
          </div>
        </div>

        <div className="lg:flex lg:flex-row lg:gap-1 items-center" > 
          <span className=" hidden w-10 h-10 lg:flex items-center justify-center rounded-full bg-gradient-to-tr from-pink-500 to-red-500">      
            <a href='/'><FontAwesomeIcon icon={faInstagram} size="lg" className="text-white"/></a>            
          </span> 

          <span className=" hidden w-10 h-10 lg:flex items-center justify-center rounded-full bg-blue-500">
          <a href='/'><FontAwesomeIcon icon={faLinkedin} size="lg" className="text-white"/></a>
          </span>

          <span className="hidden w-10 h-10 lg:flex items-center justify-center rounded-full bg-blue-400">
          <a href='/'><FontAwesomeIcon icon={faTwitter} size="lg" className="text-white"/></a>
          </span>             
         </div>

        
        
         <div className="lg:hidden flex flex-row gap-5 items-center" onClick={toggleList}>
          <button className="bg-[#40739e] hover:bg-[#619ecf] text-white font-bold py-2 px-4 rounded ">DONATE</button>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 cursor-pointer">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
         </div>
      </nav>
    </header>
  );
}