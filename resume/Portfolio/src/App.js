import './App.scss';

import Header from "./components/header/Header";
import Project from "./components/experience/Project";
import Skills from "./components/experience/Skills";
import Contact from "./components/contact/Contact";
import Nav from "./components/nav/Nav";
import About from "./components/about/About";
import Footer from "./components/footer/Footer";


function App() {
    return (
        <div className='app'>
            <Nav/>
            <Header/>
           <About/>
            <Skills/>
            <Project/>
            <Contact/>
            <Footer/>
        </div>


    )
}

export default App;
