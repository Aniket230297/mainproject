import React from 'react'
import { Line } from 'react-chartjs-2'
import {Chart as ChartJS} from 'chart.js/auto';

function Linechart({chartData, priceType, multiAxis}) {
    const options={
        plugins:{
            legend:{
                display:multiAxis ? true: false,
            }
        },
        responsive:true,
        interactions:{
                mode:"index",
                intersect:false,
        },
        scales: {
            y: {
                ticks: {
                    // Include a dollar sign in the ticks
                    callback: function(value, index, ticks) {
                        return '$' + value.toLocaleString();
                    }
                }
            }
        }
    }
  return <Line data={chartData} options={options} />
}

export default Linechart;