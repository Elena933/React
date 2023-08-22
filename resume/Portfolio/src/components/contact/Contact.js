import React from 'react';
import {MdOutlineAlternateEmail} from 'react-icons/md'
import {AiFillLinkedin} from 'react-icons/ai'
import './contact.css'
import  { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_v3xq5nc', 'template_s7kzwap', form.current, 'y9SdIfAIh7sIIA6Ul')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset()
    };
    return (
        <section id='contact'>
            <h5> Get In Touch</h5>
            <h2> Contact Me</h2>
            <div className='container contact__container'>

                <div className="contact__options">
                    <article className='contact__option'>
                        <MdOutlineAlternateEmail className='opt-icon'/>
                        <h4>Email</h4>
                        <h5>23451vbva@gmail.com</h5>
                        <a href='mailto:23451vbva@gmail.com' target='_blank'>Send a message</a>
                    </article>

                    <article className='contact__option'>
                        <AiFillLinkedin className='opt-icon'/>
                        <h4>Linkedin messenger</h4>
                        <h5>Olena Kryvonis</h5>
                        <a href='https://www.linkedin.com/in/olena-kryvonis-973b95208/' target='_blank'>Send a message in Linkedin</a>
                    </article>

                </div>
                <form ref={form} onSubmit={sendEmail}>
                    <input type="text" name='name' placeholder='Your Full Name' required/>
                    <input type="email" name='email' placeholder='Your Email' required/>
                    <textarea name="message"  rows="7" placeholder='Your Message' required></textarea>
                    <button type='submit' className='btn btn-primary'>Send Message</button>
                </form>
            </div>

        </section>
    );
};

export default Contact;
