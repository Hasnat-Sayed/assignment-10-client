import React from 'react';
import Slider from '../components/Slider';
import PopularServices from '../components/PopularServices';
import WhyAdopt from '../components/WhyAdopt';
import MeetHeros from '../components/MeetHeros';
import Category from '../components/Category';

const Home = () => {
    return (
        <div>
            <Slider></Slider>
            {/* <PopularServices></PopularServices> */}
            <Category></Category>
            <WhyAdopt></WhyAdopt>
            <MeetHeros></MeetHeros>
        </div>
    );
};

export default Home;