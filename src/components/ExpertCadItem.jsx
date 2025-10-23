import React from 'react';

const ExpertCadItem = ({expertItem}) => {
    const {name,image,title} = expertItem;
    console.log(name,image,title);
    
    
    return (
        <div className=" bg-gray-100 flex items-center justify-center p-4">
            <div className="bg-white rounded-lg shadow-lg p-6 max-w-sm w-full">
                <img
                src={image}
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                />
                
                <h2 className="text-2xl font-bold text-gray-800 text-center mb-2">
                {title}
                </h2>
                
                {/* Specialization */}
                <p className="text-gray-600 text-center mb-6">
                {title}
                </p>
                
                {/* Button */}
                <button className="w-full cursor-pointer bg-green-600 hover:bg-green-700 text-white font-semibold py-3 rounded-lg transition">
                Contact Expert
                </button>
            </div>
        </div>
    );
};

export default ExpertCadItem;