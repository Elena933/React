import React from 'react';
import './footer.css'

const Footer = () => {
    return (
        <footer>
           <ul className='links'>
               <li><a href='#'>Home</a></li>
               <li><a href='#About'>About</a></li>
               <li><a href='#Skills'>Skills</a></li>
               <li><a href='#Contact'>Contact</a></li>
           </ul>
            <div className='footer-copy'>
                <small>&copy; Olena Kryvonis. All rights reserved </small>

            </div>

        </footer>

    );
};

export default Footer;
