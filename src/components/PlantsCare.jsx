import React, { useEffect, useState } from 'react';
import PlantCareCardItm from './PlantCareCardItm';
const PlantsCare = () => {
    const [pCareData,setPCareData] = useState([]);
    useEffect(() => {

        fetch('/plantCareTips.json')
        .then(res => res.json())
        .then(data => setPCareData(data))

    },[])
    return (
        <div className='c-container'>
            <h2 className='text-center text-5xl mb-6 pt-30'>Plant Care Tips</h2>
            <p className='max-w-[700px] w-full m-auto text-center mb-10'>New to plant care? Don’t worry! Follow these simple tips to make sure your plants grow strong and stay green all year round.</p>

            <div className='grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-5'>
                {
                    pCareData.map(plantCareItem => <PlantCareCardItm plantCareItem ={plantCareItem} />)
                }
            </div>
        </div>
    );
};

export default PlantsCare;