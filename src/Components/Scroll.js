import React from 'react';
import Carousel from 'react-elastic-carousel';
import './Scroll.css'


const breakPoints = [
    { width: 1, itemsToShow: 3 },
    { width: 550, itemsToShow: 3 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 3 },
]


function Scroll({ Title, icon }) {
    return (
        <div className='scroll_container'>
            <p className='scroll_title'>{Title}</p>

            <Carousel breakPoints={breakPoints} showArrows={false}>

                <div className='card_container'>  <div class="card" style={{ width: "20rem" }}>
                    <img src="/Images/card2.jpg" class="card-img-top" alt="..." />
                    <div class="card-body">
                        <h4 class="card-title">City Lights in New York</h4>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content and are required to do both <p className='ReadMore_btn'>..Read More</p> </p>
                        <a href="/" class="btn btn-primary">{icon} Generate</a>
                    </div>
                </div></div>
                <div className='card_container'>  <div class="card" style={{ width: "20rem" }}>
                    <img src="/Images/card2.jpg" class="card-img-top" alt="..." />
                    <div class="card-body">
                        <h4 class="card-title">City Lights in New York</h4>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content and are required to do both <p className='ReadMore_btn'>..Read More</p> </p>
                        <a href="/" class="btn btn-primary">{icon} Generate</a>
                    </div>
                </div></div>
                <div className='card_container'>  <div class="card" style={{ width: "20rem" }}>
                    <img src="/Images/card2.jpg" class="card-img-top" alt="..." />
                    <div class="card-body">
                        <h4 class="card-title">City Lights in New York</h4>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content and are required to do both <p className='ReadMore_btn'>..Read More</p> </p>
                        <a href="/" class="btn btn-primary">{icon} Generate</a>
                    </div>
                </div></div>
            
             
            </Carousel>



        </div>
    )
}

export default Scroll