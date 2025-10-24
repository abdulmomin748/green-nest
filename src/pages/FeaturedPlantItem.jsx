import React, { use } from 'react';
import { FaDroplet } from 'react-icons/fa6';
import { PlantsDataContext } from '../AppContext/AppContext';
import { FaAward, FaLeaf, FaSun } from 'react-icons/fa';

const FeaturedPlantItem = () => {

    const plantsData = use(PlantsDataContext);    
    const featuredPlant = plantsData.find(plantItem => plantItem?.isFeatured == true);
    console.log(featuredPlant);
    

    return (
        <div>
            <div className="p-5 mt-10">
                <div className="max-w-4xl mx-auto">
                    
                    <div className="text-center mb-8">
                        <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-green-500 to-emerald-600 text-white px-6 py-2 rounded-full mb-4">
                            <FaAward className="w-5 h-5" />
                            <span className="font-semibold">Featured This Week</span>
                        </div>
                        <h1 className="text-4xl font-bold mb-2">Plant of the Week</h1>
                        <p className="text-slate-600">Discover this week's amazing plant pick</p>
                    </div>

                    <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                    {/* Image */}
                    <img
                        src={featuredPlant?.image}
                        alt={featuredPlant?.plantName}
                        className="w-full h-64 object-cover"
                    />

                    {/* Content */}
                    <div className="p-6">
                        <h2 className="text-2xl font-bold text-slate-900 mb-3">
                        {featuredPlant?.plantName}
                        </h2>
                        
                        <p className="text-slate-600 mb-6">
                        {featuredPlant?.description}
                        </p>

                        {/* Care Info */}
                        <div className="grid grid-cols-3 gap-4 mb-6">
                        <div className="text-center p-4 bg-blue-50 rounded-lg">
                            <FaDroplet className="w-6 h-6 text-blue-500 mx-auto mb-2" />
                            <p className="text-xs text-slate-600 mb-1">Water</p>
                            <p className="text-sm font-semibold text-slate-900">{featuredPlant?.water}</p>
                        </div>

                        <div className="text-center p-4 bg-yellow-50 rounded-lg">
                            <FaSun className="w-6 h-6 text-yellow-500 mx-auto mb-2" />
                            <p className="text-xs text-slate-600 mb-1">Light</p>
                            <p className="text-sm font-semibold text-slate-900">{featuredPlant?.bright}</p>
                        </div>

                        <div className="text-center p-4 bg-green-50 rounded-lg">
                            <FaLeaf className="w-6 h-6 text-green-500 mx-auto mb-2" />
                            <p className="text-xs text-slate-600 mb-1">Level</p>
                            <p className="text-sm font-semibold text-slate-900">{featuredPlant?.careLevel}</p>
                        </div>
                        </div>

                        {/* Button */}
                        <button className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-3 rounded-lg transition-colors">
                        Learn More
                        </button>
                    </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default FeaturedPlantItem;