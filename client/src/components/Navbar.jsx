import { HiMenuAlt4 } from 'react-icons/hi';
import { AiOutlineClose } from 'react-icons/ai';
import { IoMdOpen } from "react-icons/io";
import { useState } from 'react';
import { Link } from 'react-router-dom';

import logo from '../../images/logo.png';
const NavbarItem = ({ title, classProps }) => {

        
    return ( 
        <li className={`mx-4 cursor-pointer ${classProps}$`}>
            <Link to={`/${title}`} className="nav-link nav-link:hover">
                {title}
            </Link>
            
        </li>

    );
}

const Navbar = () => {
    const [toggleMenu, setToggleMenu] = useState(false)

    const handleClick = () => {
        return(
            <Link to={"/"}>

            </Link>
        );
    }

    return (
        <nav className="w-full flex md:justify-center justify-between items-center p-4">
            <div className="md:flex-[0.5] flex-initial justify-center items-center">
                <Link to="/">
                    <img src = {logo} alt = "logo" className = "w-32 cursor-pointer">
                    

                    </img>
                </Link>
                
            </div>
            <ul className="text-white md:flex hidden list-none flex-row justify-between items-center flex-initial">
                {["Welcome", "About","Authenticate"].map((item, index) => (
                    <NavbarItem  key={item+index} title={item}/>
                ))}
                <form  className="bg-[#2952e3] py-2 px-7 mx-4 rounded-full cursor-pointer hover:bg-[#2546bd]" action="https://www.pinksale.finance" method="get" target="_blank">
                    <button type="submit">Connect wallet</button>
                </form>
            </ul>   
            <div className="flex relative">
                {toggleMenu
                ?    <AiOutlineClose  fontSize={28} className="text-white md:hidden cursor-pointer" onClick={() => setToggleMenu(true)} />
                :    <HiMenuAlt4 fontSize={28} className="text-white md:hidden cursor-pointer" onClick={() => setToggleMenu(true)}/>
                }
                {toggleMenu && (
                    <ul
                        className="z-10 fixed top-0 -right-2 p-3 w-[70vw] h-screen shadow-2xl md:hidden list-one 
                        flex flex-col justify start items-end rounded-md blue-glassmorphism text-white animate-slide-in"
                    >
                        <li className="text-xl w-full my-2">
                            <AiOutlineClose onClick={() => setToggleMenu(false)} />
                        </li>
                        {["Welcome", "About","Authenticate"].map((item, index) => (
                        <NavbarItem  key={item+index} title={item} classProps="my-2 text-lg"/>
                ))}
                    </ul>
                )}
            </div>
        </nav>

    );
}

export default Navbar;