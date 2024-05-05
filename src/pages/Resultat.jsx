import React, { useEffect, useRef } from "react";
import Banner from "../components/Banner";
import SectionLayout from "../components/structural/SectionLayout";
import InternalSectionLayout from "../components/structural/InternalSectionLayout";
import { OwnsWatchChart } from "../components/Chart1";
import { WearFrequencyChart } from "../components/Chart2";
import { WatchTypeChart } from "../components/Chart3";
import { WatchSatificationChart } from "../components/Chart4";
import { PurchaseReasonChart } from "../components/Chart5";
import { FunctionalityUsedChart } from "../components/Chart6";
import { RecommendChart } from "../components/Chart7";
import stats from  '../assets/stats.png'

const Resultat = () => {
  window.scrollTo(0, 0);
  return (
    <SectionLayout>
      <InternalSectionLayout>
        <div>
          <Banner title="Résultats" />
          <div className="flex flex-col md:flex-row">
            <div className="md:max-w-md lg:max-w-4xl order-2 col-span-1 md:ml-8 text-justify items p-8">
              <p className="text-lg">Visualisation des Données</p>
              <h2 className="h2 font-bold">Les résultats de l'étude</h2>
              <p className="text-xl py-4">
                Nos graphiques mettent en lumière la pénétration de l'Apple
                Watch au sein de la population étudiée, depuis sa première
                introduction en 2015 jusqu'à aujourd'hui. Les résultats
                suggèrent que, bien que l'Apple Watch ait gagné en popularité au
                fil des ans, elle n'est pas encore devenue un objet
                incontournable pour une majorité d'utilisateurs. Les analyses
                mettent en évidence des facteurs potentiels pouvant expliquer
                cette adoption progressive, tels que le prix, l'utilité perçue,
                et la concurrence d'autres technologies connectées.{" "}
              </p>
            </div>
            <div className="order-2 md:order-1 col-span-1 mx-auto">
              <img
                src={stats}
                className="w-[50rem]"
                width={900}
              />
            </div>
          </div>
          <div className="w-full flex flex-col md:flex-row mt-10 justify-between items-center bg-neutral-100 p-8 rounded-tr-[100px] border">
            <div className="md:max-w-md lg:max-w-xl order-2 col-span-1 text-justify">
              <p className="text-lg">Graphe 1</p>
              <h2 className="h3 font-bold">Possédez-vous une Apple Watch ?</h2>
              <p className="text-lg py-4">
              Selon l'analyse, la plupart des personnes interrogées ne possèdent pas d'Apple Watch. Ce résultat laisse entendre que l'Apple Watch, même si elle est très populaire, n'a pas encore été répandue dans la population étudiée. Différents éléments peuvent expliquer cette observation : Le prix de l'Apple Watch peut entraver son adoption par un plus grand nombre d'utilisateurs en raison de son coût relativement élevé. La perception de l'utilité: Pour certains, l'investissement dans une smartwatch n'est pas justifié, car les fonctionnalités proposées ne sont pas suffisantes. Les utilisateurs peuvent choisir d'autres types de montres connectées, voire d'autres types de dispositifs "wearables" pour surveiller leur santé ou recevoir des notifications.{" "}
              </p>
            </div>
            <div className="order-2 col-span-1 mx-auto">
              <OwnsWatchChart />
            </div>
          </div>
          <div className="flex flex-col lg:flex-row mt-8 justify-between gap-8">
            <div className="flex flex-col bg-neutral-100 p-8 rounded-md border">
              <div className="md:max-w-md lg:max-w-3xl order-2 col-span-1 text-justify">
                <p className="text-lg">Graphe 2</p>
                <h2 className="h3 font-bold">
                  A quelle fréquence portez-vous une Apple Watch ?
                </h2>
                <p className="text-lg py-4">
                  Ce graphique à secteurs, intitulé "Fréquence d'utilisation de
                  l'Apple Watch", révèle les habitudes variées des propriétaires
                  d'Apple Watch. Pour une proportion significative (70%) des
                  répondants, la montre connectée est portée "Toujours" par 6
                  personnes ou "La plupart du temps" (3 personnes). Cela met en
                  évidence l'intégration de l'Apple Watch dans la vie
                  quotidienne de ces utilisateurs, qui la trouvent
                  indispensable. Cependant, un nombre non négligeable de
                  répondants (30 %) porte sa montre moins fréquemment, que ce
                  soit "Parfois" (2 personnes) ou "Rarement/Jamais" (1
                  personne). Cela suggère que l'appareil n'est pas
                  universellement adopté, indiquant l'influence de divers
                  facteurs sur les habitudes d'usage.{" "}
                </p>
              </div>
              <div className="order-2 col-span-1">
                <WearFrequencyChart />
              </div>
            </div>
            <div className="flex flex-col border bg-neutral-100 p-8 rounded-md">
              <div className="md:max-w-md lg:max-w-3xl order-2 col-span-1 text-justify">
                <p className="text-lg">Graphe 3</p>
                <h2 className="h3 font-bold">
                  Quel modèle d'Apple Watch possédez-vous?
                </h2>
                <p className="text-lg py-4">
                  Ce graphique à secteurs, intitulé "Fréquence d'utilisation de
                  l'Apple Watch", révèle les habitudes d'utilisation de l'Apple
                  Watch au sein de l'échantillon étudié. On remarque que 8
                  utilisateurs d'Apple Watch portent leur montre connectée
                  toujours, et 6 la portent la plupart du temps. Cela témoigne
                  de l'importance accordée à l'Apple Watch par ces utilisateurs,
                  qui la considèrent comme un outil indispensable à leur
                  quotidien. Cependant, un nombre non négligeable (6
                  utilisateurs) utilise l'Apple Watch moins fréquemment, que ce
                  soit parfois (3 utilisateurs) ou rarement/jamais (3
                  utilisateurs). Ce constat suggère que l'appareil n'attire pas
                  universellement tous les utilisateurs, soulignant l'influence
                  de divers facteurs sur la fréquence d'utilisation.{" "}
                </p>
              </div>
              <div className="order-2 col-span-1">
                <WatchTypeChart />
              </div>
            </div>
          </div>
          <div className="w-full flex flex-col md:flex-row mt-10 justify-between items-center bg-neutral-100 p-8 rounded-tr-[100px] border">
            <div className="md:max-w-md lg:max-w-xl order-2 col-span-1 text-justify">
              <p className="text-lg">Graphe 4</p>
              <h2 className="h3 font-bold">
                Étes-vous satisfait de votre Apple Watch?
              </h2>
              <p className="text-lg py-4">
                Ce graphique à barres représente la satisfaction globale des
                utilisateurs concernant leur Apple Watch. Examinons les données
                chiffrées: Note moyenne: La note moyenne attribuée est de 3,58
                sur 5, ce qui indique un niveau de satisfaction plutôt positif.
                Très satisfait: Le graphique montre que 33% des utilisateurs se
                déclarent "Très satisfaits" de leur Apple Watch. Cela représente
                le groupe le plus content des fonctionnalités et de l'expérience
                globale. Plutôt satisfait: Un pourcentage significatif des
                utilisateurs, soit 25%, indiquent être "Plutôt satisfaits". Il
                est possible qu'ils apprécient l'Apple Watch, tout en souhaitant
                quelques améliorations mineures. Ni satisfait ni insatisfait:
                17% des utilisateurs se positionnent dans la catégorie neutre.
                Ils n'ont pas d'opinion tranchée, ni positive ni négative.
                Plutôt insatisfait: Un segment d'utilisateurs, 17%, semble
                plutôt insatisfait. Il est important de comprendre les raisons
                de leur déception pour améliorer le produit. Très insatisfait:
                Enfin, un petit pourcentage (8%) se déclare très insatisfait de
                son Apple Watch. Leurs critiques pourraient mettre en lumière
                des dysfonctionnements ou des lacunes à adresser.{" "}
              </p>
            </div>
            <div className="order-2 col-span-1 mx-auto">
              <WatchSatificationChart />
            </div>
          </div>
          <div className="w-full flex flex-col md:flex-row mt-10 justify-between items-center bg-neutral-100 p-8 rounded-tr-[100px] border">
            <div className="md:max-w-md lg:max-w-xl order-2 col-span-1 text-justify">
              <p className="text-lg">Graphe 5</p>
              <h2 className="h3 font-bold">
                Quelle est la principale raison pour laquelle vous avez acheté
                votre Apple Watch ?
              </h2>
              <p className="text-lg py-4">
                Ce graphique illustre les principales raisons d'achat d'une
                Apple Watch. Le suivi de la santé et du fitness représente la
                motivation d'achat pour 20% des personnes interrogées (8
                personnes sur 40). Les notifications et la communication
                motivent également 20% des achats (8 personnes sur 40). Le style
                et l'aspect mode constituent une raison d'achat pour un segment
                identique de 20% (soit 8 personnes sur 40). Enfin, une part
                importante des consommateurs (40%, correspondant à 16 personnes
                sur 40) cite d'autres raisons.
              </p>
            </div>
            <div className="order-2 col-span-1 mx-auto">
              <PurchaseReasonChart />
            </div>
          </div>
          <div className="w-full flex flex-col md:flex-row mt-10 justify-between items-center bg-neutral-100 p-8 rounded-tr-[100px] border">
            <div className="md:max-w-md lg:max-w-xl order-2 col-span-1 text-justify">
              <p className="text-lg">Graphe 6</p>
              <h2 className="h3 font-bold">
                Quelles fonctionnalités utilisez-vous le plus souvent sur votre
                Apple Watch?
              </h2>
              <p className="text-lg py-4">
                Le graphique à barres indique les fonctionnalités les plus
                utilisées sur l'Apple Watch. On constate que le Suivi de
                l'activité physique arrive en tête avec 33% (12 personnes sur
                36). Les Notifications suivent de près, utilisées par 25% des
                utilisateurs (9 personnes sur 36). Viennent ensuite les
                Applications tierces utilisées par 31% des utilisateurs (11
                personnes sur 36). L'utilisation d'Apple Pay s'élève à 20% (7
                personnes sur 36), suivie de la Personnalisation des cadrans à
                14% (5 personnes sur 36). Enfin, 2% des utilisateurs ont indiqué
                Autre comme fonctionnalité principale.
              </p>
            </div>
            <div className="order-2 col-span-1 mx-auto">
              <FunctionalityUsedChart />
            </div>
          </div>
          <div className="w-full flex flex-col md:flex-row mt-10 justify-between items-center bg-neutral-100 p-8 rounded-tr-[100px] border">
            <div className="md:max-w-md lg:max-w-xl order-2 col-span-1 text-justify">
              <p className="text-lg">Graphe 7</p>
              <h2 className="h3 font-bold">
                Quel facteur a le plus influencé votre décision d'acheter une
                Apple Watch?
              </h2>
              <p className="text-lg py-4">
                Ce graphique circulaire illustre les principaux facteurs ayant
                motivé l'achat d'une Apple Watch. On constate que la
                recommandation d'amis et de famille arrive en tête, avec 16% des
                répondants (6 sur 36). La publicité et le marketing arrivent en
                deuxième position, influençant 14% des achats (5 sur 36). Le
                besoin d'un suivi santé et sportif représente un facteur d'achat
                pour 3% des personnes interrogées (1 sur 36). Les
                fonctionnalités de communication semblent avoir une influence
                moindre (0 sur 36), tout comme les autres facteurs cités (0 sur
                36).
              </p>
            </div>

            <div className="order-2 col-span-1 mx-auto">
              <RecommendChart className="!w-auto" />
              
            </div>
            
          </div>
        </div>
        <div className="w-full flex flex-col md:flex-row mt-10 justify-between items-center bg-neutral-100 p-8 rounded-tr-[100px] border"> 
        <p className="text-lg py-4">
              <h2 className="h3 font-bold mb-5">
              Les commentaires des utilisateurs
              </h2>
              Les retours d'expérience sur l'Apple Watch indiquent une satisfaction globalement positive. La majorité des utilisateurs (72%) déclarent une expérience favorable, l'adorant ou la qualifiant de bonne. Néanmoins, une minorité significative (27%) exprime une expérience neutre ou négative. Bien que l'échantillon de réponses soit limité, ces commentaires soulignent que l'Apple Watch, malgré sa popularité, ne répond pas parfaitement aux attentes de tous les utilisateurs. Il serait intéressant d'approfondir ces retours afin d'identifier les points d'amélioration potentiels pour les prochaines versions de l'Apple Watch.
              </p>
        
        </div>
      </InternalSectionLayout>
    </SectionLayout>
  );
};
export default Resultat;
