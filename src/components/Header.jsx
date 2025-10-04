import React, { useState, useEffect, useRef} from 'react';
import { MdMenu, MdMenuOpen } from 'react-icons/md';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';
import DarkModeToggling from './DarkModeToggler';

const Header = () => {
      const [isOpen, setIsOpen] = useState(false);
      const [showNavbar, setShowNavbar] = useState(true);
      const [backdropFilter, setBackdropFilter] = useState(false);
      const [lastScrollYe, setLastScrollYe] = useState(0);
      const [lastScrollY, setLastScrollY] = useState(0);
      const menuRef = useRef(null);


  useEffect(() => {
  const handleScroll = () => {
    if (window.scrollY === 0) {
      setShowNavbar(true); 
    } else if (window.scrollY < lastScrollYe) {
      setShowNavbar(true); 
    } else {
      setShowNavbar(false); 
    }
    setLastScrollYe(window.scrollY);

    const currentScrollY = window.scrollY;

    if (currentScrollY < window.innerHeight) {
      // At the top of the page
      setBackdropFilter(false);
    } else {
      setBackdropFilter(true);
    }
    setLastScrollY(currentScrollY);
  };

  window.addEventListener("scroll", handleScroll);
  return () => window.removeEventListener("scroll", handleScroll);
}, [lastScrollY]);
  
    useEffect(() => {
      const handleClickOutside = (event) => {
        if (menuRef.current && !menuRef.current.contains(event.target)) {
          setIsOpen(false);
        }
      };
  
      document.addEventListener('mousedown', handleClickOutside);
      return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);


  return (
    <motion.nav
    initial={{ y: -100 }}
      animate={{ y: showNavbar ? 0 : -100 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
    className={`w-full sticky top-0 text-black dark:text-white md:p-4 z-50 ${backdropFilter? 'backdrop-blur-md' : '' }`}>
      <div className="flex flex-row items-center justify-between">
      <a href="" className="text-2xl font-bold"><img src="/logo.png" alt="" className='w-[67px] md:w-[72px] h-[57px] md:h-[62px] dark:invert'/></a>
      <DarkModeToggling />

      <button 
      className="block max-md:pr-2.5 cursor-pointer md:hidden"
      onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <MdMenuOpen className='text-3xl' /> : <MdMenu className='text-3xl' />}
            
      </button>


      <ul 
      ref={menuRef} 
      className={`md:flex md:items-center absolute top-20 md:static right-5 w-[40%] text-center gap-7 lg:gap-9 rounded-3xl bg-amber-500 max-md:bg-none dark:max-md:bg-amber-500 dark:md:bg-none dark:max-md:text-black dark:md:text-white  max-md:text-white md:w-auto md:bg-transparent md:flex-row ${
      isOpen? 'h-[auto] animate-slide-in duration-400' : 'h-[0px]'
      }`}
      >
      <li>
                  <Link href='#'
                  className={`block ${isOpen ? "" : "max-md:hidden"} pt-2 pb-2 
                  hover:text-black 
                  dark:hover:text-teal-200
                  dark:hover:md:text-amber-500`} 
                  to='home'
                  smooth={true} 
                  offset={-80}
                  spy={true} 
                  duration={500}>
                  Home
                  </Link>
            </li>

            <li>
                  <Link href='#' 
                  className={`block ${isOpen ? "delay-300" : "max-md:hidden"}  pt-2 pb-2 
                  hover:text-black
                  dark:hover:text-teal-200
                  dark:hover:md:text-amber-500`}
                  to='about'
                  smooth={true} 
                  offset={-80}
                  spy={true} 
                  duration={500}>
                  About
                  </Link>
            </li>

            <li>
                  <Link href='#' 
                  className={`block ${isOpen ? "delay-300" : "max-md:hidden"}   pt-2 pb-2 hover:text-black
                  dark:hover:text-teal-200
                  dark:hover:md:text-amber-500`}
                  to='education'
                  smooth={true} 
                  offset={-80}
                  spy={true} 
                  duration={500}>
                  Education
                  </Link>
            </li>

            <li>
                  <Link href='#' 
                  className={`block ${isOpen ? "delay-300" : "max-md:hidden"}   pt-2 pb-2 hover:text-black
                  dark:hover:text-teal-200
                  dark:hover:md:text-amber-500`}
                  to='experience'
                  smooth={true} 
                  offset={-80}
                  spy={true} 
                  duration={500}>
                  Experience
                  </Link>
            </li>

            <li>
                  <Link href='#' 
                  className={`block ${isOpen ? "delay-300" : "max-md:hidden"}   pt-2 pb-2 hover:text-black
                  dark:hover:text-teal-200
                  dark:hover:md:text-amber-500`}
                  to='projects'
                  smooth={true} 
                  spy={true} 
                  duration={500}>
                  Projects
                  </Link>
            </li>

            <li>
                  <Link href='#' 
                  className={`block ${isOpen ? "delay-300" : "max-md:hidden"}   pt-2 pb-2 hover:text-black
                  dark:hover:text-teal-200
                  dark:hover:md:text-amber-500`}
                  to='contact'
                  smooth={true} 
                  offset={-80}
                  spy={true} 
                  duration={500}>
                  Contact
                  </Link>
            </li>
            </ul>
      </div> 
    </motion.nav>
  )
}

export default Header