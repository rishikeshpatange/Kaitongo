import React, { useState } from 'react';
import './InsightsHub.css';
import LineChart from './LineChart.js'
import BarChart from './BarChart.js'

import { Heatmap } from 'reaviz';

const data = [
    {
        key: 'Topic 1',
        data: [
            {
                key: 'Company 2',
                data: 0
            },
            {
                key: 'Company 2',
                data: 120
            },
            {
                key: 'Company 3',
                data: 120
            },
            {
                key: 'Company 4',
                data: 150
            },
            {
                key: 'Company 5',
                data: 0
            },
            {
                key: 'Company 6',
                data: 120
            },
            {
                key: 'Company 7',
                data: 150
            },
            {
                key: 'Company 8',
                data: 0
            },
            {
                key: 'Company 9',
                data: 120
            },
            {
                key: 'Company 10',
                data: 150
            },

        ]
    },
    {
        key: 'Topic 2',
        data: [
            {
                key: 'Company 2',
                data: 0
            },
            {
                key: 'Company 2',
                data: 120
            },
            {
                key: 'Company 3',
                data: 120
            },
            {
                key: 'Company 4',
                data: 150
            },
            {
                key: 'Company 5',
                data: 0
            },
            {
                key: 'Company 6',
                data: 120
            },
            {
                key: 'Company 7',
                data: 150
            },
            {
                key: 'Company 8',
                data: 0
            },
            {
                key: 'Company 9',
                data: 120
            },
            {
                key: 'Company 10',
                data: 150
            },

        ]
    },
    {
        key: 'Topic 3',
        data: [
            {
                key: 'Company 2',
                data: 0
            },
            {
                key: 'Company 2',
                data: 120
            },
            {
                key: 'Company 3',
                data: 120
            },
            {
                key: 'Company 4',
                data: 150
            },
            {
                key: 'Company 5',
                data: 0
            },
            {
                key: 'Company 6',
                data: 120
            },
            {
                key: 'Company 7',
                data: 150
            },
            {
                key: 'Company 8',
                data: 0
            },
            {
                key: 'Company 9',
                data: 120
            },
            {
                key: 'Company 10',
                data: 150
            },

        ]
    },
    {
        key: 'Topic 4',
        data: [
            {
                key: 'Company 2',
                data: 0
            },
            {
                key: 'Company 2',
                data: 120
            },
            {
                key: 'Company 3',
                data: 120
            },
            {
                key: 'Company 4',
                data: 150
            },
            {
                key: 'Company 5',
                data: 0
            },
            {
                key: 'Company 6',
                data: 120
            },
            {
                key: 'Company 7',
                data: 150
            },
            {
                key: 'Company 8',
                data: 0
            },
            {
                key: 'Company 9',
                data: 120
            },
            {
                key: 'Company 10',
                data: 150
            },

        ]
    },
    {
        key: 'Topic 5',
        data: [
            {
                key: 'Company 2',
                data: 0
            },
            {
                key: 'Company 2',
                data: 120
            },
            {
                key: 'Company 3',
                data: 120
            },
            {
                key: 'Company 4',
                data: 150
            },
            {
                key: 'Company 5',
                data: 0
            },
            {
                key: 'Company 6',
                data: 120
            },
            {
                key: 'Company 7',
                data: 150
            },
            {
                key: 'Company 8',
                data: 0
            },
            {
                key: 'Company 9',
                data: 120
            },
            {
                key: 'Company 10',
                data: 150
            },

        ]
    },
    {
        key: 'Topic 6',
        data: [
            {
                key: 'Company 2',
                data: 0
            },
            {
                key: 'Company 2',
                data: 120
            },
            {
                key: 'Company 3',
                data: 120
            },
            {
                key: 'Company 4',
                data: 150
            },
            {
                key: 'Company 5',
                data: 0
            },
            {
                key: 'Company 6',
                data: 120
            },
            {
                key: 'Company 7',
                data: 150
            },
            {
                key: 'Company 8',
                data: 0
            },
            {
                key: 'Company 9',
                data: 120
            },
            {
                key: 'Company 10',
                data: 150
            },

        ]
    },
    {
        key: 'Topic 7',
        data: [
            {
                key: 'Company 2',
                data: 0
            },
            {
                key: 'Company 2',
                data: 120
            },
            {
                key: 'Company 3',
                data: 120
            },
            {
                key: 'Company 4',
                data: 150
            },
            {
                key: 'Company 5',
                data: 0
            },
            {
                key: 'Company 6',
                data: 120
            },
            {
                key: 'Company 7',
                data: 150
            },
            {
                key: 'Company 8',
                data: 0
            },
            {
                key: 'Company 9',
                data: 120
            },
            {
                key: 'Company 10',
                data: 150
            },

        ]
    },
    {
        key: 'Topic 8',
        data: [
            {
                key: 'Company 2',
                data: 0
            },
            {
                key: 'Company 2',
                data: 120
            },
            {
                key: 'Company 3',
                data: 120
            },
            {
                key: 'Company 4',
                data: 150
            },
            {
                key: 'Company 5',
                data: 0
            },
            {
                key: 'Company 6',
                data: 120
            },
            {
                key: 'Company 7',
                data: 150
            },
            {
                key: 'Company 8',
                data: 0
            },
            {
                key: 'Company 9',
                data: 120
            },
            {
                key: 'Company 10',
                data: 150
            },

        ]
    },
    {
        key: 'Topic 9',
        data: [
            {
                key: 'Company 2',
                data: 0
            },
            {
                key: 'Company 2',
                data: 120
            },
            {
                key: 'Company 3',
                data: 120
            },
            {
                key: 'Company 4',
                data: 150
            },
            {
                key: 'Company 5',
                data: 0
            },
            {
                key: 'Company 6',
                data: 120
            },
            {
                key: 'Company 7',
                data: 150
            },
            {
                key: 'Company 8',
                data: 0
            },
            {
                key: 'Company 9',
                data: 120
            },
            {
                key: 'Company 10',
                data: 150
            },

        ]
    },
    {
        key: 'Topic 10',
        data: [
            {
                key: 'Company 2',
                data: 0
            },
            {
                key: 'Company 2',
                data: 120
            },
            {
                key: 'Company 3',
                data: 120
            },
            {
                key: 'Company 4',
                data: 150
            },
            {
                key: 'Company 5',
                data: 0
            },
            {
                key: 'Company 6',
                data: 120
            },
            {
                key: 'Company 7',
                data: 150
            },
            {
                key: 'Company 8',
                data: 0
            },
            {
                key: 'Company 9',
                data: 120
            },
            {
                key: 'Company 10',
                data: 150
            },

        ]
    },

];


