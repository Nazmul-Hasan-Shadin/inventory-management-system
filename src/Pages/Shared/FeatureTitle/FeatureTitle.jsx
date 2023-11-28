import React from 'react';

const FeatureTitle = ({heading,colorHeading,text}) => {
    return (
        <div className='my-14'>
                        <div className='text-center'>
            <h3 className='text-5xl'> {heading} <span className='text-[#FF792E]'>Features</span></h3>
            <p className=' text-sm lg:text-xl '>
                {text}
         </p>
            </div>
        </div>
    );
};

export default FeatureTitle;