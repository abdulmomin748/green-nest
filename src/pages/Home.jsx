import React, { use, useContext, useEffect } from 'react';
import Hero from '../components/Hero';
import TopRatedIndPlants from '../components/TopRatedIndPlants';
import PlantsCare from '../components/PlantsCare';
import MeetOurExperts from '../components/MeetOurExperts';
import FeaturedPlantItem from './FeaturedPlantItem';
import { LoadingContext } from '../AppContext/AppContext';

const Home = () => {

    const {loading, startLoading, stopLoading} = useContext(LoadingContext);
    
    useEffect(() =>{
        startLoading();
        const timer = setTimeout(() => {
            stopLoading();
        }, 700);
         return () => clearTimeout(timer);
    },[])

    if(loading){
        
    return <div className='flex justify-center items-center h-[500px]'>
            <div class="loader"></div>
        </div>
    
    }
    document.title = "Home Page";
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