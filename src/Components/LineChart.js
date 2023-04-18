import React from 'react';
import "chart.js/auto";
import { Line } from 'react-chartjs-2'



function LineChart() {

    const data = {
        labels: ['Comcast', 'Thomson Reuters', 'Warner Bros. Discovery', 'Paramount Global', 'Naspers', 'FOX Corp', 'News Corp', 'IACI', 'Nexstar Media Group', 'The New York Times Company'],
        datasets: [{
            label: "",
            data: [200, 48.5, 45.2, 22.1, 21.8, 19.1, 10.4, 7.8, 7.1, 5, 8],
            backgroundColor: ["#3B7DBA","#3B7DBA"],
            borderColor: "transparent",
            tension: 0.2,
            fill: true,
            pointStyle: 'rect',
            pointBorderColor: 'black',
            pointBackgroundColor: '#fff',
            showLine: false,
            drawBorder: false,
            borderWidth: 1,
            display: false

        }]
    }

    return (
        <div className='Charts_background'>

            <Line
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
                        x:{
                            ticks:{
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

export default LineChart

