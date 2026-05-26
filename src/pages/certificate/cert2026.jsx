import Navigation from "../../components/navigation";
import Footer from "../../components/footer";

function Cert2026() {
  return (
    <>
      <Navigation />
      {/* PAGE HEADER START */}
      <div className="page-header text-center">
        <h1>Certificate Supervisor 2026</h1>
        <a href="/">Previous Page</a>
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
            <a href="https://drive.google.com/drive/folders/1yMgn8--B5BhPctdjY-D4Wy1fAzKC7dtI?usp=sharing" target="_blank" className="btn btn-action btn-lg">
              ONLINE CERTIFICATE
            </a>
            <a href="https://drive.google.com/drive/folders/1xF0P-_dj-kvUoT7WFeJVCG1-FOUX_z97?usp=sharing" target="_blank" className="btn btn-action btn-lg">
              OFFLINE CERTIFICATE
            </a>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Cert2026;
