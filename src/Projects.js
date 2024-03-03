import React from 'react';

function Projects() {
  return (
    <>
      <h2 className="title text-center mb-4">Projects</h2>
      <div className="d-flex justify-content-around flex-wrap">
        <div className="card" style={{ width: '18rem', margin: '30px 0' }}>
          <img src="../logo192.png" className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the bulk
              of the card's content.
            </p>
            <button className="btn btn-primary">Go somewhere</button>
          </div>
        </div>

        <div className="card" style={{ width: '18rem', margin: '30px 0' }}>
          <img src="../logo192.png" className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the bulk
              of the card's content.
            </p>
            <button className="btn btn-primary">Go somewhere</button>
          </div>
        </div>

        <div className="card" style={{ width: '18rem', margin: '30px 0' }}>
          <img src="../logo192.png" className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the bulk
              of the card's content.
            </p>
            <button className="btn btn-primary">Go somewhere</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Projects;
