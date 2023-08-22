import React from 'react';
import CV from '../header/assets/CV.pdf'

const CTA = () => {
    return (
        <div className='cta'>
            <a href= {CV} download className='btn'> Download CV</a>
            <a href= '#contact' className=' btn btn-primary'> Chat</a>

        </div>
    );
};

export default CTA;
