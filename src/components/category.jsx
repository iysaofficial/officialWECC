function Category() {  
    return (
      <>
      <section className="category-section" id="category">
            <div className="container">
                <div className="text-center">
                    <h2 className="section-heading text-uppercase mb-5 fw-bold">Category</h2>
                    {/* <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3> */}
                </div>
                <div className="row text-center">
                    <div className="cat-item col-md-4">
                        <span className="fa-stack fa-4x">
                            <i className="fas fa-circle fa-stack-2x"></i>
                            <i className="fas fa-chart-line fa-stack-1x fa-inverse"></i>
                        </span>
                        <h4 className="my-3">Business Plan</h4>
                        {/*Button trigger modal*/}
                        <button type="button" class="btn mb-3 btn-action" data-bs-toggle="modal" data-bs-target="#exampleModal">
                            Read More
                            </button>

                            {/* <!-- Modal --> */}
                            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                <div class="modal-dialog">
                                    <div class="modal-content">
                                        <div class="modal-header">
                                            <h5 class="modal-title" id="exampleModalLabel">Business Plan</h5>
                                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                        </div>
                                        <div class="modal-body">
                                            Participants create a written document that contains all the information about their business. This document usually contains detailed business marketing and sales strategies, income and outcomes of the business, financial conditions, and other information. The function of making a business plan is to become a reference for business people to be able to achieve goals in the long term. In addition, a business plan can illustrate whether the business is feasible and able to face all challenges in the future.
                                        </div>
                                        <div class="modal-footer">
                                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                    </div>
                    <div className="cat-item col-md-4">
                        <span className="fa-stack fa-4x">
                            <i className="fas fa-circle fa-stack-2x"></i>
                            <i className="fas fa-shopping-bag fa-stack-1x fa-inverse"></i>

                        </span>
                        <h4 className="my-3">Commercial Product</h4>
                        {/*Button trigger modal*/}
                        <button type="button" class="btn mb-3 btn-action" data-bs-toggle="modal" data-bs-target="#exampleModal2">
                            Read More
                            </button>

                            {/* <!-- Modal --> */}
                            <div class="modal fade" id="exampleModal2" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                <div class="modal-dialog">
                                    <div class="modal-content">
                                        <div class="modal-header">
                                            <h5 class="modal-title" id="exampleModalLabel">Commercial Product</h5>
                                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                        </div>
                                        <div class="modal-body">
                                            Participants must already have a project in the form of a finished product, either a new product that will be traded or a product that has already been traded. The product here is certainly a product that is useful, can attract consumers to buy, has competitiveness and so on.
                                        </div>
                                        <div class="modal-footer">
                                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                    </div>
                    <div className="cat-item col-md-4">
                        <span className="fa-stack fa-4x">
                            <i className="fas fa-circle fa-stack-2x"></i>
                            <i className="fas fa-microscope fa-stack-1x fa-inverse"></i>
                        </span>
                        <h4 className="my-3">Research Paper</h4>
                            
                            {/*Button trigger modal*/}
                            <button type="button" class="btn mb-3 btn-action" data-bs-toggle="modal" data-bs-target="#exampleModal3">
                            Read More
                            </button>

                            {/* <!-- Modal --> */}
                            <div class="modal fade" id="exampleModal3" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                <div class="modal-dialog">
                                    <div class="modal-content">
                                        <div class="modal-header">
                                            <h5 class="modal-title" id="exampleModalLabel">Research Paper</h5>
                                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                        </div>
                                        <div class="modal-body">
                                            paperwork in the field of economics in general which aims to study an economic phenomenon or problem. This paperwork meets scientific criteria, namely objective, systematic and logical.
                                        </div>
                                        <div class="modal-footer">
                                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                    </div>
                </div>
            </div>
        </section>
      </>
    )
  }
  
  export default Category