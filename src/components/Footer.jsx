import React from 'react';
import Logo from "../assets/logo.png";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="relative">
      {/* Bg */}
      <div className="absolute inset-0 bg-violet-200 -z-10" aria-hidden="true" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Blocks */}
        <div className="grid sm:grid-cols-12 lg:grid-cols-10 gap-8 py-8">
          {/* 1st block */}
          <div className="sm:col-span-12 lg:col-span-2 lg:max-w-sm">
            {/* Logo */}
              <img  src={Logo} alt="Logo" className="h-20 inline-block fill-current"/>
              <p className="font-bold">École d'Ingénierie High-Tech</p>
              <p>Wissal Chaiguer </p>
              <p className="font-bold">Copyright © 2024 - All right reserved</p>
          </div>

          {/* 2nd block */}
          <div className="sm:col-span-6 md:col-span-3 lg:col-span-2">
            <h6 className="text-sm text-neutral-900 font-bold mb-3">About Us</h6>
            <ul className="text-sm font-[450] space-y-2">
            
              <li>
              <Link to="/methodology">
                <a className="text-neutral-900 hover:text-blue-700 transition duration-150 ease-in-out " to="/methodology">
                Méthodologie
                </a>
                </Link>
              </li>
              
              
              <li>
              <Link to="/resultat">
                <a className="text-neutral-900 hover:text-blue-700 transition duration-150 ease-in-out" to="#0">
                Résultats
                </a>
                </Link>
              </li>
              
              <li>
              <Link to="/histoire">
                <a className="text-neutral-900 hover:text-blue-700 transition duration-150 ease-in-out" to="#0">
                Perspectives
                </a>
                </Link>
              </li>
              <li>
              <Link to="/studyreason"> 
                <a className="text-neutral-900 hover:text-blue-700 transition duration-150 ease-in-out" to="#0">
                À propos
                </a>
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom area */}
      </div>
    </footer>
  )
}