import React from 'react';
import Slider from '../components/Slider';
import WhyAdopt from '../components/WhyAdopt';
import MeetHeros from '../components/MeetHeros';
import Category from '../components/Category';
import Recent6 from '../components/Recent6';

const Home = () => {
    return (
        <div>
            <Slider></Slider>
            <Category></Category>
            <Recent6></Recent6>
            <WhyAdopt></WhyAdopt>
            <MeetHeros></MeetHeros>
            
        </div>
    );
};

export default Home;