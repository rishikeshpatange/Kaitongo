import React from 'react';
import "chart.js/auto";
import { Bar } from 'react-chartjs-2'



const data = {
    labels: ['Comcast', 'Thomson Reuters', 'Warner Bros. Discovery', 'Paramount Global', 'Naspers', 'FOX Corp', 'News Corp', 'IACI', 'Nexstar Media Group', 'The New York Times Company'],
    datasets: [{
        label: "",
        data: [50, 40, 30, 20, 10, -10 , -20 , -30 , -40, -50],
        backgroundColor: ["#031429","#031429","#031429","#031429","#031429","#3B7DBA","#3B7DBA","#3B7DBA","#3B7DBA","#3B7DBA",],
        borderColor: "transparent",
        tension: 0.4,
        fill: true,
        pointStyle: 'rect',
        pointBackgroundColor: '#fff',
        showLine: false,
        drawBorder: false,
        borderWidth: 1,
        display: false

    },
],
    
}

function BarChart() {
    return (
        <div className='Charts_background'>
            <Bar
                data={data}
                height={450}
                width={550}
                options={{
                    maintainAspectRatio: true,
                    scales: {
                        y: [
                            {
                                ticks: {
                                    beginAtZero: true,
                                },
                            },
                        ],
                        x: {
                            ticks: {
                                display: true
                            }
                        }
                    },
                    legend: {
                        labels: {
                            fontSize: 25,
                        },
                    },
                }}
            />
        </div>
    )
}

export default BarChart