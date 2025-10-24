import React from 'react';
import Hero from '../components/Hero';
import TopRatedIndPlants from '../components/TopRatedIndPlants';
import PlantsCare from '../components/PlantsCare';
import MeetOurExperts from '../components/MeetOurExperts';
import FeaturedPlantItem from './FeaturedPlantItem';

const Home = () => {
    return (
        <div>
            <Hero />
            <FeaturedPlantItem />
            <TopRatedIndPlants />
            <PlantsCare />
            <MeetOurExperts />
        </div>
    );
};

export default Home;