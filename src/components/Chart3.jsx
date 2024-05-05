import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';
import data from './data.json';

export const WatchTypeChart = () => {
    const chartContainer = useRef(null);
    const chartInstance = useRef(null);
  
    useEffect(() => {
      const chartData = data
        .filter(item => item["Quel modèle d'Apple Watch possédez-vous ?"])
        .map(item => item["Quel modèle d'Apple Watch possédez-vous ?"]);
  
      const frequencyCounts = chartData.reduce((acc, curr) => {
        if (typeof acc[curr] == 'undefined') {
          acc[curr] = 1;
        } else {
          acc[curr] += 1;
        }
  
        return acc;
      }, {});
  
      const labels = Object.keys(frequencyCounts);
      const counts = Object.values(frequencyCounts);
  
      if (chartContainer && chartContainer.current) {
        if (chartInstance.current) {
          chartInstance.current.destroy();
        }
  
        chartInstance.current = new Chart(chartContainer.current, {
          type: 'bar',
          data: {
            labels: labels,
            datasets: [{
              label: "Quel modèle d'Apple Watch possédez-vous ?",
              data: counts,
              backgroundColor: ['#36A2EB', '#FF6384', '#FFCE56']
            }]
          },
          options: {
            responsive: true,
            legend: {
              position: 'top',
            },
            title: {
              display: true,
              text: "Quel modèle d'Apple Watch possédez-vous ?"
            },
            animation: {
              animateScale: true,
              animateRotate: true
            }
          }
        });
      }
    }, [chartContainer]);
  
    return (
      <div>
        <canvas ref={chartContainer} className='h-50' />
      </div>
    );
  }