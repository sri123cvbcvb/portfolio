import React from 'react';
import Projects from './Projects';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5, faCss3, faJava, faReact } from '@fortawesome/free-brands-svg-icons';

function Services() {
  return (
    <section className="w3l-stats py-lg-5 py-4" id="stats">
      <div className="gallery-inner container py-md-5 py-4">
        <h2 className="title text-center mb-4">Skills</h2>
        <div className="row stats-con">
          <div className="col-lg-3 col-md-6 col-sm-6 stats_info counter_grid">
            <FontAwesomeIcon icon={faHtml5} style={{ color: 'orange', fontSize: '4em' }} />
            <h4 className="mt-3">HTML5</h4>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6 stats_info counter_grid1">
            <FontAwesomeIcon icon={faCss3} style={{ color: 'orange', fontSize: '4em' }} />
            <h4 className="mt-3">CSS3</h4>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6 stats_info counter_grid mt-lg-0 mt-5">
            <FontAwesomeIcon icon={faJava} style={{ color: 'orange', fontSize: '4em' }} />
            <h4 className="mt-3">JAVA</h4>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6 stats_info counter_grid2 mt-lg-0 mt-5">
            <FontAwesomeIcon icon={faReact} style={{ color: 'orange', fontSize: '4em' }} />
            <h4 className="mt-3">REACT JS</h4>
          </div>
        </div>
      </div>
      <Projects />
    </section>
  );
}

export default Services;
