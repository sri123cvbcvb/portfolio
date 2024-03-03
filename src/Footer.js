import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faFacebook, faInstagram, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';


function Footer(){
  const linkedInProfileUrl = 'https://www.linkedin.com/in/sriram-j-659635266';
  window.onscroll = function () {
    scrollFunction()
  };

  function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      document.getElementById("movetop").style.display = "block";
    } else {
      document.getElementById("movetop").style.display = "none";
    }
  }
    function topFunction() {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
      }
    return(
<section className="w3l-footer py-sm-5 py-4">
        <div className="container">
          <div className="footer-content">
            <div className="row">
              <div className="col-lg-8 footer-left">
                <p className="m-0" style={{ marginLeft: '100px' }}>Sriram © Copyright 2024.</p>
              </div>
              <div className="col-lg-4 footer-right text-lg-right text-center mt-lg-0 mt-3">
                <ul className="social m-0 p-0">
                  <li><a href="#facebook"><FontAwesomeIcon icon={faFacebook} style={{ color: 'orange'}} /></a></li>
                  <li><a href={linkedInProfileUrl} target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faLinkedin} style={{ color: 'orange'}} /></a></li>
                  <li><a href="#instagram"><FontAwesomeIcon icon={faInstagram} style={{ color: 'orange'}} /></a></li>
                  <li><a href="#twitter"><FontAwesomeIcon icon={faTwitter} style={{ color: 'orange'}} /></a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Move to top button */}
        <button onClick={topFunction} id="movetop" title="Go to top">
        <FontAwesomeIcon icon={faArrowUp} style={{ color: 'orange'}} />
        </button>
      </section>
    )
}

export default Footer;