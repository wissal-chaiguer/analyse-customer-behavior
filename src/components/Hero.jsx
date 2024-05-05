import React from 'react';
import SectionLayout from './structural/SectionLayout';
import InternalSectionLayout from './structural/InternalSectionLayout';
import AppleWatch from '../assets/apple-watch.png';
import { Link } from 'react-router-dom';
const Hero = () => {
    return (
        <SectionLayout className='w-full mx-auto'>
            <div
                className="absolute inset-0 -mb-10 md:mb-0 bg-violet-200 pointer-events-none -z-10 rounded-bl-[100px]"
                aria-hidden="true"
            />
            <InternalSectionLayout className='relative pt-[8rem] md:pt-40 md:pb-20'>
                <div className='flex flex-col md:flex-row md:justify-between items-center'>
                    <div className='max-w-xl order-2 md:order-1'>
                        <h1 className="h1 font-bold text-center md:text-left text-neutral-800">L'Apple Watch En Données</h1>
                        <p className="text-center md:text-left text-xl mt-8">
                        Découvrez notre analyse détaillée des utilisateurs de l'Apple Watch. Explorez leurs habitudes, goûts et motivations, ce qui vous donnera un aperçu précieux de leur comportement.

                        </p>
                        <div className='grid grid-flow-row md:grid-flow-col grid-rows-1 md:grid-cols-3 mt-8 px-10 md:px-0'>
                            
                                <button className="md:col-span-2 bg-neutral-900 px-8 py-4 text-white hover:bg-white hover:text-neutral-900 ease-in-out duration-300 rounded-md text-xl mb-4 md:mb-0 md:mr-4"><Link to="/methodology">Notre Méthodologie </Link></button>
                            
                                <button className="bg-white px-8 py-4 text-neutral-900 hover:bg-neutral-900 hover:text-white ease-in-out duration-300 rounded-md text-xl"><Link to="/resultat">Résultats</Link></button>

                            
                        </div>
                    </div>
                    <div className='order-1 md:order-2'>
                        <img
                        src={AppleWatch}
                        className="max-w-xs md:max-w-sm rounded-lg floating h-30 md:h-50 py-5"
                        />
                    </div>
                </div>
            </InternalSectionLayout>
        </SectionLayout>
    )
}

export default Hero;