import React, { Component } from 'react'
import './Resume.css';

class Home extends Component {
    render() {
        return (
            <div className = "main-home">
                <div className = "container">
                    <div className =  "row resume">
                        {/* .............................Resume......................... */}
                        <h3>Resume</h3>
                    </div>
                </div>
                <div className = "container">
                    <div className =  "row work">
                        {/* .............................Work Experience............................. */}
                        <div className = "col-lg-6 col-sm-12 padd">
                            <h1>Work</h1>
                            <h1>Experience</h1>
                        </div>
                        <div className = "col-lg-6 col-sm-12 padd">
                            <div className="row">
                                {/* Editor */}
                                <div className = "col-lg-3">
                                    <p>2020 - Present</p>
                                </div>
                                <div className = "col-lg-9">
                                    <h2>Editor</h2>
                                </div>
                            </div>
                            <div className = "row">
                                {/* Editor */}
                                <div className = "col-lg-3">
                                
                                </div>
                                <div className = "col-lg-9 marginb">
                                <p>I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font.</p>
                                </div>
                            </div>
                            <div className = "row">
                                {/* Writer at Large */}
                                <div className = "col-lg-3">
                                    <p>2018 - 2020</p>
                                </div>
                                <div className = "col-lg-9">
                                    <h2>Writer at Large</h2>
                                </div>
                            </div>
                            <div className = "row">
                                {/* Writer at Large */}
                                <div className = "col-lg-3">

                                </div>
                                <div className = "col-lg-9 marginb">
                                    <p>I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font.</p>
                                </div>
                            </div>
                            <div className = "row">
                                {/* Intern */}
                                <div className = "col-lg-3">
                                    <p>2017 - 2018</p>
                                </div>
                                <div className = "col-lg-9">
                                    <h2>Intern</h2>
                                </div>
                            </div>
                            <div className = "row">
                                {/* Intern */}
                                <div className = "col-lg-3">

                                </div>
                                <div className = "col-lg-9 marginb">
                                    <p>I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <hr/>
                <div className = "container">
                    <div className =  "row education">
                        {/* .............................Education............................. */}
                        <div className = "col-lg-6 col-sm-12 padd">
                            <h1>Education</h1>
                        </div>
                        <div className = "col-lg-6 col-sm-12 padd">
                            <div className = "row">
                                <div className = "col-lg-3">
                                    <p>2015 - 2017</p>
                                </div>
                                <div className = "col-lg-9">
                                    <h2>Establishment Name |</h2>
                                    <h2>Master’s Degree</h2>
                                </div>
                            </div>
                            <div className = "row">
                                <div className = "col-lg-3">

                                </div>
                                <div className = "col-lg-9 marginb">
                                    <p>I'm a paragraph. Click here to add your own text and edit me. Let your users get to know you.</p>
                                </div>
                            </div>
                            <div className = "row">
                                <div className = "col-lg-3">
                                    <p>2012 - 2015</p>
                                </div>
                                <div className = "col-lg-9">
                                    <h2>Establishment Name |</h2>
                                    <h2>Bachelor's Degree</h2>
                                </div>
                            </div>
                            <div className = "row">
                               <div className = "col-lg-3">
                         
                                </div>
                                <div className = "col-lg-9 marginb">
                                    <p>I'm a paragraph. Click here to add your own text and edit me. Let your users get to know you.</p>
                                </div>
                            </div>
                            </div>
                    </div>
                </div>
                <hr />
                <div className = "container">
                    <div className =  "row skills">
                        {/* .............................Skills & Expertise..................... */}
                        <div className = "col-lg-6 col-sm-12 padd">
                            <h1>Skills</h1>
                            <h1>& Expertise</h1>
                        </div>
                        <div className = "col-lg-6 col-sm-12">
                            <div className = "row">
                                <div className = "col-lg-3">

                                </div>
                                <div className = "col-lg-9 marginb">
                                    <ul>
                                        <li>I'm a paragraph. Click here to add your own text and edit me.</li>
                                        <li>I'm a paragraph. Click here to add your own text and edit me.</li>
                                        <li>I'm a paragraph. Click here to add your own text and edit me.</li>
                                        <li>I'm a paragraph. Click here to add your own text and edit me.</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <hr/>
            </div>
        )
    }
}

export default Home
