import React from 'react';

const FeatureTitle = ({heading,colorHeading,text}) => {
    return (
        <div className='my-14'>
                        <div className='text-center'>
            <h3 className='text-3xl'> {heading} <span className='text-[#FF792E]'>Features</span></h3>
            <p>
                {text}
         </p>
            </div>
        </div>
    );
};

export default FeatureTitle;