import Navigation from "../../../components/navigation";
import Footer from "../../../components/footer";

function Kategori26() {
  return (
    <>
      <Navigation />
      {/* PAGE HEADER START */}
      <div className="page-header text-center">
        <h1>List of Winners 2026</h1>
        <a href="/lowtahun">Previous Page</a>
      </div>
      {/* PAGE HEADER END */}
      <section className="low-section">
        <div className="text-center">
          <div className="content-title">
            <h1>
              Choose based on the Category of the event you are participating in
            </h1>
          </div>
          <div className="content-button mt-4">
            {/* <a
              href=""
              target="_blank"
              className="btn btn-action btn-lg"
            >
              WECC SPECIAL AWARD
            </a> */}
            <a href="/jenjangofl26" className="btn btn-action btn-lg">
              WECC OFFLINE
            </a>
            <a href="/jenjangonl26" className="btn btn-action btn-lg">
              WECC ONLINE
            </a>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Kategori26;
