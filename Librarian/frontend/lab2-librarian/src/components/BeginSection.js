import React from 'react';
import {BrowserRouter as Redirect, Link, Router} from 'react-router-dom';
import researchers from '../sevi/public/assets/img/gallery/researchers.png';
import librarian from '../sevi/public/assets/img/gallery/librarian.png';
import societies from '../sevi/public/assets/img/gallery/societies.png';
import authors from '../sevi/public/assets/img/gallery/authors.png';

const BeginSection = (props) => {
    return (<section>

            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-auto mb-5 mb-md-7">
                        <h1 className="fw-semi-bold text-warning">Our <span className="text-1100">resources</span></h1>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-6 col-lg-3 mb-4 mb-lg-0 text-center">
                        <div className="px-0 px-lg-3"><img className="img-fluid mb-4" src={`${researchers}`}
                                                           width="100" alt="..."/>
                            <h3 className="h5 mb-4 font-base">Researchers</h3>
                            <p className="lh-lg">Register online Discover tools and manage alerts Learn about how to
                                access</p>
                        </div>
                    </div>
                    <div className="col-sm-6 col-lg-3 mb-4 mb-lg-0 text-center">
                        <div className="px-0 px-lg-3"><img className="img-fluid mb-4" src={`${librarian}`}
                                                           width="100" alt="..."/>
                            <h3 className="h5 mb-4 font-base">Librarian</h3>
                            <p className="lh-lg">Manage your account View products and solutions Find resources and
                                support</p>
                        </div>
                    </div>
                    <div className="col-sm-6 col-lg-3 mb-4 mb-lg-0 text-center">
                        <div className="px-0 px-lg-3"><img className="img-fluid mb-4" src={`${societies}`}
                                                           width="100" alt="..."/>
                            <h3 className="h5 mb-4 font-base">Societies</h3>
                            <p className="lh-lg">Publish with Wiley Explore our resource library Learn about topics and
                                trends</p>
                        </div>
                    </div>
                    <div className="col-sm-6 col-lg-3 mb-4 mb-lg-0 text-center">
                        <div className="px-0 px-lg-3"><img className="img-fluid mb-4" src={`${authors}`}
                                                           width="100" alt="..."/>
                            <Link to={"/author_form"}>
                                <h3 className="h5 mb-4 font-base">Authors</h3>
                            </Link>
                                <p className="lh-lg">Submit a paper Track your article Learn about Open Access</p>
                        </div>
                    </div>
                </div>
            </div>

    </section>)
}

export default BeginSection;