import Navigation from "../../../components/navigation";
import Footer from "../../../components/footer";

function Jenjangofl26() {
  return (
    <>
      <Navigation />
      {/* PAGE HEADER START */}
      <div className="page-header text-center">
        <h1>List of Winners 2026</h1>
        <a href="/kategori26">Previous Page</a>
      </div>
      {/* PAGE HEADER END */}
      <section className="low-section">
        <div className="text-center">
          <div className="content-title">
            <h1>
              Choose based on the Level of the Offline event you are
              participating in
            </h1>
          </div>
          <div className="content-button mt-4">
            <a
              href="#"
              target="_blank"
              className="btn btn-action btn-lg"
            >
              Senior High School
            </a>
            {/* <a
              href=""
              target="_blank"
              className="btn btn-action btn-lg"
            >
              Junior High School
            </a> */}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Jenjangofl26;
