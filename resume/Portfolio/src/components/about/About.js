import React from 'react';
import './about.css'
import I from '../header/assets/I.png'
import {MdDone} from 'react-icons/md'


const About = () => {
    return (
        <section id='about'>
            <h5 className='know'> Get To Know</h5>
            <h2>About Me</h2>
            <div className='container about__container'>
                <div className="about__me">
                    <div className="about__me-img">
                        <img src={I} alt='About Img'/>
                    </div>
                </div>
                <div className="about__content">
                    <div className="about__cards">
                        <p className='paragraph'><MdDone/>With over 5 years of experience, I am dedicated to solving complex problems and enhancing
                            user experiences through the proficient utilization of the latest front-end web technologies
                            and collaborative full-stack architecture discussions.</p>
                        <p className='paragraph'><MdDone/>I care about business needs, understand the importance of my work, and accept my role
                            with full responsibility.</p>
                        <p className='paragraph'><MdDone/>I successfully led the transition from Ant Design UI library to Material UI library, resulting in
                            improved client satisfaction, streamlined development processes, enhanced customization
                            and flexibility of forms and inputs, and faster page loading times.</p>
                        <p className='paragraph'><MdDone/>I am experienced in integrating various APIs, including Google Maps for navigation, Stripe
                            for finance, and Twilio for telephony.</p>
                        <p className='paragraph'><MdDone/>I also executed a seamless migration from Rest API architecture to GraphQL, significantly
                            improving development efficiency, code generation, and operational speed.</p>
                        <p className='paragraph'><MdDone/>I thrive in a positive work environment and actively contribute to the onboarding of new team
                            members.</p>
                    </div>
                </div>
            </div>

        </section>
    );
};

export default About;
