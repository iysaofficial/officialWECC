function Timevenue() {
  return (
    <>
      <section className="about-section" id="About">
        <div className="container">
          <div className="row">
            <div className="content-image col-lg-6 col-12">
              <img className="img-fluid" src="./assets/logo/venue.jpg" alt="" />
              <a className="font-bold mt-5">
                Venue Location:{" "}
                <a
                  href="https://maps.app.goo.gl/MhNer5evTCbPf9My7"
                  target="_blank"
                >
                  Click Here
                </a>
              </a>
            </div>
            <div className="content-image col-lg-6 col-12">
              <img className="img-fluid" src="./assets/logo/time.jpg" alt="" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Timevenue;
