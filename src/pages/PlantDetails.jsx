import React, { use } from 'react';
import { useParams } from 'react-router-dom';
import { PlantsDataContext } from '../AppContext/AppContext';
import Swal from 'sweetalert2';
import { FaStar } from 'react-icons/fa';

const PlantDetails = () => {
    const {id} = useParams();
    const plansData = use(PlantsDataContext);
    
    const filterPlantItem = plansData.find(plantItem => plantItem.plantId == id);
    console.log(filterPlantItem);
    const {plantName,image,details,price,rating,availableStock,category} = filterPlantItem
    
    const handleBookNow = e => {
        e.preventDefault();
        Swal.fire({
            title: "Book Completed!",
            icon: "success"
        });
        e.target.name.value =''
        e.target.email.value=''
    }
    
    return (
        <div className='c-container'>
            <div className=' pt-15'>
                <div className='w-full md:w-10/12 m-auto' >
                    <div className='relative'>
                        <h2 className='mb-5 text-5xl font-bold border-b-4 border-yellow-500 inline-block'>{plantName} <span className='text-2xl'>_{category}_</span></h2>
                    </div>
                    <p className='text-3xl font-semibold mb-2'><span className='underline'>Price:</span> <span className='bg-yellow-500 px-5'>{price}</span></p>
                    <p className='text-3xl mb-1 font-semibold flex'><span className='underline'>Rating:</span> <span className=' px-5 flex '><FaStar className='mr-1'/>{rating}</span></p>
                    <p className='text-3xl mb-5 font-semibold'><span className='underline'>Available </span>Stock: <span className='bg-yellow-500 px-5'>{availableStock}</span></p>
                    
                    
                    <div className='relative'>
                        <img className='w-full pb-20 mb-8 mt-10 ' src={image} alt="" srcset="" />
                        <span class="absolute left-1/2 bottom-0 border-dotted w-5/12 h-1 bg-yellow-500 -translate-x-1/2"></span>
                    </div>
                    
                    <div className='mb-20'>
                        {
                        details.map(dItem => <div className='mb-5'>
                            <h6 className='mb-2 text-2xl'>{dItem.title}</h6>
                            <li>{dItem.info}</li>
                        </div>)
                    }
                    <div>
                        <div className=" bg-gray-100 flex items-center mt-10 justify-center sm:p-10 py-5">
                            <div className="bg-white rounded-lg shadow-lg sm:p-8 p-4 max-w-md w-full">
                                <h2 className="text-2xl font-bold text-gray-800 mb-1">
                                Book Consultation
                                </h2>
                                <p className="text-gray-600 mb-6">
                                Fill in your details to schedule a consultation
                                </p>

                                <form onSubmit={handleBookNow}>
                                     <div className="mb-4">
                                <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">
                                    Name
                                </label>
                                <input
                                    required
                                    type="text"
                                    id="name"
                                    name="name"
                                    placeholder="Enter your name"
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                                />
                                </div>

                                {/* Email Field */}
                                <div className="mb-6">
                                <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">
                                    Email
                                </label>
                                <input
                                    required

                                    type="email"
                                    id="email"
                                    name="email"
                                    placeholder="Enter your email"
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                                />
                                </div>

                                {/* Submit Button */}
                                <button
                                type='submit'
                                className="w-full cursor-pointer bg-green-600 hover:bg-green-700 text-white font-semibold py-3 rounded-lg transition"
                                >
                                Book Now
                                </button>
                                </form>
                               

                            </div>
                        </div>
                    </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default PlantDetails;