


function Projects(){
    return(
        <>
        <h2 className="title" style={{ marginLeft: '45rem' }}>Projects</h2>
        <div style={{position: 'relative', display: "flex", justifyContent: 'space-between', paddingInline: '100px'}}>
            <div className="card" style={{ width: '18rem', marginTop: '30px' }}>
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
        <div className="card" style={{ width: '18rem', marginTop: '30px' }}>
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
        <div className="card" style={{ width: '18rem', marginTop: '30px' }}>
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
    )
}
export default Projects;