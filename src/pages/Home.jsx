import React from 'react';
import Hero from '../components/Hero';
import TopRatedIndPlants from '../components/TopRatedIndPlants';
import PlantsCare from '../components/PlantsCare';

const Home = () => {
    return (
        <div>
            <Hero />
            <TopRatedIndPlants />
            <PlantsCare />
        </div>
    );
};

export default Home;