import React from "react";
import SectionLayout from "./structural/SectionLayout";
import InternalSectionLayout from "./structural/InternalSectionLayout";
import SectionImage from "../assets/section01.svg";
import { Link } from "react-router-dom";
const Section01 = () => {

    return (
    <SectionLayout>
        <InternalSectionLayout className="pt-[6rem]">
            <div className="grid grid-flow-row md:grid-flow-col items-center mx-auto place-items-center">
                <div className="order-2 col-span-1 md:ml-8 text-center md:text-left place-items-center mx-auto">
                    <p className="text-lg">Objectif de l'étude</p>
                    <h2 className="h2 font-bold">Pourquoi cette étude ?</h2>
                    <p className="text-xl py-4">
                    Dans notre recherche, nous étudions le comportement des utilisateurs d'Apple Watch en examinant les raisons d'achat, les méthodes de recherche et les habitudes d'utilisation. Ces connaissances apporteront de l'éclairage aux entreprises et permettront de saisir les conséquences sociales, économiques et techniques de l'intégration croissante de l'Apple Watch dans la vie quotidienne. Grâce à ces compétences, les entreprises pourront ajuster leurs stratégies et leurs produits afin de mieux satisfaire les besoins et les préférences des clients Apple Watch.
                    </p>
                    <div className='grid grid-flow-row md:grid-flow-col grid-rows-1 md:grid-cols-3 mt-4 px-8 md:px-0'>
                        <Link to="/studyreason">
                            <button className="md:col-span-2 bg-neutral-900 px-8 py-4 text-white hover:bg-white hover:text-neutral-900 ease-in-out duration-300 rounded-md text-xl mb-4 md:mb-0 md:mr-4">Plus D'informations</button>
                        </Link>
                    </div>
                </div>
                <div className="order-2 md:order-1 col-span-1">
                    <img src={SectionImage} className="w-[20rem]" width={900} />
                </div>
            </div>
        </InternalSectionLayout>
    </SectionLayout>
    )
}

export default Section01;