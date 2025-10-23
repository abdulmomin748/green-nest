import React from 'react';
import Hero from '../components/Hero';
import TopRatedIndPlants from '../components/TopRatedIndPlants';
import PlantsCare from '../components/PlantsCare';
import MeetOurExperts from '../components/MeetOurExperts';

const Home = () => {
    return (
        <div>
            <Hero />
            <TopRatedIndPlants />
            <PlantsCare />
            <MeetOurExperts />
        </div>
    );
};

export default Home;