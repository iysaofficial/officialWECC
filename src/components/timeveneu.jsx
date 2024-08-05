function Timevenue() {
  return (
    <>
      <section className="timeveneu-section" id="timeveneu">
        <div className="container">
          <div className="row content">
            <div className="content-image col-lg-6 col-12 text-center">
              <img className="img-fluid mb-lg-5" src="./assets/logo/venue.jpg" alt="" />
              <a className="font-bold text-center">
                Venue Location:{" "}
                <a
                  href="https://maps.app.goo.gl/MhNer5evTCbPf9My7"
                  target="_blank"
                >
                  Click Here
                </a>
              </a>
            </div>
            <div className="content-image col-lg-6 col-12 mt-5 mt-lg-0">
              <img className="img-fluid" src="./assets/logo/time.jpg" alt="" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Timevenue;
