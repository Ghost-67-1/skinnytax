'use client'

// import React from 'react'
// import { Line } from 'react-chartjs-2';
// import {
//     Chart as ChartJS,
//     LineElement,
//     CategoryScale,
//     LinearScale,
//     PointElement,
//     Tooltip,
//     Legend,
// } from 'chart.js';
// ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement, Tooltip, Legend);


// export default function LineChart() {

//     const data = {
//         labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
//         datasets: [
//             {
//                 label: 'Sales 2023 (in USD)',
//                 data: [3000, 4000, 3200, 5000, 4800, 5300, 6000],
//                 borderColor: '#f6bb19',
//                 backgroundColor: 'rgba(255,165,0,0.3)',
//                 fill: true,
//                 tension: 0.4, // Smoothing the line
//                 backgroundColor: 'rgba(0,0,0,0)',
//             },
//         ],
//     };

//     const options = {
//         responsive: true,
//         plugins: {
//             legend: {
//                 position: 'top',
//                 display:false,
//             },
//             tooltip: {
//                 mode: 'index',
//                 intersect: false,
//             },
//         },
//         scales: {
//             x: {
//                 title: {
//                     display: true,
//                     text: 'Months',
//                 },
//                 grid: {
//                     display: false, // Hide grid lines on the x-axis
//                   },
//             },
//             y: {
//                 title: {
//                     display: true,
//                     text: 'Sales (USD)',
//                 },
//                 beginAtZero: true,
//                 grid: {
//                     display: false, // Hide grid lines on the x-axis
//                   },
//             },
//         },
//     };

//     return (
//         <div className='line-chart-main-div'>
//             <Line data={data} options={options} />
//         </div>
//     )
// }


import React, { useEffect } from 'react';
import Chart from 'chart.js/auto'; // Import Chart object

export default function CyanLargeChart({ }) {
    useEffect(() => {
        // Create gradient
        const canvas = document.getElementById('lineChart-cyan');
        const ctx = canvas.getContext('2d');
        const canvasHeight = canvas.height = canvas.offsetHeight || 500; // Set a default if not defined
        const gradientEnd = canvasHeight * 0.5; // 50% of the canvas height
        const gradient = ctx.createLinearGradient(0, 0, 0, '450'); // Adjust according to your chart size
        gradient.addColorStop(1, 'rgba(255, 255, 255, 1)');
        gradient.addColorStop(0, '#fff0d7');

        // Apply gradient as background color
        const chartInstance = new Chart(ctx, {
            type: 'line',
            data: {
                labels: [2017,2018,2019,2020,2021,2022,2023,2024],
                datasets: [
                    {
                        label: 'My second dataset',
                        backgroundColor: gradient,
                        borderColor: '#f6bb19',
                        borderWidth: 2,
                        fill: true,
                        pointBackgroundColor: 'rgba(0, 0, 0, 0)',
                        pointBorderColor: 'rgba(0, 0, 0, 0)',
                        pointHoverBackgroundColor: '#fff',
                        pointHoverBorderColor: 'rgba(0, 0, 0, 0)',
                        data: [20,15,30,40,34,30,20,20],
                        lineTension: 0.4, // Adjust the tension value for smoothness
                        zIndex: 1,
                    }
                ]
            },
            options: {
                plugins: {
                    legend: {
                        display: false,
                    }
                },
                scales: {
                    // yAxes: [{
                    //     ticks: {
                    //         beginAtZero: true
                    //     }
                    // }],
                    // xAxes: [{
                    //     gridLines: {
                    //         z: 99
                    //     }
                    // }],
                    x: {
                        // ticks: {
                        //     display: false // Hide the ticks (labels) on the x-axis
                        // },
                        grid: {
                            display: false,
                            z: 99
                        }
                    },
                    y: {
                        ticks: {
                            beginAtZero: true
                        },
                        grid: {
                            display: true,
                            color: 'rgba(100, 111, 124, .2)',
                            zIndex: 9999,
                            drawOnChartArea: true,
                        },
                    }
                },

            },
        });

        return () => {
            chartInstance.destroy(); // Cleanup chart instance when component unmounts
        };
    }, []);

    return (
        <div className='graph-chart-wrapper'>
            <canvas id="lineChart-cyan" />
        </div>
    );
}