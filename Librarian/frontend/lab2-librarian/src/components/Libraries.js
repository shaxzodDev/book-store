import React, {lazy, Suspense} from 'react';
import ourLibs from '../sevi/public/assets/img/illustrations/our-libraries.png';
import libs from '../sevi/public/assets/img/illustrations/libraries-bg.png';
import history from "../history";
import Layout from "./Layout";
import {Link, Route, Router, Switch} from "react-router-dom";
import ScrollTop from "../services/ScrollTop";
import {PrivateRoute} from "../services/PrivateRoute";

const Libraries = (props) =>
{
    return (
        <>
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
                    <h1 className="fw-semi-bold text-warning">Bizning <span className="text-1100">kutubxonalar</span></h1>
                    <p className="pt-3 lh-lg">Sizning o'quv ro'yxatingiz, boshlash uchun ajoyib,
                        lekin siz ko'plap kategoriyalardagilarni ham o'qiysiz, vitrinamizga marhamat</p>
                    <div className="py-3">
                        <Link to={"/shelf"}>
                            <button className="btn btn-lg btn-primary rounded-pill font-base" type="submit">Ko'proq ko'ring</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    </section>
        </>)
}

export default Libraries;