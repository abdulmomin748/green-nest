import React, { use } from 'react';
import { PlantsDataContext } from '../AppContext/AppContext';
import PlantItemCard from './PlantItemCard';
import { Link } from 'react-router-dom';

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
            <div className='flex justify-center pt-15'>
                    <Link to={`/plants`} className="cursor-pointer bg-green-900 hover:bg-green-600 text-white font-semibold py-3 px-14 rounded-sm transition duration-300 ease-in-out  ">
                        <span>View All plants</span>
                    </Link>
            </div>
        </div>
    );
};

export default TopRatedIndPlants;