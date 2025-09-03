import Navigation from "../../../components/navigation";
import Footer from "../../../components/footer";

function Jenjangonl25() {
  return (
    <>
      <Navigation />
      {/* PAGE HEADER START */}
      <div className="page-header text-center">
        <h1>List of Winners 2025</h1>
        <a href="/kategori25">Previous Page</a>
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
              href="https://drive.google.com/file/d/17h0iBuC5I1mXCeGFtjgdWnFKv5ktJoQr/view?usp=sharing"
              target="_blank"
              className="btn btn-action btn-lg"
            >
              University
            </a>
            <a
              href="https://drive.google.com/file/d/1HgIWPCih0bgYQx96f9x0xLFHsa8mgabk/view?usp=sharing"
              target="_blank"
              className="btn btn-action btn-lg"
            >
              Secondary
            </a>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Jenjangonl25;
