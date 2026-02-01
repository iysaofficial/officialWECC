import Navigation from "../../components/navigation";
import Footer from "../../components/footer";

function HomeRegist() {
  return (
    <>
      <Navigation />
      {/* PAGE HEADER START */}
      <div className="page-header text-center">
        <div className="divider"></div>
        <h1>Registration</h1>
        <a href="/">Home</a>
      </div>
      {/* PAGE HEADER END */}
      <section className="homeregist-section">
        <div>
          <div className="wrapper">
            <div className="text-center">
              <h1 className="mx-auto">REGISTRATION FORM</h1>
              <h3 className="mx-auto mt-5 mb-2">
                Choose Your Citizenship Category for Registration WECC 2026
              </h3>
            </div>
          </div>
          <div className="link-web mx-auto text-center">
            <a href="/homeindo" className="btn btn-action text-center me-lg-5">
              Indonesian Citizen{" "}
              <i className="fa-solid fa-earth-americas"></i>
            </a>
            <a href="/homeinter" className="btn btn-action text-center me-lg-5">
              International Citizen{" "}
              <i className="fa-solid fa-earth-americas"></i>
            </a>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default HomeRegist;
