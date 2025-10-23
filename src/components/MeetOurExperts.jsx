import React, { useEffect, useState } from 'react';
import ExpertCadItem from './ExpertCadItem';

const MeetOurExperts = () => {
    const [expertP,setExpertP] = useState([]);
        useEffect(() => {
    
            fetch('/experts.json')
            .then(res => res.json())
            .then(data => setExpertP(data))
    
        },[])
        console.log(expertP );
        
    return (
        <div>
            <div className='c-container'>
                <h2 className='text-center text-5xl mb-6 pt-30'>Meet Our Green Experts</h2>
                <p className='max-w-[700px] w-full m-auto text-center mb-10'>Meet the dedicated professionals behind our mission to make plant care simple, sustainable, and enjoyable for everyone</p>

                <div className='grid grid-cols-1 lg:grid-cols-3 gap-5'>
                    {
                        expertP.map(expertItem => <ExpertCadItem expertItem={expertItem} />
                        )
                    }
                </div>
            </div>
        </div>
    );
};

export default MeetOurExperts;