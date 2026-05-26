import Navigation from "../../../components/navigation";
import Footer from "../../../components/footer";

function Jenjangonl26() {
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
              Choose based on the Level of the Online event you are
              participating in
            </h1>
          </div>
          <div className="content-button mt-4">
            <a
              href="https://drive.google.com/file/d/1vtFXQoZ7ncTGc6iK2KM4-05iny0C1gCX/view?usp=sharing"
              target="_blank"
              className="btn btn-action btn-lg"
            >
              University.
            </a>
            <a
              href="https://drive.google.com/file/d/1FYyX3qbbkzN8yVJgmD4S3AMeSjILbyQp/view?usp=sharing"
              target="_blank"
              className="btn btn-action btn-lg"
            >
              Secondary
            </a>
            <a
              href="https://drive.google.com/file/d/13ZDAtXgTggyx5sWfMh7bMPcDpUQSwFJd/view?usp=drive_link"
              target="_blank"
              className="btn btn-action btn-lg"
            >
              Public
            </a>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Jenjangonl26;
