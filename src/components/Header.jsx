import React, {useState} from "react";
import Logo from "../assets/logo.png";
import { GiHamburgerMenu } from "react-icons/gi";


const Header = () => {
    const [isMenuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!isMenuOpen);
    };

    return (
        <header className= {isMenuOpen ?"p-1  mt-4 rounded-full shadow-sm " :"p-1  mt-4 rounded-full shadow-sm bg-violet-200 d-flex "}>
            <div className="flex items-center justify-between ">
                <img src={Logo} alt="Logo" className="h-20 ml-4" />
                <ul className="hidden md:flex md:flex-row">
                    <li className="text-lg font-medium text-neutral-900 hover:bg-neutral-900 hover:text-white rounded-full px-6 py-3 ease-in-out duration-300">Méthodologie</li>
                    <li className="text-lg font-medium text-neutral-900 hover:bg-neutral-900 hover:text-white rounded-full px-6 py-3 ease-in-out duration-300">Résultats</li>
                    <li className="text-lg font-medium text-neutral-900 hover:bg-neutral-900 hover:text-white rounded-full px-6 py-3 ease-in-out duration-300">Perspectives</li>
                    <li className="text-lg font-medium text-neutral-900 hover:bg-neutral-900 hover:text-white rounded-full px-6 py-3 ease-in-out duration-300">
                    About
                    </li>
                </ul>
                <GiHamburgerMenu onClick={toggleMenu} className={isMenuOpen ? "h-16 w-16 text-white bg-neutral-900 md:hidden p-2 rounded-md" : "h-16 w-16 text-neutral-900 md:hidden p-2 hover:text-white hover:bg-neutral-900 rounded-md ease-in-out duration-300"} />
            </div>
            <ul className={isMenuOpen ? "flex flex-col bg-neutral-900 p-4 rounded-md md:hidden" : "hidden"}>
                <li onClick={toggleMenu} className="text-2xl font-medium text-white hover:bg-white hover:text-neutral-900 rounded-sm py-4 px-2 ease-in-out duration-300">Méthodologie</li>
                <li onClick={toggleMenu} className="text-2xl font-medium text-white hover:bg-white hover:text-neutral-900 rounded-sm py-4 px-2 ease-in-out duration-300">Résultats</li>
                <li onClick={toggleMenu} className="text-2xl font-medium text-white hover:bg-white hover:text-neutral-900 rounded-sm py-4 px-2 ease-in-out duration-300">Perspectives</li>
                <li onClick={toggleMenu} className="text-2xl font-medium text-white hover:bg-white hover:text-neutral-900 rounded-sm py-4 px-2 ease-in-out duration-300">About</li>
            </ul>
        </header>
    );
}

export default Header;