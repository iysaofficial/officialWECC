

function Footer() {
  
    return (
		
      <>
      <footer className="footer-section">
			<div className="container">
				<div className="row justify-content-center">
					<div className="col-10 col-lg-6">
						<div className="subscribe mb-5">
                            <form action="https://formspree.io/f/xoqoddrr" method="POST" className="subscribe-form">
                                <div className="form-group d-flex">
                                <input type="email" className="form-control rounded-left" placeholder="Enter email address" required name="email"/>
                                <input type="submit" value="Subscribe" className="form-control submit px-3" /> 
                                </div>
                            </form>
						</div>
					</div>
				</div>
				<div className="row">
					<div className="col-md-4 col-lg-5">
						<div className="row">
							<div className="text-footer col-md-12 col-lg-8 mb-md-0 mb-4">
								<h2 className="footer-heading"><a className="logo">WECC</a></h2>
								<p>The World Economics Challenge and Competition (WECC) is an international invention competition specifically for the field of economics. WECC is here to encourage young people to think critically and creatively in dealing with economic issues that arise in the present and future.</p>
								{/* <a href="#">read more <span className="ion-ios-arrow-round-forward"></span></a> */}
							</div>
						</div>
					</div>
					<div className="col-md-8 col-lg-7">
						<div className="row">
							<div className="col-md-4 mb-md-0 mb-4 border-left">
								<h2 className="footer-heading">Information Link</h2>
								<ul className="list-unstyled">
                                    {/* <li><a href="#" className="py-1 d-block"><i className="fa fa-registered me-1"></i>Registration Link</a></li> */}
                                    <li><a href="/contact" className="py-1 d-block"><i className="fa fa-address-book me-1"></i>Contact</a></li>
                                    <li><a href="/faq" className="py-1 d-block"><i className="fab fa-question me-1"></i>FAQ</a></li>
                                    <li><a href="https://www.iysa.or.id/" target="_blank" className="py-1 d-block"><i className="fa fa-house me-1"></i>Our Main Website</a></li>
                                </ul>
							</div>
							<div className="col-md-4 mb-md-0 mb-4 border-left">
								<h2 className="footer-heading">Contact Info</h2>
								<ul className="list-unstyled">
                                    <li><a href="https://goo.gl/maps/gEzFyE9gtXEyRfA26" className="py-1 d-block" target="_blank"> <i className="fa fa-map-marker me-1"></i> Jl. Kemang RT 03 RW 06</a></li>
                                    <li><a href="https://wa.me/6281770914129" className="py-1 d-block" target="_blank"><i className="fa fa-phone me-1"></i>+6281770914129</a></li>
                                    <li><a href="mailto:wecc.iysa@gmail.com" target="_blank" className="py-1 d-block"><i className="fa fa-envelope me-1"></i>wecc.iysa@gmail.com</a></li>
                                </ul>
							</div>
							<div className="col-md-4 mb-md-0 mb-4 border-left">
								<h2 className="footer-heading">Social Media</h2>
								<ul className="list-unstyled">
                                    <li><a href="https://www.facebook.com/profile.php?id=100063979907207" target="_blank" className="py-1 d-block"><i className="fab fa-facebook-f me-1"></i>Facebook</a></li>
                                    <li><a href="https://www.linkedin.com/company/indonesian-young-scientist-association-iysa" target="_blank" className="py-1 d-block"><i className="fab fa-linkedin-in me-1"></i>Linkedin</a></li>
                                    <li><a href="https://www.instagram.com/iysa_official/?hl=id" target="_blank" className="py-1 d-block"><i className="fab fa-instagram me-1"></i>Instagram</a></li>
                                    <li><a href="https://www.tiktok.com/@iysa.official" target="_blank" className="py-1 d-block"><i className="fab fa-tiktok me-1"></i>Tiktok</a></li>
                                </ul>
							</div>
						</div>
					</div>
				</div>
				<div className="row mt-5">
                    <div className="col-md-6 col-lg-8 mx-auto">
                        <p className="copyright text-center">Copyright IYSA IT All rights reserved </p>
                    </div>
                </div>
			</div>
		</footer>
      </>
    )
  }
  
  export default Footer