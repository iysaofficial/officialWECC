import Navigation from "../../components/navigation";
import Footer from "../../components/footer";

function ListNews() {
  return (
    <>
      <Navigation />
      {/* PAGE HEADER START */}
      <div className="page-header text-center">
        <h1>News</h1>
        <a href="/">Home</a>
      </div>
      {/* PAGE HEADER END */}
      <section className="news-section">
        <div className="text-center">
          <h1 className="fw-bold">News 2025</h1>
          <div className="wrapper row">
            {/* NEWS 1 START */}
            <div className="col-lg-3 card">
              <img
                className="img-fluid mb-2"
                src="./assets/news/20251.jpg"
                alt=""
              />
              <h5>
                GloCoLiS, ISPC, and WECC 2025 Successfully Held at Dian Nuswantoro University, Semarang
              </h5>
              <p>
                {" "}
                Jabaran.id – The Indonesian Young Scientist Association (IYSA) has once again successfully held three prestigious international competitions, namely GloCoLiS (Global Competition for Life Sciences), International Social Project Competition (ISPC), and World Essay Competition Championship (WECC). This year marks a special milestone with
                the 5th anniversary of GloCoLiS, as well as the 2nd anniversary of ISPC and WECC.Translated with DeepL.com (free version)
              </p>
              <a
                href="https://jabaran.id/glocolis-ispc-dan-wecc-2025-sukses-diselenggarakan-di-universitas-dian-nuswantoro-semarang/"
                target="_blank"
                className="btn btn-action"
              >
                See More
              </a>
            </div>
            {/* NEWS 1 END */}
          </div>
        </div>
      </section>
      <section className="news-section">
        <div className="text-center">
          <h1 className="fw-bold">News 2024</h1>
          <div className="wrapper row">
            {/* NEWS 1 START */}
            <div className="col-lg-3 card">
              <img
                className="img-fluid mb-2"
                src="./assets/news/Tigaevent.Webp"
                alt=""
              />
              <h5>
                Three Big Events from IYSA, Participated by Various Countries
              </h5>
              <p>
                {" "}
                Closing out the month of July 2024, the Indonesian Young
                Scientist Association (IYSA) organized three new events: the
                JNSF, the JISF, and WECC. These three events are in
                collaboration with one of the universities in Jakarta, the
                Indonesia International Institute for Life Sciences (i3L)
                campus.
              </p>
              <a
                href="https://jabaran.id/tiga-event-besar-dari-iysa-diikuti-berbagai-negara/"
                target="_blank"
                className="btn btn-action"
              >
                See More
              </a>
            </div>
            {/* NEWS 1 END */}

            {/* NEWS 2 START */}
            <div className="col-lg-3 card">
              <img
                className="img-fluid mb-2"
                src="./assets/news/Smpn1Ampana.Webp"
                alt=""
              />
              <h5>
                SMPN 1 Ampana Kota, Participate in IYSA, JNSF, JISF and WECC
                Events
              </h5>
              <p>
                {" "}
                SMP Negeri 1 Ampana Kota, Tojo Unauna Regency (Touna)
                participated in the Indonesia Young Science Association (IYSA)
                event in the Jakarta National Science Fair (JNSF), Jakarta
                International Science Fair (JISF), and World Economic Challenge
                and Competition (WECC), at the Indonesia International Institute
                For Life Science (I3L) Jakarta, recently.
              </p>
              <a
                href="https://mercusuar.web.id/touna/smpn-1-ampana-kota-ikuti-ajang-iysa-jnsf-jisf-dan-wecc/"
                target="_blank"
                className="btn btn-action"
              >
                See More
              </a>
            </div>
            {/* NEWS 2 END */}

            {/* NEWS 3 START */}
            <div className="col-lg-3 card">
              <img
                className="img-fluid mb-2"
                src="./assets/news/Unusida.Webp"
                alt=""
              />
              <h5>Unusida student wins silver medal at WECC 2024</h5>
              <p>
                {" "}
                Students of Universitas Nahdlatul Ulama Sidoarjo (Unusida) have
                again achieved international achievements. This time, Unusida
                students won a silver medal in the Business Plan International
                World Economics Challenge and Competition (WECC) 2024.
              </p>
              <a
                href="https://beritajatim.com/mahasiswa-unusida-raih-medali-silver-di-wecc-2024"
                target="_blank"
                className="btn btn-action"
              >
                See More
              </a>
            </div>
            {/* NEWS 3 END */}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default ListNews;
