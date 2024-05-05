import React, { useState, useEffect } from 'react';
import { Pie } from 'react-chartjs-2';
import rawData from './data.json';

const truncateLabel = (label, maxLength = 20) => {
    if (label.length > maxLength) {
      return label.substring(0, maxLength) + '...'; // Tronquer et ajouter des points de suspension
    }
    return label;
  };

export const PurchaseReasonChart = () => {
  
    useEffect(() => {
      // Initialize an empty object to store the purchase reasons
      const purchaseReasons = {};
  
      rawData.forEach(item => {
        const reasons = item['Quelle est la principale raison pour laquelle vous avez acheté votre Apple Watch ?'];
        console.log(reasons);
        if (reasons !== undefined) {
          // Split the reasons by semicolon and count each one
          reasons.split(';').forEach(reason => {
            // Remove the leading 'a. ', 'b. ', etc.
            const parsedReason = reason.slice(3);
            // If the reason is already in the object, increment its count
            if (parsedReason in purchaseReasons) {
              purchaseReasons[parsedReason] += 1;
            }
            // Otherwise, add the reason to the object with a count of 1
            else {
              purchaseReasons[parsedReason] = 1;
            }
          });
        }
      });
      const labels = Object.keys(purchaseReasons).map(label => truncateLabel(label));
      const dataValues = labels.map(label => purchaseReasons[label] || 0);
      console.log(purchaseReasons)
      //remove the "" key
        delete purchaseReasons[""];

      setChartData({
        labels: labels,
        datasets: [{
          label: 'Quelle est la principale raison pour laquelle vous avez acheté votre Apple Watch ?',
          data: Object.values(purchaseReasons),
          backgroundColor: ['#36A2EB', '#FF6384', '#FFCE56'],
          borderWidth: 1
        }]
      });
    }, []);
    const options = {
        tooltips: {
          callbacks: {
            label: function(tooltipItem, data) {
              const labelIndex = tooltipItem.index;
              const value = data.datasets[0].data[labelIndex];
              const total = data.datasets[0].data.reduce((acc, curr) => acc + curr, 0);
              const percentage = ((value / total) * 100).toFixed(2); // Calculate percentage
              return `${fullLabels[labelIndex]}: ${value} (${percentage}%)`;
            }
          }
        },
        maintainAspectRatio: false
      };
    const [chartData, setChartData] = useState({
      labels: [],
      datasets: []
    });
  
    return (
      <Pie data={chartData}
      height="350px"
      width="350px"
      option={options}/>
    );
  };