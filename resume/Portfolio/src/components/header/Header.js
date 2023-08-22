import React from 'react';
import CTA from "./CTA";
import me from '../header/assets/me.jpg'
import HeaderSocial from "./HeaderSocial";
import "./header.css"


const Header = () => {
    return (
        <header className='container'>
            <div className='container header__container'>
                <h5> Hello I''m</h5>
                <h1>Olena Kryvonis</h1>
                <h5 className='text-light'>Front End Developer</h5>
                <div className="ME">
                    <img src={me} alt='me'/>
                </div>
                <CTA/>
                <HeaderSocial/>

                </div>
                <a href='#contact' className='scroll_down'>Scroll Down</a>

        </header>
    );
};

export default Header;
