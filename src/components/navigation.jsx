import "../assets/css/styles.css"


function Navigation() {
  
    return (
      <>
    <section className="navigation">
        <div className="nav-header bg-light">
            <div className="container-fluid">
                <div className='d-flex justify-content-between align-items-center'>
                    <div className="p-2"><a className="navbar-brand" href="#"><img src="./assets/logo/wecc-nobackground.png" height="100" alt="" /></a></div>
                    {/* <div className="p-2 text-end">
                        <div className="d-inline-block mx-3 compact align-middle">
                            <a href="https://www.facebook.com/profile.php?id=100063979907207" target="_blank" className="me-2 text-dark "><i className="facebook fab fa-facebook-f fa-2x me-1"></i></a>
                            <a href="https://www.linkedin.com/company/indonesian-young-scientist-association-iysa" target="_blank" className="me-2 text-dark linkedin"><i className="fab fa-linkedin-in fa-2x me-1"></i></a>
                            <a href="https://www.instagram.com/iysa_official/?hl=id" target="_blank" className="me-2 text-dark instagram"><i className="fab fa-instagram fa-2x me-1"></i></a>
                            <a href="https://www.tiktok.com/@iysa.official" target="_blank" className="me-2 text-dark tiktok"><i className="fab fa-tiktok fa-2x me-1"></i></a>
                        </div>
                    </div> */}
                    <div className="media-icons">
                    <a href="https://www.facebook.com/profile.php?id=100063979907207" target="_blank"><i className="fab fa-facebook-f"></i></a>
                    <a href="https://www.instagram.com/iysa_official/?hl=id" target="_blank"><i className="fab fa-instagram"></i></a>
                    <a href="https://www.youtube.com/@IYSAOfficial" target="_blank"><i className="fab fa-youtube"></i></a>
                    <a href="https://www.tiktok.com/@iysa.official" target="_blank"><i className="fab fa-tiktok"></i></a>
                    <a href="https://www.linkedin.com/company/indonesian-young-scientist-association-iysa" target="_blank"><i className="fab fa-linkedin"></i></a>
                </div> 
                </div>
            </div>
        </div>
        <div className="nav-bottom fontStyle2">
            <button type="button" data-bs-toggle="collapse" data-bs-target="#bottomNavbar" className="btn w-100 d-lg-none d-md-none d-sm-block d-xs-block rounded-0 p-2">
                <i className="fas fa-bars me-2"></i> Menu
            </button>
            <div className="collapse navbar-collapse px-2" id="bottomNavbar">
                <div className="container-fluid">
                    <div className="d-flex justify-content-between align-items-center" id="removeFlex">
                        <div className="flex-grow-1">
                            <a href="/" className="d-inline-block customNav">Home</a>
                            <a href="/#About" className="d-inline-block customNav">About</a>
                            <a href="/#category" className="d-inline-block customNav">Category</a>
                            <a href="/faq" className="d-inline-block customNav">FAQ</a>
                            <a href="/contact" className="d-inline-block customNav">Contact</a>
                            <a href="/Poster" className="d-inline-block customNav">Poster Layout</a>
                            {/* <a className="dropdown d-inline-block">
                                <button className="btn btn-secondary dropdown-toggle customNav" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    List of Winners
                                </button>
                                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                    <a className="dropdown-item" href="#">2024</a>
                                </div>
                            </a> */}
                        </div>
                        {/* <div className="m-3">
                            <i className="fas fa-search text-white fs-6"></i>
                        </div> */}
                    </div>
                </div>
            </div>
        </div>
    </section>
      </>
    )
  }
  
  export default Navigation