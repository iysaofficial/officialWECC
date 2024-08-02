import Navigation from "../../../components/navigation";
import Footer from "../../../components/footer";

function Jenjangofl24() {
  return (
    <>
      <Navigation />
      {/* PAGE HEADER START */}
      <div className="page-header text-center">
        <h1>List of Winners 2024</h1>
        <a href="/kategori24">Previous Page</a>
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
              href="https://drive.google.com/file/d/1_CMi4pZzvTFJKrNahTMzhiNkpczNto2B/view?usp=sharing"
              target="_blank"
              className="btn btn-action btn-lg"
            >
              Senior High School
            </a>
            <a
              href="https://drive.google.com/file/d/1-hr-dulxDwdrFZMdvvETz_WHqgtHh-Kh/view?usp=sharing"
              target="_blank"
              className="btn btn-action btn-lg"
            >
              Junior High School
            </a>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Jenjangofl24;
