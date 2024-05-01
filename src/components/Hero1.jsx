import React from "react";

const Hero = () => {
  return (
    <div className="hero min-h-screen py-20">
      <div className="hero-content flex-col lg:flex-row">
        <div>
          <h1 className="text-5xl font-bold">Tendances Apple Watch!</h1>
          <p className="py-6">
            Découvrez les tendances clés du comportement client à travers notre
            analyse approfondie.
          </p>
          <button className="btn btn-primary py-5">Voir Plus</button>
        </div>
        <img
          src="src\assets\apple-watch.png"
          className="max-w-sm rounded-lg floating h-50 py-5"
        />
      </div>
      <div className="hero-content flex-col lg:flex-col">
        <h2 className="text-5xl font-bold">Notre Objectif</h2>
        <p className="py-6">
          Notre étude vise à recueillir et analyser les commentaires des clients
          sur l'Apple Watch. À l'aide d'un formulaire Google, nous collectons
          des informations directement auprès des utilisateurs sur leurs
          expériences, leurs préférences et leur niveau de satisfaction global
          avec le produit. Notre objectif est d'identifier les tendances clés
          dans le sentiment des clients, de comprendre les éléments qui
          suscitent la satisfaction et l'insatisfaction, et d'obtenir des
          informations précieuses pour orienter le développement futur des
          produits et les stratégies marketing dans le secteur des technologies
          prêtes-à-porter (ou "wearables").
        </p>
      </div>
      <div
        className="stats shadow py-10"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div className="stat place-items-center">
          <div className="stat-title">Ventes des smartwatch</div>
          <div className="stat-value">31K</div>
          <div className="stat-desc"></div>
        </div>

        <div className="stat place-items-center ml-5">
          <div className="stat-title">Profit</div>
          <div className="stat-value text-secondary">4,200</div>
          <div className="stat-desc text-secondary"></div>
        </div>

        <div className="stat place-items-center ml-5">
          <div className="stat-title">L'age</div>
          <div className="stat-value">1,200</div>
          <div className="stat-desc"></div>
        </div>
      </div>
      <div className="hero-content flex-row lg:flex-col">
        <h2 className="text-5xl font-bold py-5">Qui Sommes Nous?</h2>
        <p className="py-6">
        Nous sommes une équipe d'étudiants en quatrième année à High-Tech, passionnés par l'application de nos connaissances en ingénierie pour comprendre l'évolution constante des smartwatches et objets connectés. Notre projet d'analyse de l'Apple Watch combine nos compétences techniques avec un vif intérêt pour les tendances de consommation.
        </p>

        <div className="card-container" style={{ display: 'flex' }}>
        <div className="card w-96 bg-base-100 shadow-xl">
          <figure>
            <img src="src\assets\wissal.jpeg" alt="wissal" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Wissal</h2>
            <p>Fourth year engineer</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Contacter</button>
            </div>
          </div>
        </div>
        <div className="card w-96 bg-base-100 shadow-xl">
          <figure>
            <img src="src\assets\wissal.jpeg" alt="wissal" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Salma</h2>
            <p>Fourth year engineer</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Contacter</button>
            </div>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
