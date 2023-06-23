import React, { useState } from 'react'
import { FaBars, FaTimes, FaGithub, FaLinkedin, FaFacebook } from "react-icons/fa"
import { SiGmail } from 'react-icons/si'
import { BsFillPersonLinesFill } from "react-icons/bs"
import Logo from "../assets/es-logo/es-high-resolution-logo-white-on-transparent-background.png"

const Navbar = () => {

    const [nav, setNav] = useState(false);
    const handleClick = () => {
        setNav(!nav)
    }

    return (
        <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-black text-white'>
            <div>
                <img src={Logo} className='h-20 w-20' alt="Logo Image" />
            </div >

            {/*Menu*/}
            <ul className='hidden md:flex' >
                <li>Ana Sayfa</li>
                <li>Hakkımda</li>
                <li>Yetenekler</li>
                <li>Projelerim</li>
                <li>İletişim</li>
            </ul>

            {/*Hamburger*/}
            <div onClick={handleClick} className='md:hidden z-10' >
                {!nav ? <FaBars /> : <FaTimes />}
            </div >


            {/*Mobil Menu*/}
            <ul className={!nav ? "hidden" : "absolute top-0 left-0 w-full h-screen bg-black flex flex-col justify-center items-center"} >
                <li className='py-6 text-4xl '>Ana Sayfa</li>
                <li className='py-6 text-4xl '>Hakkımda</li>
                <li className='py-6 text-4xl '>Yetenekler</li>
                <li className='py-6 text-4xl '>Work</li>
                <li className='py-6 text-4xl '>İletişim</li>
            </ul>


            {/*Sosyal Medya Icons*/}
            <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
                <ul>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#0A66C2]'>
                        <a className='flex justify-between items-center w-full text-white text-lg font-bold' href="">LinkedIn <FaLinkedin size={30} /></a>
                    </li>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#161B22]'>
                        <a className='flex justify-between items-center w-full text-white text-lg font-bold' href="">GitHub <FaGithub size={30} /></a>
                    </li>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-gradient-to-tl from-yellow-400 via-red-700 to-green-600'>
                        <a className='flex justify-between items-center w-full text-white text-lg font-bold' href="">Gmail <SiGmail size={30} /></a>
                    </li>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#116D6E]'>
                        <a className='flex justify-between items-center w-full text-white text-normal font-bold' href="">Öz Geçmiş<BsFillPersonLinesFill size={30} /></a>
                    </li>
                </ul>
            </div>
        </div >
    )
}

export default Navbar