function InsightsHub() {
    const [activeSubMenu, setActiveSubMenu] = useState(0);

    const handleSubMenuClick = (subMenuIndex) => {
        setActiveSubMenu(subMenuIndex);
    }
    return (
        <div className='InsightsHub'>
            <div className="submenu-container">
                <div className="submenu">
                    <button
                        className={`submenu-button ${activeSubMenu === 0 ? 'active' : ''}`}
                        onClick={() => handleSubMenuClick(0)}
                    >
                        My Topics
                    </button>
                    <button
                        className={`submenu-button ${activeSubMenu === 1 ? 'active' : ''}`}
                        onClick={() => handleSubMenuClick(1)}
                    >
                        My Company
                    </button>
                </div>
                <div className="content">
                    <div className="content-section" style={{ display: activeSubMenu === 0 ? 'block' : 'none' }}>
                        <div className="container">
                            <div className="box1">
                                <p>Top 10 companies by Media Hits</p>
                                <LineChart
                                     height={200}
                                     width={450}
                                
                                 />
                            </div>
                            <div className="box2">
                                <p>Top 5 and Bottom 5 companies by News sentiment</p>
                                <BarChart />
                            </div>
                        </div>
                        <div className='heatmap_container'>
                            <p>Top 10 - Topics by companies</p>
                            <Heatmap
                                height={300}
                                width={1250}
                                data={data}
                            />
                        </div>

                    </div>



                    <div className="content-section" style={{ display: activeSubMenu === 1 ? 'block' : 'none' }}>
                        <div className="container">
                            <div className="box1">
                                <LineChart />
                            </div>
                            <div className="box2">
                                <BarChart />
                            </div>
                        </div>
                        <div className='heatmap_container'>
                            <Heatmap
                                height={300}
                                width={1250}
                                data={data}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default InsightsHub