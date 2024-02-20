function Poster() {
  
    return (
      <>
      {/* PAGE HEADER START */}
      <div className="page-header text-center">
        <h1>Poster Layout</h1>
        <a href="/">Home</a>
      </div>
    {/* PAGE HEADER END */}
      <section className="poster-section">
        <div className="container mx-auto text-center row">
            <h2 className="fw-bold">Example of poster layout</h2>
            <div className="col-lg-4 col-md-6">
              <img className="img-fluid" src="./assets/img/BusineesPoster.jpeg" alt="" />
            </div>
            <div className="col-lg-4 col-md-6">
              <img className="img-fluid" src="./assets/img/Research.jpeg" alt="" />
            </div>
            <div className="col-lg-4 col-md-6">
              <img className="img-fluid" src="./assets/img/Commercial.jpeg" alt="" /> 
            </div>
        </div>        
      </section>
      </>
    )
  }
  
  export default Poster