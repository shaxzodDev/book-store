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
                        <h1 className="fw-semi-bold text-warning">Bizning <span className="text-1100">resurslar</span></h1>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-6 col-lg-3 mb-4 mb-lg-0 text-center">
                        <div className="px-0 px-lg-3"><img className="img-fluid mb-4" src={`${researchers}`}
                                                           width="100" alt="..."/>
                            <h3 className="h5 mb-4 font-base">Izlanuvchilar</h3>
                            <p className="lh-lg">Izlanuvchilar o'zlariga kerakli bo'lgan kitoblarni online o'qishlari mumkin!</p>
                        </div>
                    </div>
                    <div className="col-sm-6 col-lg-3 mb-4 mb-lg-0 text-center">
                        <div className="px-0 px-lg-3"><img className="img-fluid mb-4" src={`${librarian}`}
                                                           width="100" alt="..."/>
                            <h3 className="h5 mb-4 font-base">Kutubxonachilar</h3>
                            <p className="lh-lg">Kutubxonachilar vitrinalarni nazorat qilishlari mumkin</p>
                        </div>
                    </div>
                    <div className="col-sm-6 col-lg-3 mb-4 mb-lg-0 text-center">
                        <div className="px-0 px-lg-3"><img className="img-fluid mb-4" src={`${societies}`}
                                                           width="100" alt="..."/>
                            <h3 className="h5 mb-4 font-base">Fikr mulohazalar</h3>
                            <p className="lh-lg">Foydalanuvchilar mualliflar fikr mulohazalarini kuzatib borishlari mumkin</p>
                        </div>
                    </div>
                    <div className="col-sm-6 col-lg-3 mb-4 mb-lg-0 text-center">
                        <div className="px-0 px-lg-3"><img className="img-fluid mb-4" src={`${authors}`}
                                                           width="100" alt="..."/>
                            <Link to={"/author_form"}>
                                <h3 className="h5 mb-4 font-base">Mualliflar</h3>
                            </Link>
                                <p className="lh-lg">O'z kitoblarini hamda fikr mulohazalarini yuklashlari mumkin</p>
                        </div>
                    </div>
                </div>
            </div>

    </section>)
}

export default BeginSection;