import React from "react";
import './intro.css';
import About from '../../assests/About.jpg';
import { Link } from 'react-scroll';


const Intro = () => {
    return (
        <section id="intro">
            <div className="introContent">
                <span className="hello">Hello,</span>
                <span className="introText">I'm <span className="introName">Mira</span> <br />Software Engineer</span>
                <p className="introPara">With a proven track record of delivering innovative solutions and a passion for tackling complex challenges, <br /> I am dedicated to driving technological advancement and exceeding expectations as a software engineer.</p>
                <Link><button className="btn">Hire Me</button></Link>
            </div>
            <img src={About} alt="Profile" className="About" />
        </section>
    )
}

export default Intro; 