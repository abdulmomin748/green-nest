import React, { use } from 'react';
import { PlantsDataContext } from '../AppContext/AppContext';
import PlantItemCard from '../components/PlantItemCard';

const Plants = () => {
    const plantsData = use(PlantsDataContext);
    return (
        <div className='pb-20'>
            <div className='c-container'>
            <h2 className='text-center text-5xl mb-8 pt-20'>Explore Our Green Collection</h2>
            <p className='max-w-[700px] w-full m-auto text-center mb-15'>Browse through our wide range of beautiful plants — from low-maintenance succulents to lush tropical favorites. There’s a perfect plant for everyone!</p>

            <div className='grid grid-cols-1 lg:grid-cols-3 gap-5'>
                {
                    plantsData.map(plantItem => < PlantItemCard plantItem ={plantItem} />)
                }
            </div>
        </div>
        </div>
    );
};

export default Plants;