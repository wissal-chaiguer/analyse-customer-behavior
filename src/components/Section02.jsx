import React from 'react';
import SectionLayout from './structural/SectionLayout';
import InternalSectionLayout from './structural/InternalSectionLayout';
import SectionImage from '../assets/section02.svg';
import { Link } from 'react-router-dom';
const Section02 = () => {
    return (
        <SectionLayout className='bg-violet-200 rounded-tr-[100px]'>
            <InternalSectionLayout className='pt-[4rem]'>
                <div className="grid grid-flow-row md:grid-flow-col items-center mx-auto place-items-center">
                    <div className="order-1 col-span-1 md:ml-8 text-center md:text-left">
                        <p className="text-lg">Membre de l'équipe</p>
                        <h2 className="h2 font-bold">Qui sommes-nous ?</h2>
                        <p className="text-xl py-4">
                        Nous sommes une équipe d'étudiants en génie logiciel à l'école HIGH-TECH, passionnés par l'analyse de données et la fouille de données. Notre étude de l'Apple Watch met en pratique nos compétences techniques pour révéler des informations précieuses sur les utilisateurs et le marché des technologies prêtes-à-porter.
                        </p>
                        <div className='grid grid-flow-row md:grid-flow-col grid-rows-1 md:grid-cols-3 mt-4 px-8 md:px-0'>
                            <Link to="/about">
                                <button className="md:col-span-2 bg-neutral-900 px-8 py-4 text-white hover:bg-white hover:text-neutral-900 ease-in-out duration-300 rounded-md text-xl mb-4 md:mb-0 md:mr-4">En Savoir +</button>
                            </Link>
                        </div>
                    </div>
                    <div className="order-2 md:order-1 col-span-1">
                        <img src={SectionImage} className='w-[20rem]' width={900}/>
                    </div>
                </div>
            </InternalSectionLayout>
        </SectionLayout>
    )
}

export default Section02;