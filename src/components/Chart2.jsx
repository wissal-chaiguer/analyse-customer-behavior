import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';
import data from './data.json';

export const WearFrequencyChart = () => {
    const chartContainer = useRef(null);
    const chartInstance = useRef(null);
  
    useEffect(() => {
      const chartData = data
        .filter(item => item["Si vous possédez une Apple Watch, à quelle fréquence la portez-vous ?"])
        .map(item => item["Si vous possédez une Apple Watch, à quelle fréquence la portez-vous ?"]);
  
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
              label: 'À quelle fréquence portez-vous votre Apple Watch?',
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
              text: 'How often do you wear your Apple Watch?'
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