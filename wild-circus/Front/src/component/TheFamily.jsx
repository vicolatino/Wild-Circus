import React from "react";
import './CssForAll.css';
import './TheFamily.css'


function TheFamily(){
    return(
        <div>
            <div>
                <h1>THE FAMILY</h1>
            </div>
            <div className='FamilyContainer Flex SpaceAround'>
                <div className='Flex Column ItemCenter'>
                    <img src="https://zupimages.net/up/20/05/zfg7.jpg" alt="TheClown"/>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut veritatis dolores quisquam quod esse explicabo reprehenderit? Dicta sint, id quae laborum ea quia eius officia maiores? Corporis quasi vitae dignissimos?</p>
                    <img src="https://zupimages.net/up/20/05/5ww9.jpg" alt="YoungBoy"/>
                </div>
                <div className='Flex Column ItemCenter'>
                    <img src="https://zupimages.net/up/20/05/7uoy.jpg" alt="woman suitcase"/>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum cum incidunt eaque enim id officia, ullam minima, dignissimos ab harum vero. Amet molestiae obcaecati illum sit dicta nulla, minima illo!</p>
                    <img src="https://zupimages.net/up/20/05/oal4.jpg" alt="Family picture"/>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis quasi ab iure, neque molestias mollitia sunt eum magni enim ratione. Eos deleniti ipsam alias! Sunt, ipsam! Ut molestiae a beatae.</p>
                </div>
                <div className='Flex Column ItemCenter'>
                    <img src="https://zupimages.net/up/20/05/ktxs.jpg" alt="trapezist"/>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum voluptatum qui recusandae hic eaque minima omnis cum nihil, quisquam adipisci impedit maiores obcaecati nulla minus, quam nam saepe at commodi?</p>
                    <img className='WomenTiger' src="https://zupimages.net/up/20/05/6knl.jpg" alt="tiger Women"/>
                </div>
            </div>
        </div>
    )
};

export default TheFamily ;