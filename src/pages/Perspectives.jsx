import React from "react";
import Banner from "../components/Banner";
import SectionLayout from "../components/structural/SectionLayout";
import InternalSectionLayout from "../components/structural/InternalSectionLayout";
import CheckList from "../assets/checklist.svg";
import AppleWatch from "../assets/apple-watch-illustration1.jpg";
import ImportantStudy from "../assets/importantstudy.svg";
import AnalysisMethod from "../assets/analysis-method.svg";
import DataProcessing from "../assets/data-processing.svg";
import AppleWatches from "../assets/apple_watches.png";
import AppleWatches1 from "../assets/apple-watches1.jpg";
import AppleWatch1 from "../assets/apple-watch1.jpeg";
import perspectives from  '../assets/Perspectives.png'
import series1 from  '../assets/series1.jpg'
import series4 from  '../assets/series4.jpg'
import ultra from  '../assets/ultra.jpeg'
const Perspectives = () => {
    window.scrollTo(0, 0);
    return (
        <SectionLayout>
            <InternalSectionLayout>
                <div>
                    <Banner title="Vision d'avenir"/>
                    <div className='grid grid-flow-row md:grid-flow-col items-start px-8 py-2'>
                        <div className='md:max-w-md lg:max-w-2xl order-2 col-span-1 text-justify'>
                            <p className='text-lg'>Les perspectives</p>
                            <h2 className='h2 font-bold'>Qu'avons-nous appris?</h2>
                            <p className='text-xl py-4'>
                            Grâce à une analyse approfondie basée sur les graphiques de notre étude, nous avons pu développer des perspectives authentiques et établir une vision globale de l'Apple Watch et de son influence. En étudiant les commentaires authentiques des utilisateurs, les informations d'utilisation, les raisons d'achat, les fonctionnalités préférées et les niveaux de satisfaction globales, nous établissons un portrait évident. De cette manière, il est essentiel de développer une compréhension globale des défis liés à l'innovation en prenant en compte les dimensions technologiques, sociales, médicales et économiques.     
                                     </p>
                        </div>
                        <div className='order-2 md:order-1 col-span-1 my-auto mx-auto'>
                            <img src={perspectives} className='w-[20rem] rounded-xl' width={900}/>
                        </div>
                    </div>
                    <div className='flex flex-col md:flex-row gap-[5rem] items-center px-8 py-0 rounded-tr-[100px]'>
                        <div className='md:max-w-md lg:max-w-2xl order-1 col-span-1 text-justify items-center'>
                            <p className='text-lg'>L'avis des clients</p>
                            <h2 className='h2 font-bold text-left'>Réception diverse de l'Apple Watch</h2>
                            <p className='text-xl py-4'>
                            L'analyse de ces graphiques dévoile une perspective nuancée sur l'Apple Watch. D'une part, l'appareil bénéficie d'une réception positive de la part de sa base d'utilisateurs, beaucoup la considérant comme une extension précieuse de leur vie quotidienne grâce à ses fonctionnalités de suivi de la santé, de notification et de commodité. L'utilisation fréquente et les scores de satisfaction le confirment. D'autre part, les données mettent en évidence plusieurs points cruciaux. L'absence de possession généralisée suggère des obstacles à l'adoption tels que le prix et l'utilité perçue. Les raisons variées d'achat et d'utilisation des fonctionnalités soulignent les besoins divers auxquels Apple tente de répondre avec un seul produit. De plus, bien que la satisfaction soit généralement positive, il existe un segment notable d'utilisateurs insatisfaits, indiquant une marge d'amélioration dans l'expérience Apple Watch.
                            </p>
                        </div>
                        <div className='order-1 md:order-1 col-span-1'>
                            <img src={ImportantStudy} className='w-[20rem]' width={900}/>
                        </div>
                    </div>
                    <div className='flex flex-col md:flex-row gap-[5rem] mt-10 items-center bg-violet-200 p-8 rounded-tr-[100px]'>
                        <div className='md:max-w-md lg:max-w-2xl order-2 col-span-1 text-justify items-center'>
                            <p className='text-lg'>Amélioration</p>
                            <h2 className='h2 font-bold'>Vision pour l'avenir</h2>
                            <p className='text-xl py-4'>
                            Les analyses de données révèlent des points forts et des points faibles de l'Apple Watch. Pour cibler une adoption plus large et une satisfaction accrue, voici quelques perspectives à explorer:
                            </p>
                            <ul className='text-xl list-disc list-inside text-left'>
                                <li>Favoriser l'accessibilité : Proposer une gamme de prix plus variée pour attirer les utilisateurs sensibles au coût.</li>
                                <li>Personnalisation et optimisation : Améliorer l'autonomie de la batterie pour réduire la fréquence de charge.</li>
                                <li>Répondre aux insatisfactions : Offrir un support technique plus réactif et efficace pour résoudre rapidement les problèmes et les plaintes des utilisateurs.</li>
                                <li>Vers l'innovation : Développer des capteurs de santé non invasifs pour élargir les possibilités de suivi (glycémie, etc.).</li>
                                <li>Intégration des médias sociaux : Explorez la faisabilité d'un flux de médias sociaux sélectionnés spécifiquement adapté pour l'Apple Watch.</li>
                                <li>Améliorer l'indépendance : Permettre à l'Apple Watch de fonctionner de manière plus autonome, avec moins de dépendance vis-à-vis de l'iPhone.</li>
                                <li>Communication de groupe : Améliorer les fonctionnalités pour les discussions de groupe, les appels ou la vidéo au sein de l'écosystème Apple Watch.</li>
                            </ul>
                        </div>
                        <div className='order-2 md:order-1 col-span-1'>
                            <img src={DataProcessing} className='w-[20rem] rounded-full' width={900}/>
                        </div>
                    </div>

                    <div className='flex flex-col items-center px-8 py-4 rounded-tr-[100px]'>
                        <div className='col-span-1 text-justify items-center'>
                            <p className='text-lg'>Les perspectives existantes</p>
                            <h2 className='h2 font-bold text-left'>Évolution de l'Apple Watch</h2>
                            <p className='text-xl py-4'>
                            L'Apple Watch a commencé son parcours avec la Série 1, une smartwatch simple mais novatrice, qui se concentre sur les notifications et un suivi de base du fitness. En introduisant la technologie révolutionnaire d'ECG, la Série 4 a représenté un tournant majeur en offrant un suivi de santé plus exhaustif. De nos jours, l'Apple Watch Ultra cible les utilisateurs exigeants grâce à sa conception solide, sa batterie longue durée et ses fonctionnalités spécialisées pour la plongée et la navigation. Au cours de cette progression, l'Apple Watch a connu des améliorations de performance constantes, une variété de capteurs croissante, une sophistication logicielle accrue et des options de design élargies. Cette évolution témoigne de l'engagement d'Apple envers l'innovation et de son succès dans la transformation de l'Apple Watch d'un simple accessoire pour smartphone à un véritable appareil de santé et de mode, puissant et polyvalent.{""}
   
                            </p>

                        </div>
                        <div className='flex flex-col md:flex-row gap-[5rem] mx-auto items-center'>
                        <div className='w-[15rem] h-auto bg-white shadow rounded-xl p-4 flex flex-col items-start border bg-neutral-300 '>
                            <img src={series1}  className='w-full h-[16rem] object-cover rounded-xl' />
                            <h2 className='text-xl font-bold mt-4'>Apple Watch Series 1 </h2>
                            <p className='text-sm text-gray-500'>2015</p>
                        </div>
                        <div className='w-[15rem] h-auto bg-white shadow rounded-xl p-4 flex flex-col items-start border bg-neutral-300 '>
                            <img src={series4} className='w-full h-[16rem] object-cover rounded-xl' />
                            <h2 className='text-xl font-bold mt-4'>Apple Watch Series 4</h2>
                            <p className='text-sm text-gray-500'>2018</p>
                        </div>
                        <div className='w-[15rem] h-auto bg-white shadow rounded-xl p-4 flex flex-col items-start border bg-neutral-300 '>
                            <img src={ultra} className='w-full h-[16rem] object-cover rounded-xl' />
                            <h2 className='text-xl font-bold mt-4'>Apple Watch Ultra</h2>
                            <p className='text-sm text-gray-500'>2022</p>
                        </div>
                        </div>
                    </div>
                </div>
                <p className='text-xl py-4'>
                            Des recherches telles que la nôtre jouent un rôle crucial dans la constante amélioration de produits tels que l'Apple Watch. En étudiant les données d'utilisation, les retours des clients et les tendances du marché, l'Apple Watch a la possibilité de s'ajuster et de se renforcer, tout en restant la pionnière de l'industrie.
                            </p>
            </InternalSectionLayout>
        </SectionLayout>
    )
    }
export default Perspectives;