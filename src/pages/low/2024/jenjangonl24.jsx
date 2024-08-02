import Navigation from "../../../components/navigation";
import Footer from "../../../components/footer";

function Jenjangonl24() {
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
              Choose based on the Level of the Online event you are
              participating in
            </h1>
          </div>
          <div className="content-button mt-4">
            <a
              href="https://drive.google.com/file/d/1TWKSEOfJ32LvGSkRil2-AcoR846yXeLi/view?usp=sharing"
              target="_blank"
              className="btn btn-action btn-lg"
            >
              University
            </a>
            <a
              href="https://drive.google.com/file/d/1uSZ1Bcw09uzISOHMy-47mNgYSTzry7ul/view?usp=sharing"
              target="_blank"
              className="btn btn-action btn-lg"
            >
              Senior High School
            </a>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Jenjangonl24;
