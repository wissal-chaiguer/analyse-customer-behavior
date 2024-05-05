import React from "react";
import Banner from "../components/Banner";
import SectionLayout from "../components/structural/SectionLayout";
import InternalSectionLayout from "../components/structural/InternalSectionLayout";
import { Link } from "react-router-dom";

const About = () => {
  // scroll back to top
  window.scrollTo(0, 0);
  return (
    <SectionLayout>
      <InternalSectionLayout>
        <div>
          <Banner title="A propos de nous" />
          <div className="grid grid-flow-row md:grid-flow-col items-start mx-auto place-items-center">
            <div className="md:max-w-md lg:max-w-2xl order-1 col-span-1 md:ml-8 text-justify">
              <p className="text-lg">Membres de l'équipe</p>
              <h2 className="h2 font-bold py-5">Qui sommes-nous ?</h2>
              <p className="text-xl py-4">
                En tant qu'étudiants en génie logiciel à l'école HIGH-TECH, nous
                sommes fascinés par le potentiel de la technologie pour
                transformer nos vies. Notre intérêt pour la science des données,
                la fouille de données, et l'analyse du comportement des
                consommateurs nous a mené à réaliser cette étude détaillée de
                l'Apple Watch. Nous sommes ravis de partager nos découvertes
                avec le secteur des technologies prêtes-à-porter, en contribuant
                à une compréhension plus approfondie des besoins et des
                préférences des utilisateurs. Découvrez-en plus sur notre équipe
                ci-dessous.{" "}
              </p>
            </div>
            <div className="order-2 md:order-1 col-span-1 mx-auto my-auto">
              <img
                src="src\assets\team.png"
                className="w-[28rem]"
                width={900}
              />
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-[5rem] mt-10 items-center bg-violet-200 p-8 rounded-tr-[100px]">
            <div className="md:max-w-md lg:max-w-3xl order-2 col-span-1 text-justify items-center">
              <p className="text-lg">Développeuse Web</p>
              <h2 className="h2 font-bold">Wissal Chaiguer</h2>
              <p className="text-xl py-4">
              L'architecte du site web a joué un rôle essentiel dans la réalisation de l'étude  en créant une expérience numérique captivante et esthétique. Elle a combiné des compétences techniques en développement web avec une expertise en visualisation de données, ce qui lui a permis de transformer des résultats complexes en graphiques et visuels conviviaux. En outre, sa contribution à la création de contenu de site et de rapport de fonctionnement, tout en tenant compte de la conception visuelle du site et des perspectives analytiques, a permis au site web de proposer une analyse cohérente et instructive des comportements des utilisateurs d'Apple Watch et des tendances du marché.{" "}
              </p>
              <div className="flex flex-col items-end">
                <button className="md:col-span-2 bg-neutral-900 px-8 py-4 text-white hover:bg-white hover:text-neutral-900 ease-in-out duration-300 rounded-md text-xl mb-4 md:mb-0 md:mr-4">
                <Link
                  to="https://www.linkedin.com/in/wissalchaiguer/"
                  target="_blank"
                >
                  Contacter
                </Link>
                  
                </button>
              </div>
            </div>
            <div className="order-2 md:order-1 col-span-1">
              <img
                src="src\assets\Wissal-photo.jpg"
                className="w-[20rem] rounded-full"
                width={900}
              />
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-[5rem] mt-10 items-center p-8 rounded-tr-[100px]">
            <div className="md:max-w-md lg:max-w-3xl order-1 col-span-1 text-justify items-center">
              <p className="text-lg">Statisticienne</p>
              <h2 className="h2 font-bold">Hiba Rezzouqi</h2>
              <p className="text-xl py-4">
              Grâce à sa compétence méthodologique et à sa rigueur dans le traitement des données, il a pu produire des analyses solides et mettre en évidence des tendances essentielles. Elle a développé le formulaire Microsoft Forms afin de recueillir une série de données. Par la suite, elle a minutieusement nettoyé les données afin de garantir leur cohérence. En utilisant des méthodes statistiques, elle a collecté des données essentielles à partir de questionnaires et d'observations, mettant en évidence des tendances dans l'utilisation des Apple Watch. La rédaction du rapport de veille a été facilitée par ses analyses et ses visualisations, qui ont permis de présenter des informations claires et concises issues de son travail.

              </p>
              <button className="md:col-span-2 bg-neutral-900 px-8 py-4 text-white hover:bg-white hover:text-neutral-900 ease-in-out duration-300 rounded-md text-xl mb-4 md:mb-0 md:mr-4 ">
              <a href="https://www.linkedin.com/in/hiba-rezzouqi-a52794200/" target="_blank">Contacter</a> 
              </button>
            </div>
            <div className="order-1 md:order-2 col-span-1">
              <img
                src="src\assets\Hiba.jpeg"
                className="w-[20rem] rounded-full"
                width={900}
              />
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-[5rem] mt-10 items-center bg-violet-200 p-8 rounded-tr-[100px]">
            <div className="md:max-w-md lg:max-w-3xl order-2 col-span-1 text-justify items-center">
              <p className="text-lg">App développeuse</p>
              <h2 className="h2 font-bold">Salma EL Mabrouki</h2>
              <p className="text-xl py-4">
              Salma, dotée d'une solide expertise en programmation Python et en traitement du langage naturel, a créé une application intuitive pour faciliter l'analyse des comportements à partir de commentaires en ligne.  Passionnée par la compréhension des opinions et des tendances exprimées par les utilisateurs, elle a développé cet outil pour transformer les données textuelles brutes en informations exploitables. Elle a également contribué à la collecte des informations nécessaires à la rédaction du rapport de fonctionnement.
              </p>
              <div className="flex flex-col items-end">
                <button className="md:col-span-2 bg-neutral-900 px-8 py-4 text-white hover:bg-white hover:text-neutral-900 ease-in-out duration-300 rounded-md text-xl mb-4 md:mb-0 md:mr-4">
                <a href="https://www.linkedin.com/in/salma-el-mabrouki-681113207" target="_blank">Contacter</a> 
                </button>
              </div>
            </div>
            <div className="order-2 md:order-1 col-span-1">
              <img
                src="src\assets\salma.jpeg"
                className="w-[20rem] rounded-full"
                width={900}
              />
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-[5rem] mt-10 items-center p-8 rounded-tr-[100px]">
            <div className="md:max-w-md lg:max-w-3xl order-1 col-span-1 text-justify items-center">
              <p className="text-lg">Co-Auteure</p>
              <h2 className="h2 font-bold">Nafissatou Mansaré</h2>
              <p className="text-xl py-4">
              Nafissa a collaboré avec Hiba Rezzouqi pour rédiger le rapport de veille . Sa contribution inestimable dans la rédaction a joué un rôle essentiel pour assurer la qualité structurelle du rapport et la pertinence de son contenu, apportant ainsi une valeur importante au document.

              </p>
              <button className="md:col-span-2 bg-neutral-900 px-8 py-4 text-white hover:bg-white hover:text-neutral-900 ease-in-out duration-300 rounded-md text-xl mb-4 md:mb-0 md:mr-4 ">
              <a href="https://www.linkedin.com/in/nafissatou-mansaré-496345229/" target="_blank">Contacter</a> 
              </button>
            </div>
            <div className="order-1 md:order-2 col-span-1">
              <img
                src="src\assets\Nafissa.jpeg"
                className="w-[20rem] rounded-full"
                width={900}
              />
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-[5rem] mt-10 items-center bg-violet-200 p-8 rounded-tr-[100px]">
            <div className="md:max-w-md lg:max-w-3xl order-2 col-span-1 text-justify items-center">
              <p className="text-lg">Chef d'équipe</p>
              <h2 className="h2 font-bold">Oumaima Bendahan</h2>
              <p className="text-xl py-4">
              Oumaima Bendahan a assuré la gestion et l'avancement de ce projet complexe. Ses capacités organisationnelles ont permis aux tâches de respecter les délais établis et de répondre aux normes de qualité requises. Responsable de la planification et de l'ordonnancement, elle a joué un rôle clé dans la réalisation du projet dans les temps impartis. Oumaima Bendahan a également rédigé le Rapport de fonctionnement ainsi qu'une présentation PowerPoint résumant les résultats du projet.{" "}
              </p>
              <div className="flex flex-col items-end">
                <button className="md:col-span-2 bg-neutral-900 px-8 py-4 text-white hover:bg-white hover:text-neutral-900 ease-in-out duration-300 rounded-md text-xl mb-4 md:mb-0 md:mr-4">
                <a href="https://www.linkedin.com/in/oumaima-bendahan-064103202/" target="_blank">Contacter</a> 
                </button>
              </div>
            </div>
            <div className="order-2 md:order-1 col-span-1">
              <img
                src="src\assets\Oumaima.jpeg" alt='CEO of Karens'
                className="w-[20rem] rounded-full"
                width={900}
              />
            </div>
          </div>
        </div>
      </InternalSectionLayout>
    </SectionLayout>
  );
};
export default About;
