import Link from 'next/link'
import React from 'react'
import { FaTwitter, FaInstagram, FaEnvelope, FaFacebook} from 'react-icons/fa';


const Nav = () => {
return (
                    <nav className='sticky top-0 z-50 p-0 m-0 flex flex-row  text-4xl text-gray justify-around bg-blue-300'>
                                    <Link href='/'>
                                            <a target="_blank" rel="noopener noreferrer" title="Follow us on Facebook"
                                        className="flex flex-row items-center m-1 border-1 border-solid   rounded-full hover:bg-blue-400 transition-colors duration-100 ease-in-out ">
                                                <FaFacebook aria-label="Facbook Icon" />
                                            </a>
                                    </Link>
                                    <Link href='/'>
                                            <a target="_blank" rel="noopener noreferrer" title="Follow us on Instagram"
                                        className="flex flex-row items-center m-1 border-1 border-solid   rounded-full hover:bg-blue-400 transition-colors duration-100 ease-in-out ">
                                            <FaInstagram aria-label="Instagram Icon" />
                                            </a>
                                    </Link>

                                    <Link href='/'>
                                            <a target="_blank"  rel="noopener noreferrer" title="Follow us on Twitter"
                    className="flex flex-row items-center  m-1 border-1   rounded-full hover:bg-blue-400 transition-colors duration-100 ease-in-out ">
                                            <FaTwitter aria-label="Twitter Icon" />
                                            </a>
                                    </Link>


                    </nav>
);
};




export default Nav
