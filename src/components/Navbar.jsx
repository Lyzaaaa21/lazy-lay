

import React, { useEffect, useState } from 'react';
import Icon from '../assets/Icon.png'
import {Link} from 'react-scroll'

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] =useState(false);
    const [isSticky, setIsSticky] =useState(false);

    // set toggle Menu
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    }
    useEffect(() => {
        const handleScroll =() => {
            if(Window.scrollY > 100){
                setIsSticky(true);
            
            }
            else{
                setIsSticky(false);
            } 
        };
        window.addEventListener('scroll', handleScroll);
        
        return () => {
            window.addEventListener('scroll', handleScroll);
        }
    })

    // Navitems array
    const navItems = [
        {link: "Home", path: "home"},
        {link: "Service", path: "service"},
        {link: "About", path: "about"},
        {link: "Product", path: "product"},
        {link: "Testimonial", path: "testimonial"},
        {link: "FAQ", path: "faq"},

    ]
  return (
    <header className='w-full bg-white md:bg-transparent fixed top-0 left-0 right-0'>
        <nav>
            <div>
            <a href="" className='text-2xl font-semibold flex items-center space-x-3'> <img src={Icon} alt="" className='w-10 inline-block items-center' />
            <span className='text-[#263238]'></span> NILALAMIG KA BA? KAIN KA APOY </a>

            {/* {NAV ITEMS FOR LARGE DEVICES} */}
            <ul className='md:flex space-x-12 hidden'>
                    {
                        navItems.map(({link, path}) => <Link to={path} spy={true} key={path}>{link}</Link>)
                    }
                </ul>
            </div>
        </nav>
    </header>
  );
};


export default Navbar