
import resume from '../src/resume/resume.pdf';

function About(){
    
    return(
        <section className="w3l-index3" id="about">
        <div className="midd-w3 py-5">
          <div className="container py-lg-5 py-md-3">
            <div className="row">
              <div className="col-lg-4">
                <div className="position-relative">
                  <img src="../sriram.png" alt="" className="radius-image img-fluid" />
                </div>
              </div>
              <div className="col-lg-8 mt-lg-0 mt-5">
                <h5 className="title-small mb-2">Who am i?</h5>
                <h3 className="title-big">I'm Sriram, a Web Developer</h3>
                <p className="mt-4">Welcome! I'm a seasoned software
developer with 2 years of experience,
dedicated to crafting impactful solutions
in the tech landscape. With a strong
foundation in Java, Spring Boot, MySQL,
HTML, CSS, and JavaScript, my expertise
lies in crafting efficient and elegant code
that stands the test of time.</p>
                <a href={resume} download="Resume" className="btn btn-style btn-primary mt-lg-5 mt-4">Download Resume</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
}

export default About;