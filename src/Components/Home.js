import React from 'react';
import './Home.css'
import Scroll from './Scroll';
import { IoColorWandOutline } from "react-icons/io5";
import { FaLinkedin } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import BigCard from './BigCard';
// import BigCard from './BigCard';

function Home() {
    return (
        <div className='Home_container'>
            <div className='Chart_content'>
            </div>
       

            <h1 className='sub_title'> <IoColorWandOutline style={{ marginRight: '10px' }} fontSize={23} />AI Recommendations</h1>
            <div className='Ai_container'>
                <Scroll
                    Title="Social Selling"
                    icon={<FaLinkedin style={{marginRight:"10px"}} />}
                />
                <Scroll
                    Title="Client Outreach"
                    icon={<FaEnvelope style={{marginRight:"10px"}} />}
                />
                <div className='thought_leadership_container'>
                    <h1 className='thought_leadership_container_title'>Thought Leadership</h1>

                <div className='BigCard_container'>
                    <span className='bigCard_container_top_box'> <p></p></span>
                    <BigCard/>
                    <BigCard/>
           
                </div>
                </div>
            </div>



        </div>
    )
}

export default Home