import React, { useState } from 'react';
import { FaArrowCircleDown, FaArrowCircleUp, FaArrowDown } from 'react-icons/fa';
import { FaArrowDown19 } from 'react-icons/fa6';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';

const PlantCareCardItm = ({plantCareItem}) => {
    const {details,title,icon,shortDescription} = plantCareItem;
    const [expand,setExpaned] = useState(false)
    return (
        <div className='bg-white rounded-xl shadow-lg overflow-hidden mb-20'>

            <div className="bg-green-700 p-6">
                <div className="flex items-center gap-4">
                    <div className="text-5xl">{icon}</div>
                    <div className="flex-grow">
                        <h2 className="text-2xl font-bold text-white">{title}</h2>
                        <p className="text-blue-100 mt-1">{shortDescription}</p>
                    </div>
                </div>
            </div>
            <div className='p-6'>
                 <button
                    onClick={() => setExpaned(!expand)}
                    className="w-full cursor-pointer flex items-center justify-between text-left mb-4 group"
                >
                    <span className="text-lg font-semibold text-gray-800 ">
                    {expand ? 'Hide Details' : 'View Details'}
                    </span>
                    {<IoIosArrowDown className={`transform transition-transform ${expand ? 'rotate-180' : ''}`} />}
                </button>
                {expand && <div className='animate-fadeIn'>
                    {details.map((details,index) => <div
                        key={index}
                        className="flex items-start gap-3 p-3 bg-green-700 rounded-lg hover:bg-yellow-500 transition-colors mb-2"
                        >
                        <div className="flex-shrink-0 w-6 h-6 bg-white green-700 rounded-full flex items-center justify-center text-sm font-bold mt-0.5">
                            {index + 1}
                        </div>
                        <p className="text-white leading-relaxed">{details}</p>
                    </div>)}
                </div>}

            </div>
        </div>
    );
};

export default PlantCareCardItm;