import React from 'react';
import {HiOutlineDotsHorizontal} from 'react-icons/hi'
import './project.css'

const Project = () => {
    return (
        <section id='project'>
            <h5>Projects</h5>
            <h2> I have worked on</h2>

            <div className='container project__container'>
                <article className='projects_item'>
                 <div className='project-first'>
                     <a href='https://hertzfield.com'  >Hertz services INC</a>
                     <p className='project-paragraph'><HiOutlineDotsHorizontal/>
                         Created a reusable library of components and UI web pages using JavaScript web
                         technologies, specializing in ReactJS, resulting in a 40% reduction in development
                         time
                     </p>
                     <p className='project-paragraph'><HiOutlineDotsHorizontal/>
                         Collaborated with the product team to develop engaging and responsive websites for
                         product companies, resulting in a 15% increase in customer engagement
                     </p>
                     <p className='project-paragraph'><HiOutlineDotsHorizontal/>
                         Migrated existing REST APIs to GraphQL and customized them with React.js,
                         Node.js, and Express.js
                     </p>
                     <p className='project-paragraph'> <HiOutlineDotsHorizontal/>
                         Maintained up-to-date documentation and conducted thorough testing after every
                         update
                     </p>
                 </div>

                </article>

                <article className='projects_item'>
                    <div className='project-second'>
                        <a href='https://wallstickers4you.com/' >Wallstickers4you</a>
                        <p className='project-paragraph'><HiOutlineDotsHorizontal/>
                            Built new entities and scalable components for different purposes. Designed created and usefull privileges and ranking the products.
                            Rebuild a massive part of an old-written code in React and Redux.
                            As a result, improved the loading speed at least 2 times.
                            This increased the sales in 5 times during first 6 weeks.
                            Refactoring the class components to functional throughout the project’s client side..
                        </p>
                        <p className='project-paragraph'><HiOutlineDotsHorizontal/>
                            I switched from Ant Design, which didn’t work well with multiple function forms and was difficult to maintain, to Material UI, which was smoothly implemented, within 2 weeks for a couple of components a day.
                            This led to increase in loading time, and more than 5000 positive feedback from customers.
                        </p>
                    </div>

                </article>

                <article className='projects_item'>
                    <div className='project-third'>
                        <a href='https://kompot.us/' >Kompot</a>
                        <p className='project-paragraph'><HiOutlineDotsHorizontal/>
                            Transferred application forms to React Hook Form state management using Yup for
                            advanced validation
                        </p>
                        <p className='project-paragraph'><HiOutlineDotsHorizontal/>
                            Integrated Google Maps API to enable Google autocomplete functionality and reduce
                            address entry errors by 15%
                        </p>
                        <p className='project-paragraph'><HiOutlineDotsHorizontal/>
                            Improved, optimized, and simplified a significant portion of legacy code using React
                            hooks
                        </p>
                    </div>

                </article>
            </div>

        </section>
    );
};

export default Project;
