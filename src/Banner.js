import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import resume from '../src/resume/resume.pdf';
function Banner(){
  
  
    const [text, setText] = useState('');
    const [index, setIndex] = useState(0);
    const [forward, setForward] = useState(true);
  
    // Array containing the text to be typed
    const textsToType = ["Web Developer", "Java Developer", "Software Developer"];
  
    useEffect(() => {
      const interval = setInterval(() => {
        if (forward) {
          // Typing forward
          if (text.length < textsToType[index].length) {
            setText(prevText => prevText + textsToType[index][prevText.length]);
          } else {
            setForward(false);
          }
        } else {
          // Typing backward (backspace)
          if (text.length > 0) {
            setText(prevText => prevText.slice(0, -1));
          } else {
            setForward(true);
            setIndex(prevIndex => (prevIndex + 1) % textsToType.length);
          }
        }
      }, 100); // Change this value to adjust typing speed
  
      return () => clearInterval(interval);
    }, [text, forward, index, textsToType]); 
    return(
        <section id="home" className="w3l-banner py-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-sm-12 mt-lg-0 mt-4">
              <span className="title-small">Hello</span>
              <h1 className="mb-2 title"> <span>I'm</span> Sriram </h1>
              <h1 className="mb-4 title"> a <span className="typed-text">{text}</span><span className="cursor">&nbsp;</span></h1>
              <p>Welcome! I'm a seasoned software
developer with 2 years of experience,
dedicated to crafting impactful solutions
in the tech landscape. With a strong
foundation in Java, Spring Boot, MySQL,
HTML, CSS, and JavaScript, my expertise
lies in crafting efficient and elegant code
that stands the test of time.</p>
              <div className="mt-sm-5 mt-4">
                <Link className="btn btn-primary btn-style mr-2" to="/contact">Hire Me</Link>
                <a className="btn btn-outline-primary btn-style mr-2" href={resume} download="Resume">Resume</a>
               
              </div>
            </div>
            <div className="col-lg-6 col-md-8 col-sm-10 mt-lg-0 mt-4">
              <div className="img-effect text-lg-center">
                <img src="../sriram.png" alt="myphoto" className="img-fluid" />
              </div>
            </div>
          </div>
        </div>
      </section> 
    )
}
export default Banner;