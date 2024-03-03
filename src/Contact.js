import React from 'react';
 import { useRef } from 'react';
 import emailjs from '@emailjs/browser';
const Contact = () => {
  const form = useRef()

  
    
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_393sn1e', 'template_dlbhewj', form.current, {
        publicKey: 'tSICrIY7iC1d1tuya',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
      e.target.reset();
  };
  
  
  return (
    <>
      {/* contact breadcrumb */}
      <section className="w3l-about-breadcrumb text-center">
        <div className="breadcrumb-bg breadcrumb-bg-about py-sm-5 py-4">
          <div className="container py-2">
            <h2 className="title">Contact Me</h2>
            <ul className="breadcrumbs-custom-path mt-2">
              <li><a href="#url">Home</a></li>
              <li className="active"><span className="fa fa-arrow-right mx-2" aria-hidden="true"></span> Contact </li>
            </ul>
          </div>
        </div>
      </section>
      {/* contact breadcrumb */}

      {/* contact block */}
      {/* contact1 */}
      <section className="w3l-contact-1 py-5">
        <div className="contacts-9 py-lg-5 py-md-4">
          <div className="container">
            <div className="d-grid contact-view">
              <div className="cont-details">
                <div className="cont-top">
                  <div className="cont-left text-center">
                    <span className="fa fa-phone text-primary"></span>
                  </div>
                  <div className="cont-right">
                    <h6>Call Me</h6>
                    <p><a href="tel:+44 99 555 42">+91 6382485813</a></p>
                  </div>
                </div>
                <div className="cont-top margin-up">
                  <div className="cont-left text-center">
                    <span className="fa fa-envelope-o text-primary"></span>
                  </div>
                  <div className="cont-right">
                    <h6>Email Me</h6>
                    <p><a href="mailto:example@mail.com" className="mail">sriramjeeva01@gmail.com</a></p>
                  </div>
                </div>
                <div className="cont-top margin-up">
                  <div className="cont-left text-center">
                    <span className="fa fa-map-marker text-primary"></span>
                  </div>
                  <div className="cont-right">
                    <h6>Location</h6>
                    <p>Address here, chrompet, chennai - 600044.</p>
                  </div>
                </div>
              </div>
              <div className="map-content-9">
                <form ref={form} onSubmit={sendEmail}>
                  <div className="twice-two">
                    <input type="text" className="form-control" name="Name" id="w3lName" placeholder="Name" required="" />
                    <input type="email" className="form-control" name="Email" id="w3lSender" placeholder="Email" required="" />
                  </div>
                  <div className="twice">
                    <input type="text" className="form-control" name="Subject" id="w3lSubject" placeholder="Subject" required="" />
                  </div>
                  <textarea name="message" className="form-control" id="w3lMessage" placeholder="Message" required=""></textarea>
                  <div className="text-right">
                    <button type="submit" className="btn btn-primary btn-style mt-4">Send Message</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* /contact1 */}
    </>
  );
};

export default Contact;
