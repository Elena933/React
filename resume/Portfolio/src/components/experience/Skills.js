import React from 'react';
import {BsPatchCheck} from 'react-icons/bs'
import './skills.css'

const Skills = () => {
    return (
        <section id='skills'>
            <h5 className='skill_text'>What Skills I Have</h5>
            <div className='container skills__container'>
                <div className="skills__front">
                    <h3>Frontend Development</h3>
                    <article className='skills__details'>
                        <h4><BsPatchCheck/> HTM</h4>
                    <h4><BsPatchCheck/> CSS</h4>
                    <h4><BsPatchCheck/> JavaScript/TypeScript</h4>
                    <h4><BsPatchCheck/> ReactJS</h4>
                    <h4><BsPatchCheck/> Graph QL</h4>
                    <h4><BsPatchCheck/> Redux/Redux Thunk</h4>
                    <h4><BsPatchCheck/> Axios</h4>
                    <h4><BsPatchCheck/> Material UI/Bootstrap</h4>
                    <h4><BsPatchCheck/> Cypress</h4>
                    <h4><BsPatchCheck/> Figma</h4>
                    </article>


                </div>
                <div className="skills__back">
                    <h3>Backend Development</h3>
                    <article className='skills__details'>
                        <h4><BsPatchCheck/> Node.js</h4>
                        <h4><BsPatchCheck/> Express.js</h4>
                        <h4><BsPatchCheck/> MongoDB</h4>
                        <h4><BsPatchCheck/> My SQL</h4>
                        <h4><BsPatchCheck/> RESTful Web Services/REST API</h4>
                        <h4><BsPatchCheck/>  Jest</h4>
                        <h4><BsPatchCheck/> Graph QL</h4>
                        <h4><BsPatchCheck/>  Git</h4>
                        <h4><BsPatchCheck/> CI/CD</h4>
                    </article>

                </div>
            </div>

        </section>
    );
};

export default Skills;
