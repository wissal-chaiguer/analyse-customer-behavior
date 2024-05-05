import React from "react";
import Banner from "../components/Banner";
import SectionLayout from "../components/structural/SectionLayout";
import InternalSectionLayout from "../components/structural/InternalSectionLayout";
import CheckList from "../assets/checklist.svg";
import AppleWatch from "../assets/apple-watch-illustration.jpg";
import ImportantStudy from "../assets/importantstudy.svg";
const StudyReason = () => {
    window.scrollTo(0, 0);
    return (
        <SectionLayout>
            <InternalSectionLayout>
                <div>
                    <Banner title="Objectif de l'étude"/>
                    <div className='grid grid-flow-row md:grid-flow-col items-start p-8'>
                        <div className='md:max-w-md lg:max-w-2xl order-1 col-span-1 text-justify'>
                            <p className='text-lg'>Intérêt de cette étude</p>
                            <h2 className='h2 font-bold'>Ce qu'on cherche à étudier</h2>
                            <p className='text-xl py-4'>
                            L'objectif de notre recherche est d'analyser de manière approfondie le comportement et les attitudes des clients, en mettant l'accent sur les utilisateurs de l'Apple Watch. Notre objectif principal est de saisir les principales raisons derrière la décision d'achat (fonctionnalités, santé, esthétique, etc.), d'analyser la manière dont les utilisateurs potentiels s'informent sur l'Apple Watch, les sources choisies (sites web, réseaux sociaux, etc.) et leur processus de prise de décision. En outre, l'analyse porte sur les caractéristiques les plus couramment utilisées, l'intégration de l'Apple Watch dans la vie quotidienne et les nouvelles applications émergentes (paiements, domotique, etc.). Afin de réaliser ces objectifs, nous procéderons à une enquête approfondie via Microsoft Forms, recueillant des informations quantitatives et qualitatives auprès d'un vaste échantillon d'utilisateurs et de non-utilisateurs.On analysera les données en utilisant des statistiques descriptives et des analyses thématiques afin de mettre en évidence les tendances et les sentiments clés.  L'analyse sera accompagnée d'une visualisation des données, ce qui permettra de communiquer de manière efficace les résultats.  En fin de compte, l'objectif de l'étude est de générer des informations utiles pour améliorer les stratégies marketing, la création de produits et l'amélioration de l'expérience client globale de l'Apple Watch.                                    </p>
                        </div>
                        <div className='order-2 md:order-1 col-span-1 mx-auto my-auto'>
                            <img src={AppleWatch} className='w-[20rem] rounded-xl' width={900}/>
                        </div>
                    </div>
                    <div className='flex flex-col md:flex-row gap-[5rem] items-center p-8 rounded-tr-[100px]'>
                        <div className='md:max-w-md lg:max-w-2xl order-1 col-span-1 text-justify items-center'>
                            <p className='text-lg'>Raison de l'étude</p>
                            <h2 className='h2 font-bold text-left'>Pourquoi l'étude est importante</h2>
                            <p className='text-xl py-4'>
                            Comprendre le comportement utilisateur de l'Apple Watch offre un avantage stratégique indéniable. Cette étude est importante car elle permet de: 
                            </p>
                            <ul className='text-xl list-disc list-inside text-left '>
                                <li>Comprendre les motivations des clients: Elle identifie les facteurs clés qui influencent la décision d'achat de l'Apple Watch, permettant un marketing plus ciblé et un développement de produits aligné aux attentes réelles des consommateurs.</li>
                                <li>Améliorer l'expérience client: Elle révèle les préférences d'achat et le processus décisionnel, aidant les entreprises à optimiser le parcours client et à rendre l'expérience d'achat plus fluide.</li>
                                <li>Identifier les opportunités d'innovation: Elle met en lumière les tendances d'utilisation et les usages émergents, guidant les stratégies de développement et favorisant l'anticipation des besoins futurs.</li>
                                <li>Renforcer la compétitivité: Une compréhension profonde du marché de l'Apple Watch permet aux entreprises de se différencier en proposant des offres innovantes et mieux adaptées aux besoins.</li>
                                <li>Contribuer à la recherche sur les wearables:  Cette étude fournit des informations précieuses pour une meilleure compréhension du marché des technologies portables en pleine croissance.</li>
                            </ul>
                        </div>
                        <div className='order-1 md:order-1 col-span-1'>
                            <img src={ImportantStudy} className='w-[20rem]' width={900}/>
                        </div>
                    </div>
                    <div className='flex flex-col md:flex-row gap-[5rem] mt-10 items-center bg-violet-200 p-8 rounded-tr-[100px]'>
                        <div className='md:max-w-md lg:max-w-2xl order-2 col-span-1 text-justify items-center'>
                            <p className='text-lg'>Objectifs de l'étude</p>
                            <h2 className='h2 font-bold'>Nos Objectifs</h2>
                            <p className='text-xl py-4'>
                            Nous poursuivons plusieurs objectifs dans le cadre de cette étude.  Parmi les plus importants:
                            </p>
                            <ul className='text-xl list-disc list-inside text-left'>
                                <li>Comprendre les motivations d'achat.</li>
                                <li>Identifier les besoins et attentes des consommateurs.</li> 
                                <li>Contribuer à une compréhension plus large de l'adoption des technologies portables.</li>   
                                <li>Analyser comment les Apple Watch sont utilisées dans la vie quotidienne.</li>   
                                <li>Développer de nouvelles approches pour améliorer l'engagement client.</li>
                                
                                <li>Mesurer comment les fonctionnalités de l'Apple Watch impactent la satisfaction des clients.</li>
                                <li>Évaluer l'efficacité des stratégies marketing actuelles.</li>  
                                <li>Rassembler des perspectives et des visions futures pour améliorer le produit actuel.</li>
                            </ul>
                        </div>
                        <div className='order-2 md:order-1 col-span-1'>
                            <img src={CheckList} className='w-[20rem] rounded-full' width={900}/>
                        </div>
                    </div>


                </div>
            </InternalSectionLayout>
        </SectionLayout>
    )
    }
export default StudyReason;