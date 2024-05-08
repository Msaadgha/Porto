import React from 'react';
import './projects.css';

const projects = () => {
    return (
    <section id='projects'>
        <h2 className='projecttitle'>My Projects</h2>
        <span className='projectDesc'>I take pride in paying attention to the smallest details and making sure that my work is pixel perfect. I am excited to bring my skills and experience to help businesses achieve their goals and create a strong online presence.</span>
        <div className="projectBars">
                <div className="projectBar">
                   <div className="projectBarText">
                        <h2>Full Stack Project: Household Money Management Website</h2>
                        <p>Developed a web application using React.js and Java for seamless money management within households, catalyzing a 30% increase in user 
engagement.  <br /> Executed intuitive user interfaces and real-time notifications, facilitating a 15% reduction in missed payments. <br /> Technologies Used: React.js, JavaScript, HTML, CSS, API, Java</p>
                    </div>
                </div>
                <div className="projectBar">
                    <div className="projectBarText">
                        <h2>Incomm Capstone Project: Healthcare Innovations</h2>
                        <p>Spearheaded the development of functional prototypes focusing on healthcare innovations, leading to a 40% improvement in patient monitoring 
efficiency.  <br /> Collaborated with interdisciplinary teams to solve innovative technologies, culminating to a 30% increase in healthcare provider productivity. <br />Additional details are protected under the NDA.  </p>
                    </div>
                </div>
            </div>
    </section>
    );
}

export default projects;