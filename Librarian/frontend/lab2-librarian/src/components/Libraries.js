import React from 'react';
import ourLibs from '../sevi/public/assets/img/illustrations/our-libraries.png';
import libs from '../sevi/public/assets/img/illustrations/libraries-bg.png';

const Libraries = (props) =>
{
    return (
        <section id="libraries">
        <div className="bg-holder"
             style={{backgroundImage: `url(${libs})`, backgroundPosition: `left bottom`, backgroundSize: `contain`}}>
        </div>

        <div className="container">
            <div className="row g-xl-0 align-items-center">
                <div className="col-md-5 col-lg-7 text-xl-center"><img className="img-fluid mb-5 mb-md-0"
                                                                       src={`${ourLibs}`}
                                                                       width="620" alt=""/></div>
                <div className="col-md-7 col-lg-4 text-center text-md-start offset-lg-1 offset-xxl-0">
                    <h1 className="fw-semi-bold text-warning">Our <span className="text-1100">libraries</span></h1>
                    <p className="pt-3 lh-lg">Your reading list is a good place to start, but you will be expected to read
                        more widely too. Use Sevi to search for information on your topic, and to find books, journal
                        articles and other materials in the Library.</p>
                    <div className="py-3">
                        <button className="btn btn-lg btn-primary rounded-pill font-base" type="submit">Learn More</button>
                    </div>
                </div>
            </div>
        </div>
    </section>)
}

export default Libraries;