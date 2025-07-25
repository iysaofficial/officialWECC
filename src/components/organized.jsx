function Organized() {
  return (
    <>
      <section className="organized-section">
        <div className="site-section bg-left-half mb-5">
          <div className="container text-center py-5">
            <h1 className="mb-5 fw-bold">Organized By :</h1>
            <div className="row justify-content-center align-items-center">
              <div className="col-12 col-md-4 mb-4 mb-md-0">
                <div className="content-image">
                  <img
                    src="./assets/logo/LogoIYSA.WebP"
                    alt="Indonesian Young Scientist Association"
                    className="img-fluid"
                    style={{ maxHeight: "120px", objectFit: "contain" }}
                  />
                  <h5 className="mt-3">Indonesian Young Scientist Association</h5>
                </div>
              </div>
              <div className="col-12 col-md-4 mb-4 mb-md-0">
                <div className="content-image">
                  <img
                    src="./assets/logo/logoudinus.png"
                    alt="Universitas Dian Nuswantoro"
                    className="img-fluid"
                    style={{ maxHeight: "120px", objectFit: "contain" }}
                  />
                  <h5 className="mt-3">Universitas Dian Nuswantoro</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default Organized;