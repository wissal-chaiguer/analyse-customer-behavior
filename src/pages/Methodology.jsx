import React from "react";
import Banner from "../components/Banner";
import SectionLayout from "../components/structural/SectionLayout";
import InternalSectionLayout from "../components/structural/InternalSectionLayout";
import CheckList from "../assets/checklist.svg";
import AppleWatch from "../assets/apple-watch-illustration1.jpg";
import ImportantStudy from "../assets/importantstudy.svg";
import AnalysisMethod from "../assets/analysis-method.svg";
import DataProcessing from "../assets/data-processing.svg";
const Methodology = () => {
  window.scrollTo(0, 0);
  return (
    <SectionLayout>
      <InternalSectionLayout>
        <div>
          <Banner title="Méthodologie de l'étude" />
          <div className="grid grid-flow-row md:grid-flow-col items-start px-8 py-2">
            <div className="md:max-w-md lg:max-w-2xl order-2 col-span-1 text-justify">
              <p className="text-lg">Méthodologie de l'étude</p>
              <h2 className="h2 font-bold">
                Comment avons-nous étudié le sujet?
              </h2>
              <p className="text-xl py-4">
                Notre étude adopte une approche centrée sur l'utilisateur pour
                comprendre en profondeur le comportement des utilisateurs
                d'Apple Watch. Nous avons directement sollicité les utilisateurs
                via un sondage Microsoft Forms détaillé, recueillant leurs
                précieuses expériences, opinions et attentes concernant la
                smartwatch.{" "}
              </p>
            </div>
            <div className="order-2 md:order-1 col-span-1 my-auto mx-auto">
              <img
                src={AppleWatch}
                className="w-[20rem] rounded-xl"
                width={900}
              />
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-[5rem] items-center px-8 py-0 rounded-tr-[100px]">
            <div className="md:max-w-md lg:max-w-2xl order-1 col-span-1 text-justify items-center">
              <p className="text-lg">Collecte de donées</p>
              <h2 className="h2 font-bold text-left">
                Méthode de collecte de données
              </h2>
              <p className="text-xl py-4">
                Notre étude s'appuie sur un sondage détaillé, réalisé via
                Microsoft Forms, pour comprendre les motivations, les
                comportements, et les préférences des utilisateurs de l'Apple
                Watch. Ce sondage a collecté à la fois des données quantitatives
                (choix, notations) et qualitatives (réponses ouvertes) auprès
                d'un large échantillon d'utilisateurs. Ces données précieuses
                nous ont permis d'analyser en profondeur l'utilisation de
                l'Apple Watch, révélant les tendances clés et les attentes des
                utilisateurs vis-à-vis de cette technologie.
              </p>
            </div>
            <div className="order-1 md:order-1 col-span-1">
              <img src={ImportantStudy} className="w-[20rem]" width={900} />
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-[5rem] mt-10 items-center bg-violet-200 p-8 rounded-tr-[100px]">
            <div className="md:max-w-md lg:max-w-2xl order-2 col-span-1 text-justify items-center">
              <p className="text-lg">Traitement des données</p>
              <h2 className="h2 font-bold">
                Comment le traitement des données est fait ?
              </h2>
              <p className="text-xl py-4">
                Notre étude repose sur un traitement de données rigoureux pour
                garantir des résultats fiables. Nous avons nettoyé les données
                et employé des outils de pointe pour une analyse précise.{" "}
              </p>
              <ul className="text-xl list-disc list-inside text-left">
                <li>
                  Nettoyage des données: Suppression des lignes incomplètes à
                  l'aide de la méthode dropna() de la bibliothèque Pandas pour
                  assurer l'intégrité des données.
                </li>
                <li>
                  Outils d'analyse de données: Utilisation d'Anaconda Jupyter
                  Notebook et du langage de programmation Python pour un
                  traitement et une analyse efficaces des données.
                </li>
                <li>
                  Exploration et analyses des données: Exploration et analyse
                  des données nettoyées pour révéler des tendances et extraire
                  des informations précieuses sur le comportement des
                  utilisateurs de l'Apple Watch.
                </li>
              </ul>
            </div>
            <div className="order-2 md:order-1 col-span-1">
              <img
                src={DataProcessing}
                className="w-[20rem] rounded-full"
                width={900}
              />
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-[5rem] items-center px-8 py-4 rounded-tr-[100px]">
            <div className="md:max-w-md lg:max-w-2xl order-1 col-span-1 text-justify items-center">
              <p className="text-lg">Analyse des données</p>
              <h2 className="h2 font-bold text-left">
              Approche d'analyse
              </h2>
              <p className="text-xl py-4">
                Afin d'assurer la validité de nos analyses, nous avons
                minutieusement préparé les données en supprimant les éléments
                incomplets en utilisant la méthode dropna() de Pandas. Par la
                suite, nous avons examiné les informations afin de repérer les
                tendances et les liens. Les données ont été étudiées en
                utilisant des méthodes statistiques et d'apprentissage
                automatique qui correspondent aux objectifs de notre recherche.
                Nous avons pu améliorer ces tâches en utilisant Anaconda Jupyter
                Notebook et Python, ce qui nous a permis d'obtenir des
                informations approfondies sur le comportement des utilisateurs
                de l'Apple Watch.
              </p>
            </div>
            <div className="order-1 md:order-1 col-span-1">
              <img src={AnalysisMethod} className="w-[20rem]" width={900} />
            </div>
          </div>
        </div>
      </InternalSectionLayout>
    </SectionLayout>
  );
};
export default Methodology;
