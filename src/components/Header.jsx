import React, {useState} from "react";
import Logo from "../assets/logo.png";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-router-dom";



const Header = () => {
    const [isMenuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!isMenuOpen);
    };

    return (
        <header className="absolute w-full z-30">
            <div className="max-w-6xl flex flex-wrap items-center justify-between mx-auto p-4 px-4 h-16 md:h-20">
                <Link to="/">
                <img src={Logo} alt="Logo" className="h-20 ml-4" />
                </Link>
                <ul className="hidden md:flex md:flex-row">
                    <Link to="/about">
                        <li className="text-lg font-medium text-neutral-900 hover:bg-neutral-900 hover:text-white rounded-full px-6 py-3 ease-in-out duration-300">Qui sommes-nous ?</li>
                    </Link>

                    <Link to="/methodology">
                        <li className="text-lg font-medium text-neutral-900 hover:bg-neutral-900 hover:text-white rounded-full px-6 py-3 ease-in-out duration-300">Méthodologie</li>
                    </Link>
                    <Link to="/resultat">
                        <li className="text-lg font-medium text-neutral-900 hover:bg-neutral-900 hover:text-white rounded-full px-6 py-3 ease-in-out duration-300">Résultats</li>
                    </Link>
                    <Link to="/histoire">
                        <li className="text-lg font-medium text-neutral-900 hover:bg-neutral-900 hover:text-white rounded-full px-6 py-3 ease-in-out duration-300">Perspectives</li>
                    </Link>
                    <Link to="/studyreason">
                        <li className="text-lg font-medium text-neutral-900 hover:bg-neutral-900 hover:text-white rounded-full px-6 py-3 ease-in-out duration-300">À propos</li>
                    </Link>
                </ul>
                <GiHamburgerMenu onClick={toggleMenu} className={isMenuOpen ? "h-16 w-16 text-white bg-neutral-900 md:hidden p-2 rounded-md" : "h-16 w-16 text-neutral-900 md:hidden p-2 hover:text-white hover:bg-neutral-900 rounded-md ease-in-out duration-300"} />
                </div>
                <ul className={isMenuOpen ? "flex flex-col bg-neutral-900 p-4 m-4 mt-8 rounded-md md:hidden" : "hidden"}>
                    <Link to="/about" onClick={toggleMenu}>
                        <li className="text-2xl font-medium text-white hover:bg-white hover:text-neutral-900 rounded-sm py-4 px-2 ease-in-out duration-300">Qui sommes-nous ?</li>
                    </Link>

                    <Link to="/methodology" onClick={toggleMenu}>
                        <li className="text-2xl font-medium text-white hover:bg-white hover:text-neutral-900 rounded-sm py-4 px-2 ease-in-out duration-300">Méthodologie</li>
                    </Link>
                    <Link to="/resultat" onClick={toggleMenu}>
                        <li className="text-2xl font-medium text-white hover:bg-white hover:text-neutral-900 rounded-sm py-4 px-2 ease-in-out duration-300">Résultats</li>
                    </Link>
                    <Link to="/histoire" onClick={toggleMenu}>
                        <li className="text-2xl font-medium text-white hover:bg-white hover:text-neutral-900 rounded-sm py-4 px-2 ease-in-out duration-300">Perspectives</li>
                    </Link>
                    <Link to="/studyreason" onClick={toggleMenu}>
                        <li className="text-2xl font-medium text-white hover:bg-white hover:text-neutral-900 rounded-sm py-4 px-2 ease-in-out duration-300">À propos</li>
                    </Link>
                </ul>
        </header>
    );
}

export default Header;