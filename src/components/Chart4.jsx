import React, { useState, useEffect } from 'react';
import { Bar } from 'react-chartjs-2';
import rawData from './data.json';

export const WatchSatificationChart = () => {
  const [chartData, setChartData] = useState({
    labels: [],
    datasets: []
  });

  useEffect(() => {
    // Analyse des données JSON pour extraire les niveaux de satisfaction
    const satisfactionLevels = {
      'Très insatisfait': 0,
      'Insatisfait': 0,
      'Neutre': 0,
      'Satisfait': 0,
      'Très satisfait': 0
    };

    rawData.forEach(item => {
      const satisfaction = item['Globalement, dans quelle mesure êtes-vous satisfait de votre Apple Watch ?\xa0'];
      if (satisfaction !== undefined) {
        switch (satisfaction) {
          case 1:
            satisfactionLevels['Très insatisfait'] += 1;
            break;
          case 2:
            satisfactionLevels['Insatisfait'] += 1;
            break;
          case 3:
            satisfactionLevels['Neutre'] += 1;
            break;
          case 4:
            satisfactionLevels['Satisfait'] += 1;
            break;
          case 5:
            satisfactionLevels['Très satisfait'] += 1;
            break;
          default:
            // Gérer les valeurs inattendues ou manquantes
            break;
        }
      }
    });

    // Mise à jour des données du graphique
    setChartData({
      labels: Object.keys(satisfactionLevels),
      datasets: [{
        label: 'Dans quelle mesure êtes-vous satisfait de votre Apple Watch ?',
        data: Object.values(satisfactionLevels),
        backgroundColor: ['#36A2EB', '#FF6384', '#FFCE56'],
        borderWidth: 1
      }]
    });
  }, []);

  return (
    <Bar data={chartData}
    width='400px' height='400px'
    options={{ maintainAspectRatio: false, responsive: true }}/>
  );
};