import React, { useEffect, useState } from "react";
import "../assets/css/styles.css";

function Navigation() {

    const [isSticky, setIsSticky] = useState(false);

    useEffect(() => {
      const handleScroll = () => {
        const navHeaderHeight = document.querySelector(".nav-header").offsetHeight;
        if (window.scrollY > navHeaderHeight) {
          setIsSticky(true);
        } else {
          setIsSticky(false);
        }
      };
  
      window.addEventListener("scroll", handleScroll);
  
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }, []);

  return (
    <>
      <section className="navigation">
        <div className="nav-header bg-light">
          <div className="container-fluid">
            <div className="d-flex justify-content-between align-items-center">
              <div className="p-2">
                <a className="navbar-brand" href="#">
                  <img
                    src="./assets/logo/wecc-nobackground.png"
                    height="100"
                    alt=""
                  />
                </a>
              </div>
              <div className="media-icons">
                <a
                  href="https://www.facebook.com/profile.php?id=100063979907207"
                  target="_blank"
                >
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a
                  href="https://www.instagram.com/iysa_official/?hl=id"
                  target="_blank"
                >
                  <i className="fab fa-instagram"></i>
                </a>
                <a href="https://www.youtube.com/@IYSAOfficial" target="_blank">
                  <i className="fab fa-youtube"></i>
                </a>
                <a href="https://www.tiktok.com/@iysa.official" target="_blank">
                  <i className="fab fa-tiktok"></i>
                </a>
                <a
                  href="https://www.linkedin.com/company/indonesian-young-scientist-association-iysa"
                  target="_blank"
                >
                  <i className="fab fa-linkedin"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className={`nav-bottom fontStyle2 ${isSticky ? "sticky" : ""}`}>
          <button
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#bottomNavbar"
            className="btn w-100 d-lg-none d-md-none d-sm-block d-xs-block rounded-0 p-2"
          >
            <i className="fas fa-bars me-2"></i> Menu
          </button>
          <div className="collapse navbar-collapse px-2" id="bottomNavbar">
            <div className="container-fluid">
              <div
                className="d-flex justify-content-between align-items-center"
                id="removeFlex"
              >
                <div className="flex-grow-1">
                  <a href="/" className="d-inline-block customNav">
                    Home
                  </a>
                  <a className="dropdown d-inline-block">
                    <button
                      className="btn btn-secondary dropdown-toggle customNav"
                      type="button"
                      id="dropdownMenuButton"
                      data-bs-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      List of Winners
                    </button>
                    <div
                      className="dropdown-menu"
                      aria-labelledby="dropdownMenuButton"
                    >
                      <a className="dropdown-item" href="/kategori24">
                        2024
                      </a>
                    </div>
                  </a>
                  <a className="dropdown d-inline-block">
                    <button
                      className="btn btn-secondary dropdown-toggle customNav"
                      type="button"
                      id="dropdownMenuButton"
                      data-bs-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      Media Coverage
                    </button>
                    <div
                      className="dropdown-menu"
                      aria-labelledby="dropdownMenuButton"
                    >
                      <a
                        href="https://drive.google.com/file/d/1XZ_Vs81A4uEtYZ4gpHMBOicJuRl4BMPj/view?usp=sharing"
                        target="_blank"
                        className="dropdown-item"
                      >
                        Press Release 2024
                      </a>
                    </div>
                  </a>
                  <a href="/Poster" className="d-inline-block customNav">
                    Poster Layout
                  </a>
                  <a className="dropdown d-inline-block">
                    <button
                      className="btn btn-secondary dropdown-toggle customNav"
                      type="button"
                      id="dropdownMenuButton"
                      data-bs-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      Gallery
                    </button>
                    <div
                      className="dropdown-menu"
                      aria-labelledby="dropdownMenuButton"
                    >
                      <a
                        className="dropdown-item"
                        href="https://drive.google.com/drive/folders/1QGL9JxavpwplBKO-NNhHrDg3wjPaGBUG?usp=sharing"
                        target="_blank"
                      >
                        2024
                      </a>
                    </div>
                  </a>
                  <a className="dropdown d-inline-block">
                    <button
                      className="btn btn-secondary dropdown-toggle customNav"
                      type="button"
                      id="dropdownMenuButton"
                      data-bs-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      Certificate
                    </button>
                    <div
                      className="dropdown-menu"
                      aria-labelledby="dropdownMenuButton"
                    >
                      <a
                        href="https://drive.google.com/drive/folders/1yB2PVbW9c5Uj_PGh1cxMoA9Y0JqHsbX3"
                        target="_blank"
                        className="dropdown-item"
                      >
                        Certificate Supervisor 2024
                      </a>
                    </div>
                  </a>
                  <a href="/faq" className="d-inline-block customNav">
                    FAQ
                  </a>
                  <a href="/contact" className="d-inline-block customNav">
                    Contact
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Navigation;

