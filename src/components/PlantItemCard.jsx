import React from 'react';
import { FaStar } from 'react-icons/fa';

const PlantItemCard = ({plantItem}) => {
    const {image,plantName,price,rating,topRated} = plantItem;
    return (
        <div className=''>
            <div className="bg-white rounded-lg shadow-md">
                <div className="relative h-48 rounded-t-lg sm:h-56 overflow-hidden">
                    <img 
                    src={image} 
                    alt={plantName}
                    className="w-full h-full object-cover"
                    />
                </div>
                <div className="p-4 sm:p-6 ">
                    <h3 className="text-lg  flex justify-between sm:text-xl font-bold text-gray-800 mb-2">
                        {plantName}
                        <span className='flex text-yellow-500 justify-center items-center li'>
                            <FaStar className='mr-1'></FaStar>
                            {rating}
                        </span>
                    </h3>
                    
                    <div className="flex items-center justify-between mb-4">
                        <span className="inline-block px-3 py-1 bg-green-50 text-green-700 rounded-full text-sm font-medium">
                            Indor Tree
                        </span>
                        <span className="text-xl sm:text-2xl font-bold text-green-700">
                            ৳{price}
                        </span>
                    </div>
                    
                    <button className="w-full bg-green-700 hover:bg-green-800 text-white font-semibold py-3 px-4 rounded-lg transition duration-300 ease-in-out transform hover:scale-105">
                        <span>View Details</span>
                    </button>

                </div>
            </div>
        </div>
    );
};

export default PlantItemCard;