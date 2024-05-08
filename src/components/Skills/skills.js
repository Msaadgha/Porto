import React from "react";
import './skills.css';

const Skills = () => {
    return (
        <section id='skills'>
            <span className="skillTitle">What I do</span>
            <span className="skillDesc">I am a software engineer with a solid academic foundation and hands-on experience in both sales and software development. Holding a Bachelor of Science in 
Software Engineering from Kennesaw State University and backed by certifications in Web Development, Python for Data Science and AI, and Introduction to 
Cloud Computing from Coursera, I possess a diverse skill set to tackle complex challenges. My dedication to innovation fuels my drive to deliver impactful 
solutions that spur business growth. </span>
            <div className="skillBars">
                <div className="skillBar">
                   <div className="skillBarText">
                        <h2>Programming Languages</h2>
                        <p>Java <br />Python <br /> C# <br /> R Programming</p>
                    </div>
                </div>
                <div className="skillBar">
                    <div className="skillBarText">
                        <h2>Web Development</h2>
                        <p>HTML5 <br />CSS3 <br /> JavaScript(React.js)</p>
                    </div>
                </div>
                <div className="skillBar">
                    <div className="skillBarText">
                        <h2>Software Development</h2>
                        <p>Object-Oriented Programming(OOP) <br /> Agile Methodologies</p>
                    </div>
                </div>
                <div className="skillBar">
                    <div className="skillBarText">
                        <h2>Database</h2>
                        <p>SQL <br />MongoDB <br />Oracle</p>
                    </div>
                </div>
                <div className="skillBar">
                    <div className="skillBarText">
                        <h2>Tools/IDE</h2>
                        <p>Eclipse <br />IDLE <br />Visual Studio <br />IntelliJ <br />React.js</p>
                    </div>
                </div>
                <div className="skillBar">
                    <div className="skillBarText">
                        <h2>Software Engineering Concepts</h2>
                        <p>Data Structure <br />Algorithms <br />Software Architecture</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Skills; 
