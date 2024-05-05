import React, { useState, useEffect } from 'react';
import { Bar } from 'react-chartjs-2';
import rawData from './data.json';

export const RecommendChart = () => {
  const [chartData, setChartData] = useState({
    labels: ['Pas du tout', 'Peu probable', 'Neutre', 'Probable', 'Très probable'],
    datasets: []
  });

  useEffect(() => {
    // Analyse des données JSON pour extraire les niveaux de recommandation
    const recommendationLevels = {
      'Pas du tout': 0,
      'Peu probable': 0,
      'Neutre': 0,
      'Probable': 0,
      'Très probable': 0
    };

    rawData.forEach(item => {
      const recommendation = item['Dans quelle mesure recommanderiez-vous l\'Apple Watch à un ami ou à un collègue ?'];
      if (recommendation !== undefined) {
        switch (recommendation) {
          case 1:
            recommendationLevels['Pas du tout'] += 1;
            break;
          case 2:
            recommendationLevels['Peu probable'] += 1;
            break;
          case 3:
            recommendationLevels['Neutre'] += 1;
            break;
          case 4:
            recommendationLevels['Probable'] += 1;
            break;
          case 5:
            recommendationLevels['Très probable'] += 1;
            break;
          default:
            // Gérer les valeurs inattendues ou manquantes
            break;
        }
      }
    });

    // Mise à jour des données du graphique
    setChartData(prevData => ({
      ...prevData,
      datasets: [{
        label: 'Dans quelle mesure recommanderiez-vous l\'Apple Watch à un ami ou à un collègue ?',
        data: Object.values(recommendationLevels),
        backgroundColor: [
          '#FF6384',
          '#36A2EB',
          '#FFCE56',
          '#4BC0C0',
          '#9966FF'
        ],
        borderWidth: 1
      }]
    }));
  }, []);

  return (
    <Bar data={chartData} 
      width='350px' height='350px'
    options={{ maintainAspectRatio: false, responsive: true }}/>
  );
};
