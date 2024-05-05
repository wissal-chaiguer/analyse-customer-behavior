import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';
import data from './data.json';

export const OwnsWatchChart = () => {
    const chartContainer = useRef(null);
    const chartInstance = useRef(null); // new
  
    useEffect(() => {
      const chartData = data.map(item => item["Possédez-vous une Apple Watch ?"]);
      const yesCount = chartData.filter(item => item === "Oui").length;
      const noCount = chartData.filter(item => item != "Oui").length;
        
      if (chartContainer && chartContainer.current) {
        if (chartInstance.current) { // new
          chartInstance.current.destroy(); // new
        }
  
        chartInstance.current = new Chart(chartContainer.current, { // modified
          type: 'pie',
          data: {
            labels: ['Oui', 'Non'],
            datasets: [{
              label: 'Possédez-vous une Apple Watch ?',
              data: [yesCount, noCount],
              backgroundColor: ['#36A2EB', '#FF6384']
            }]
          },
          options: {
            responsive: true,
            legend: {
              position: 'bottom',
            },
            title: {
              display: true,
              text: 'Do you own an Apple Watch?'
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
        <canvas ref={chartContainer} />
      </div>
    );
}