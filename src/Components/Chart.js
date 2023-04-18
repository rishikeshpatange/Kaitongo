import React from 'react';
import './Chart.css'
import LineChart from './LineChart';
import BarChart from './BarChart';
import { Heatmap } from 'reaviz';


const data = [
    {
        key: 'event',
        data: [
            {
                key: 'company 1',
                data: 0
            },
            {
                key: 'company 2',
                data: 10
            },
            {
                key: 'company 3',
                data: 20
            },
            {
                key: 'company 4',
                data: 30
            },
            {
                key: 'company 5',
                data: 40
            },
            {
                key: 'company 6',
                data: 50
            },
            {
                key: 'company 7',
                data: 60
            },
            {
                key: 'company 8',
                data: 70
            },
            {
                key: 'company 9',
                data: 80
            },
            {
                key: 'company 10',
                data: 100
            },
        ]
    },
    {
        key: 'event 2',
        data: [
            {
                key: 'company 1',
                data: 100
            },
            {
                key: 'company 2',
                data: 34
            },
            {
                key: 'company 3',
                data: 0
            },
            {
                key: 'company 4',
                data: 0
            },
            {
                key: 'company 5',
                data: 0
            },
            {
                key: 'company 6',
                data: 0
            },
            {
                key: 'company 7',
                data: 0
            },
            {
                key: 'company 8',
                data: 0
            },
            {
                key: 'company 9',
                data: 0
            },
            {
                key: 'company 10',
                data: 0
            },
        ]
    },
    {
        key: 'event 3',
        data: [
            {
                key: 'company 1',
                data: 100
            },
            {
                key: 'company 2',
                data: 34
            },
            {
                key: 'company 3',
                data: 0
            },
            {
                key: 'company 4',
                data: 0
            },
            {
                key: 'company 5',
                data: 0
            },
            {
                key: 'company 6',
                data: 0
            },
            {
                key: 'company 7',
                data: 0
            },
            {
                key: 'company 8',
                data: 0
            },
            {
                key: 'company 9',
                data: 0
            },
            {
                key: 'company 10',
                data: 0
            },
        ]
    }
    ,
    {
        key: ' event 4',
        data: [
            {
                key: 'company 1',
                data: 100
            },
            {
                key: 'company 2',
                data: 34
            },
            {
                key: 'company 3',
                data: 0
            },
            {
                key: 'company 4',
                data: 0
            },
            {
                key: 'company 5',
                data: 0
            },
            {
                key: 'company 6',
                data: 0
            },
            {
                key: 'company 7',
                data: 0
            },
            {
                key: 'company 8',
                data: 0
            },
            {
                key: 'company 9',
                data: 0
            },
            {
                key: 'company 10',
                data: 0
            },
        ]
    },
    {
        key: ' event 5',
        data: [
            {
                key: 'company 1',
                data: 100
            },
            {
                key: 'company 2',
                data: 34
            },
            {
                key: 'company 3',
                data: 0
            },
            {
                key: 'company 4',
                data: 0
            },
            {
                key: 'company 5',
                data: 0
            },
            {
                key: 'company 6',
                data: 0
            },
            {
                key: 'company 7',
                data: 0
            },
            {
                key: 'company 8',
                data: 0
            },
            {
                key: 'company 9',
                data: 0
            },
            {
                key: 'company 10',
                data: 0
            },
        ]
    },
    {
        key: ' event 6',
        data: [
            {
                key: 'company 1',
                data: 100
            },
            {
                key: 'company 2',
                data: 34
            },
            {
                key: 'company 3',
                data: 0
            },
            {
                key: 'company 4',
                data: 0
            },
            {
                key: 'company 5',
                data: 0
            },
            {
                key: 'company 6',
                data: 0
            },
            {
                key: 'company 7',
                data: 0
            },
            {
                key: 'company 8',
                data: 0
            },
            {
                key: 'company 9',
                data: 0
            },
            {
                key: 'company 10',
                data: 0
            },
        ]
    },
    {
        key: ' event 7',
        data: [
            {
                key: 'company 1',
                data: 100
            },
            {
                key: 'company 2',
                data: 34
            },
            {
                key: 'company 3',
                data: 0
            },
            {
                key: 'company 4',
                data: 0
            },
            {
                key: 'company 5',
                data: 0
            },
            {
                key: 'company 6',
                data: 0
            },
            {
                key: 'company 7',
                data: 0
            },
            {
                key: 'company 8',
                data: 0
            },
            {
                key: 'company 9',
                data: 0
            },
            {
                key: 'company 10',
                data: 0
            },
        ]
    },
    {
        key: ' event 8',
        data: [
            {
                key: 'company 1',
                data: 100
            },
            {
                key: 'company 2',
                data: 34
            },
            {
                key: 'company 3',
                data: 0
            },
            {
                key: 'company 4',
                data: 0
            },
            {
                key: 'company 5',
                data: 0
            },
            {
                key: 'company 6',
                data: 0
            },
            {
                key: 'company 7',
                data: 0
            },
            {
                key: 'company 8',
                data: 0
            },
            {
                key: 'company 9',
                data: 0
            },
            {
                key: 'company 10',
                data: 0
            },
        ]
    },
    {
        key: ' event 9',
        data: [
            {
                key: 'company 1',
                data: 100
            },
            {
                key: 'company 2',
                data: 34
            },
            {
                key: 'company 3',
                data: 0
            },
            {
                key: 'company 4',
                data: 0
            },
            {
                key: 'company 5',
                data: 0
            },
            {
                key: 'company 6',
                data: 0
            },
            {
                key: 'company 7',
                data: 0
            },
            {
                key: 'company 8',
                data: 0
            },
            {
                key: 'company 9',
                data: 0
            },
            {
                key: 'company 10',
                data: 0
            },
        ]
    },
    {
        key: ' event 10',
        data: [
            {
                key: 'company 1',
                data: 100
            },
            {
                key: 'company 2',
                data: 34
            },
            {
                key: 'company 3',
                data: 0
            },
            {
                key: 'company 4',
                data: 0
            },
            {
                key: 'company 5',
                data: 0
            },
            {
                key: 'company 6',
                data: 0
            },
            {
                key: 'company 7',
                data: 0
            },
            {
                key: 'company 8',
                data: 0
            },
            {
                key: 'company 9',
                data: 0
            },
            {
                key: 'company 10',
                data: 0
            },

        ]

    },

];
const data2 = [
    {
        key: 'Topic',
        data: [
            {
                key: 'company 1',
                data: 100
            },
            {
                key: 'company 2',
                data: 34
            },
            {
                key: 'company 3',
                data: 0
            },
            {
                key: 'company 4',
                data: 0
            },
            {
                key: 'company 5',
                data: 0
            },
            {
                key: 'company 6',
                data: 0
            },
            {
                key: 'company 7',
                data: 0
            },
            {
                key: 'company 8',
                data: 0
            },
            {
                key: 'company 9',
                data: 0
            },
            {
                key: 'company 10',
                data: 0
            },
        ]
    },
    {
        key: 'Topic 2',
        data: [
            {
                key: 'company 1',
                data: 100
            },
            {
                key: 'company 2',
                data: 34
            },
            {
                key: 'company 3',
                data: 0
            },
            {
                key: 'company 4',
                data: 0
            },
            {
                key: 'company 5',
                data: 0
            },
            {
                key: 'company 6',
                data: 0
            },
            {
                key: 'company 7',
                data: 0
            },
            {
                key: 'company 8',
                data: 0
            },
            {
                key: 'company 9',
                data: 0
            },
            {
                key: 'company 10',
                data: 0
            },
        ]
    },
    {
        key: 'Topic 3',
        data: [
            {
                key: 'company 1',
                data: 100
            },
            {
                key: 'company 2',
                data: 34
            },
            {
                key: 'company 3',
                data: 0
            },
            {
                key: 'company 4',
                data: 0
            },
            {
                key: 'company 5',
                data: 0
            },
            {
                key: 'company 6',
                data: 0
            },
            {
                key: 'company 7',
                data: 0
            },
            {
                key: 'company 8',
                data: 0
            },
            {
                key: 'company 9',
                data: 0
            },
            {
                key: 'company 10',
                data: 0
            },
        ]
    }
    ,
    {
        key: ' Topic 4',
        data: [
            {
                key: 'company 1',
                data: 100
            },
            {
                key: 'company 2',
                data: 34
            },
            {
                key: 'company 3',
                data: 0
            },
            {
                key: 'company 4',
                data: 0
            },
            {
                key: 'company 5',
                data: 0
            },
            {
                key: 'company 6',
                data: 0
            },
            {
                key: 'company 7',
                data: 0
            },
            {
                key: 'company 8',
                data: 0
            },
            {
                key: 'company 9',
                data: 0
            },
            {
                key: 'company 10',
                data: 0
            },
        ]
    },
    {
        key: ' Topic 5',
        data: [
            {
                key: 'company 1',
                data: 100
            },
            {
                key: 'company 2',
                data: 34
            },
            {
                key: 'company 3',
                data: 0
            },
            {
                key: 'company 4',
                data: 0
            },
            {
                key: 'company 5',
                data: 0
            },
            {
                key: 'company 6',
                data: 0
            },
            {
                key: 'company 7',
                data: 0
            },
            {
                key: 'company 8',
                data: 0
            },
            {
                key: 'company 9',
                data: 0
            },
            {
                key: 'company 10',
                data: 0
            },
        ]
    },
    {
        key: ' Topic 6',
        data: [
            {
                key: 'company 1',
                data: 100
            },
            {
                key: 'company 2',
                data: 34
            },
            {
                key: 'company 3',
                data: 0
            },
            {
                key: 'company 4',
                data: 0
            },
            {
                key: 'company 5',
                data: 0
            },
            {
                key: 'company 6',
                data: 0
            },
            {
                key: 'company 7',
                data: 0
            },
            {
                key: 'company 8',
                data: 0
            },
            {
                key: 'company 9',
                data: 0
            },
            {
                key: 'company 10',
                data: 0
            },
        ]
    },
    {
        key: ' Topic 7',
        data: [
            {
                key: 'company 1',
                data: 100
            },
            {
                key: 'company 2',
                data: 34
            },
            {
                key: 'company 3',
                data: 0
            },
            {
                key: 'company 4',
                data: 0
            },
            {
                key: 'company 5',
                data: 0
            },
            {
                key: 'company 6',
                data: 0
            },
            {
                key: 'company 7',
                data: 0
            },
            {
                key: 'company 8',
                data: 0
            },
            {
                key: 'company 9',
                data: 0
            },
            {
                key: 'company 10',
                data: 0
            },
        ]
    },
    {
        key: ' Topic 8',
        data: [
            {
                key: 'company 1',
                data: 100
            },
            {
                key: 'company 2',
                data: 34
            },
            {
                key: 'company 3',
                data: 0
            },
            {
                key: 'company 4',
                data: 0
            },
            {
                key: 'company 5',
                data: 0
            },
            {
                key: 'company 6',
                data: 0
            },
            {
                key: 'company 7',
                data: 0
            },
            {
                key: 'company 8',
                data: 0
            },
            {
                key: 'company 9',
                data: 0
            },
            {
                key: 'company 10',
                data: 0
            },
        ]
    },
    {
        key: ' Topic 9',
        data: [
            {
                key: 'company 1',
                data: 100
            },
            {
                key: 'company 2',
                data: 34
            },
            {
                key: 'company 3',
                data: 0
            },
            {
                key: 'company 4',
                data: 0
            },
            {
                key: 'company 5',
                data: 0
            },
            {
                key: 'company 6',
                data: 0
            },
            {
                key: 'company 7',
                data: 0
            },
            {
                key: 'company 8',
                data: 0
            },
            {
                key: 'company 9',
                data: 0
            },
            {
                key: 'company 10',
                data: 0
            },
        ]
    },
    {
        key: ' Topic 10',
        data: [
            {
                key: 'company 1',
                data: 100
            },
            {
                key: 'company 2',
                data: 34
            },
            {
                key: 'company 3',
                data: 0
            },
            {
                key: 'company 4',
                data: 0
            },
            {
                key: 'company 5',
                data: 0
            },
            {
                key: 'company 6',
                data: 0
            },
            {
                key: 'company 7',
                data: 0
            },
            {
                key: 'company 8',
                data: 0
            },
            {
                key: 'company 9',
                data: 0
            },
            {
                key: 'company 10',
                data: 0
            },
        ]
    },
];


const customColors = ['#e6f7ff', '#bae7ff', '#91d5ff', '#69c0ff', '#40a9ff', '#1890ff', '#096dd9', '#0050b3', '#003a8c', '#002766'];


function Chart() {

    return (
        <div className='Chart_container'>
            <h1 className='trends'>Trends</h1>
            <div class="container">
                <div class="box box1">
                    <p>Top 10 companies by Media Hits </p>
                    <LineChart />

                </div>
                <div class="box box2">
                    <p>Top 5 and Bottom 5 companies by News sentiment </p>

                    <BarChart />
                </div>
            </div>
            <div class="box box3">
                <p>Top 10 - Events and Companies</p>
                <Heatmap
                    colors={customColors}
                    height={250}
                    width={1050}
                    data={data}
                />
            </div>
            <div class="box box3">
                <p>Top 10 - Topics by Companies </p>
                <Heatmap
                    height={250}
                    width={1050}
                    data={data2}
                />
            </div>

        </div>
    )
}

export default Chart