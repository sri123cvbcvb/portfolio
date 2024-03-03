import Projects from './Projects';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5, faCss3, faJava, faReact } from '@fortawesome/free-brands-svg-icons';

function Services() {



  return (
    <section className="w3l-stats py-lg-5 py-4" id="stats">
    <div className="gallery-inner container py-md-5 py-4">
    <h2 className="title" style={{ marginLeft: '35rem' }}>Skills</h2>
      <div className="row stats-con">
        <div className="col-sm-3 col-6 stats_info counter_grid">
        <FontAwesomeIcon icon={faHtml5} style={{ color: 'orange',  fontSize: '4em' }} />
          <h4>HTML5</h4>
        </div>
        <div className="col-sm-3 col-6 stats_info counter_grid1">
        <FontAwesomeIcon icon={faCss3} style={{ color: 'orange',  fontSize: '4em' }} />
          <h4>CSS3</h4>
        </div>
        <div className="col-sm-3 col-6 stats_info counter_grid mt-sm-0 mt-5">
        <FontAwesomeIcon icon={faJava} style={{ color: 'orange',  fontSize: '4em' }} />
          <h4>JAVA</h4>
        </div>
        <div className="col-sm-3 col-6 stats_info counter_grid2 mt-sm-0 mt-5">
        <FontAwesomeIcon icon={faReact} style={{ color: 'orange',  fontSize: '4em' }} />
          <h4>REACT JS</h4>
        </div>
      </div>
    </div>
   <Projects/>
  </section>
  
  );
}

export default Services;
