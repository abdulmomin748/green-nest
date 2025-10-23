import React, { use } from 'react';
import { PlantsDataContext } from '../AppContext/AppContext';
import PlantItemCard from './PlantItemCard';

const TopRatedIndPlants = () => {
    const plantsData = use(PlantsDataContext);
    
    return (
        <div className='c-container'>
            <h2 className='text-center text-5xl mb-8 pt-20'>Top Rated Plants</h2>
            <p className='max-w-[700px] w-full m-auto text-center mb-5'>Explore our top-rated plants, handpicked by plant lovers for their stunning appearance, air-purifying qualities, and low-maintenance nature. Perfect for beginners and experts alike!</p>

            <div className='grid grid-cols-1 lg:grid-cols-3 gap-5'>
                {
                    plantsData.slice(0,3).map(plantItem => < PlantItemCard plantItem ={plantItem} />)
                }
            </div>
        </div>
    );
};

export default TopRatedIndPlants;